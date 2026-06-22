exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Missing OPENROUTER_API_KEY in Netlify environment variables.' }) };
  }

  let body;
  try { body = JSON.parse(event.body || '{}'); } catch (e) { body = {}; }
  const message = body.message || '';
  const context = body.context || {};
  if (!message.trim()) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Message is required.' }) };
  }

  const systemPrompt = `You are Nash Tutor, a friendly entrepreneurship course tutor for EAI 1200: Entrepreneurship & Innovation.
Focus only on course-relevant concepts: Build-Measure-Learn, riskiest assumption, hypothesis, MVP, validated learning, pivot vs persevere, product-market fit, Sean Ellis 40% test, moats, distribution, unit economics, CAC, LTV, LTV/CAC, and payback.
Style rules:
- Explain simply and directly.
- Use exam-trap language.
- Give short examples.
- When asked to quiz, ask one question at a time and do not reveal the answer immediately.
- When a student makes a mistake, explain the likely trap and give a similar practice question.
- Keep answers concise unless the student asks for detail.`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://nash-guide-to-passing.netlify.app',
        'X-Title': 'Nash Tutor'
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Student progress context: ${JSON.stringify(context)}\n\nStudent question: ${message}` }
        ],
        temperature: 0.4,
        max_tokens: 700
      })
    });

    const data = await response.json();
    if (!response.ok) {
      return { statusCode: response.status, body: JSON.stringify({ error: data.error?.message || 'OpenRouter request failed.' }) };
    }
    const reply = data.choices?.[0]?.message?.content || 'No tutor reply received.';
    return { statusCode: 200, body: JSON.stringify({ reply }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message || 'Server error.' }) };
  }
};
