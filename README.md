# Nash V5 — Your guide to passing

This version keeps the V4 interface and adds:

- AI Tutor tab using a Netlify Function + OpenRouter
- Dashboard with readiness score
- Smart diagnostic study plan
- Topic-specific exam mode
- Startup Canvas + copy/export summary
- 5-minute emergency mode
- Teacher wording translator
- Memory tricks

## Netlify AI Tutor setup

1. Upload this folder/ZIP to Netlify.
2. In Netlify, open your site.
3. Go to **Site configuration → Environment variables**.
4. Add this variable:

```txt
OPENROUTER_API_KEY
```

5. Paste your OpenRouter API key as the value.
6. Redeploy the site.
7. Open Nash and click **Tutor**.

Optional variable:

```txt
OPENROUTER_MODEL=openai/gpt-4o-mini
```

You can change it to another OpenRouter model later.
