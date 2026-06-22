
const modules = {
  bml: {
    title:"Build–Measure–Learn", session:"Session 14", subtitle:"From riskiest assumption to real experiment", time:"15–18 min",
    goal:"Plan experiments backwards: Learn → Measure → Build.",
    recovery:["BML is a system for learning under uncertainty.","You start with the learning goal, not the build.","A hypothesis must have a behavior, metric, and threshold.","The MVP is the smallest artifact that gives evidence."],
    traps:["Building before knowing what you need to learn.","Using vague metrics like “more users.”","Treating opinions as evidence."],
    lessons:[
      {kind:"confidence", when:"before"},
      {kind:"read", title:"1. What the slide says vs. what it means", slide:"Build–Measure–Learn, but planned in reverse: Learn → Measure → Build.", meaning:"Do not start by making the product. Start by deciding what you need to learn. Then choose the metric. Only then build the smallest artifact that can produce that metric.", teacher:"Building feels productive, but it can be fake progress. If you build without a learning goal, you may create something nice that answers the wrong question.", trap:"Saying “we learned a lot” without data. Validated learning means evidence changed your decision."},
      {kind:"read", title:"2. Risky assumption vs. hypothesis", html:`<p>A <b>riskiest assumption</b> is the big belief that kills the idea if false. A <b>hypothesis</b> is a narrow, testable slice of that assumption.</p><table class="table-lite"><tr><th>Weak</th><th>Strong</th></tr><tr><td>Students will use our app.</td><td>At least 6/10 students who scan the QR will complete one module and submit feedback.</td></tr></table>`},
      {kind:"interactiveBuilder", title:"3. Mini BML builder"},
      {kind:"quiz", title:"4. Check", question:"Which hypothesis is strongest for a one-week experiment?", choices:["Students need help understanding lectures.","Students will like our website.","At least 6/10 students who scan the QR will complete one module and submit feedback.","Our app will become popular if teachers share it."], answer:2, explanations:["Too broad. It describes a problem but not a test.","Too vague and based on liking, not behavior.","Correct. It has behavior and threshold.","Too external and not testable this week."]},
      {kind:"apply", title:"5. Copy-ready startup output", prompt:"Fill the boxes, then generate a paragraph you can copy.", fields:["Riskiest assumption","Hypothesis","Metric / threshold","Smallest artifact"], output:"Our riskiest assumption is: {0}. We will test it with this hypothesis: {1}. The metric we will use is: {2}. The smallest artifact we will build is: {3}."},
      {kind:"confidence", when:"after"}
    ]
  },
  pivot:{
    title:"Pivot vs. Persevere", session:"Session 13", subtitle:"Change strategy without abandoning the vision", time:"15 min",
    goal:"Decide whether to pivot or persevere using actionable evidence.",
    recovery:["A pivot is not failure.","Pivot means strategy changes but vision stays.","Persevere when actionable metrics improve.","Pick a named pivot type, not random change."],
    traps:["Using vanity metrics to justify continuing.","Calling every change a pivot.","Trusting averages without segmenting."],
    lessons:[
      {kind:"confidence", when:"before"},
      {kind:"read", title:"1. What the slide says vs. what it means", slide:"A pivot is a change in strategy without a change in vision.", meaning:"You are not abandoning the mission. You are changing the route because evidence shows the current route is weak.", teacher:"A real pivot is what a serious team does when the data says the original strategy is not working.", trap:"Pivoting because you are bored or got one negative comment. A real pivot is triggered by evidence."},
      {kind:"read", title:"2. Signals", html:`<table class="table-lite"><tr><th>Pivot when...</th><th>Persevere when...</th></tr><tr><td>Experiments fail</td><td>Actionable metrics improve</td></tr><tr><td>Metrics are flat</td><td>Early adopters are passionate</td></tr><tr><td>Users behave unexpectedly</td><td>Experiments produce learning</td></tr></table>`},
      {kind:"classifier", title:"3. Pivot classifier", prompt:"Classify each case.", cases:[["One feature becomes the whole product.","Zoom-In"],["Same product, different customer.","Customer Segment"],["Same customer, different problem.","Customer Need"],["App becomes platform, or platform becomes app.","Platform"],["Same product, different revenue model.","Value Capture"]], options:["Zoom-In","Customer Segment","Customer Need","Platform","Value Capture"]},
      {kind:"quiz", title:"4. Scenario", question:"MealSync retains 5/5 apartment students and 0/3 dorm students. What should it likely do?", choices:["Persevere with all students because average retention is okay","Customer segment pivot toward apartment students","Platform pivot","Value capture pivot"], answer:1, explanations:["The average hides the real split.","Correct. Same product, better segment.","No platform signal here.","No pricing/revenue model signal here."]},
      {kind:"apply", title:"5. Copy-ready pivot decision", prompt:"Write your current project decision.", fields:["Current evidence","Decision: pivot/persevere","Reason","Next experiment"], output:"Based on our evidence ({0}), we should {1}. The reason is: {2}. Our next experiment is: {3}."},
      {kind:"confidence", when:"after"}
    ]
  },
  pmf:{
    title:"Product–Market Fit", session:"Session 13", subtitle:"When users would be disappointed without you", time:"14–16 min",
    goal:"Separate real demand from polite enthusiasm.",
    recovery:["PMF is stronger than liking.","Sean Ellis asks active users how they would feel if the product disappeared.","40% very disappointed is a strong signal.","Segment grey-zone results."],
    traps:["Asking friends.","Testing people who never used the product.","Trusting overall averages."],
    lessons:[
      {kind:"confidence", when:"before"},
      {kind:"read", title:"1. What the slide says vs. what it means", slide:"PMF is not “people like it.” PMF is “if you take it away, they get angry.”", meaning:"Users need the product strongly enough that losing it would hurt. Nice feedback is weak; dependency is strong.", teacher:"A product with PMF has users who return, complain when it breaks, and recommend it without being begged.", trap:"Treating classmates saying “cool” as PMF. That is interest, not product-market fit."},
      {kind:"read", title:"2. Sean Ellis 40% test", html:`<p>Ask active recent users: <b>How would you feel if you could no longer use this product?</b></p><ul class="list"><li>Very disappointed</li><li>Somewhat disappointed</li><li>Not disappointed</li><li>I no longer use it</li></ul><p>40%+ “Very disappointed” is a strong PMF signal.</p>`},
      {kind:"quiz", title:"3. Check", question:"A team asks 8 close friends. 5 say they would be very disappointed. Does this prove PMF?", choices:["Yes, 62.5% is above 40%","No, sample is small and biased","Yes, if design is good","No, PMF only applies to B2B"], answer:1, explanations:["Wrong: biased and too small.","Correct.","Design does not fix biased data.","PMF applies broadly."]},
      {kind:"quiz", title:"4. Grey-zone scenario", question:"60 active users, 18 very disappointed = 30%. What next?", choices:["Scale aggressively","Pivot immediately","Segment the data","Ignore the test"], answer:2, explanations:["30% is not strong enough.","Too early without segmentation.","Correct. Look for a subgroup above 40%.","Ignoring evidence is not validated learning."]},
      {kind:"apply", title:"5. Copy-ready PMF question", prompt:"Generate a PMF-style question for your product.", fields:["Product name","Target active user","Use case"], output:"For {1} who use {0} for {2}: How would you feel if you could no longer use {0}? Options: Very disappointed / Somewhat disappointed / Not disappointed / I no longer use it."},
      {kind:"confidence", when:"after"}
    ]
  },
  moats:{
    title:"Moats & Differentiation", session:"Session 15/17", subtitle:"What protects you when everyone can build", time:"15–17 min",
    goal:"Explain why code alone is not a defensible advantage.",
    recovery:["A moat is a durable competitive advantage.","Code is easier to copy in the AI era.","Moats compound over time.","Distribution is the path to users; moat is what protects you."],
    traps:["Saying being first is a moat.","Thinking a nice UI is defensible.","Ignoring distribution."],
    lessons:[
      {kind:"confidence", when:"before"},
      {kind:"read", title:"1. What the slide says vs. what it means", slide:"In 2026, the build is no longer the moat.", meaning:"Because AI makes building faster, the product itself is easier to copy. Your defense must come from users, distribution, data, brand, switching costs, or regulation.", teacher:"If another student can copy your app this weekend, why do you still win?", trap:"Saying “our app is better” without explaining what becomes hard to copy over time."},
      {kind:"classifier", title:"2. Moat classifier", prompt:"Classify each advantage.", cases:[["Every new user makes the product more useful.","Network Effects"],["Leaving means losing years of data/workflows.","Switching Costs"],["Every interaction improves recommendations.","Data Advantage"],["People trust the name and pay a premium.","Brand"],["Competitors need licenses to enter.","Regulatory"]], options:["Network Effects","Switching Costs","Data Advantage","Brand","Regulatory"]},
      {kind:"quiz", title:"3. Check", question:"Which is NOT a moat?", choices:["Network effects","Switching costs","We had the idea first","Regulatory barriers"], answer:2, explanations:["This is a moat.","This is a moat.","Correct. Being first is not defensible by itself.","This is a moat."]},
      {kind:"read", title:"4. Distribution vs moat", html:`<p><b>Distribution</b> is how users find and start using your product. <b>Moat</b> is what protects you over time.</p><table class="table-lite"><tr><th>Early stage</th><th>Growth stage</th></tr><tr><td>Do things that do not scale</td><td>Optimize scalable channels</td></tr><tr><td>Founder runs sales</td><td>Sales team / product-led growth</td></tr></table>`},
      {kind:"apply", title:"5. Copy-ready moat statement", prompt:"Create a defensibility sentence.", fields:["Startup/product","Moat type","Why it compounds"], output:"For {0}, our potential moat is {1}. It becomes harder to copy over time because {2}."},
      {kind:"confidence", when:"after"}
    ]
  },
  unit:{
    title:"Unit Economics", session:"Session 18", subtitle:"CAC, LTV, ratio, payback, and the lever", time:"18–20 min",
    goal:"Know whether the business math works.",
    recovery:["CAC uses paying customers, not signups.","LTV is customer profit over tenure.","LTV/CAC ≥ 3× is healthy.","Payback shows when CAC is recovered."],
    traps:["Confusing CAC and CPA.","Mixing monthly revenue with tenure in years.","Ignoring segment differences."],
    lessons:[
      {kind:"confidence", when:"before"},
      {kind:"read", title:"1. What the slide says vs. what it means", slide:"Once people pay, the question shifts: does the math actually work?", meaning:"A product can be loved and still be a bad business if each customer costs more to acquire than they return in profit.", teacher:"After payment starts, usefulness is not enough. The business model must survive mathematically.", trap:"Celebrating revenue without checking CAC, LTV, payback, and margin."},
      {kind:"read", title:"2. Core formulas", html:`<ul class="list"><li><b>CAC:</b> acquisition spend ÷ paying customers</li><li><b>LTV:</b> monthly revenue × gross margin × tenure</li><li><b>LTV/CAC:</b> ≥3× healthy, 1–3× tight, &lt;1× bleeding</li><li><b>Payback:</b> CAC ÷ monthly contribution</li></ul>`},
      {kind:"quiz", title:"3. CAC check", question:"$30k ads + $10k sales. 800 free signups, 100 paying customers. CAC?", choices:["$50","$400","$300","$133"], answer:1, explanations:["You divided by signups.","Correct.","Missing part of spend or wrong denominator.","Wrong denominator."]},
      {kind:"simulator", title:"4. Mini simulator", html:"<p>Change one input at a time and watch the health of the business change.</p>"},
      {kind:"quiz", title:"5. Scenario", question:"Price $5, cost $1, CAC $50, tenure 3 months. Contribution $4, LTV $12, ratio 0.24×. Best interpretation?", choices:["Healthy because margin is 80%","Bleeding because customers leave before paying back CAC","Tight because 3 months is enough","Cannot tell without signups"], answer:1, explanations:["Margin alone is misleading.","Correct.","Payback is 12.5 months, longer than tenure.","Signups are irrelevant to this calculation."]},
      {kind:"apply", title:"6. Copy-ready unit economics diagnosis", prompt:"Diagnose a business model.", fields:["CAC","LTV","Payback","Main lever"], output:"The business has CAC of {0}, LTV of {1}, and payback of {2}. The main lever to improve first is {3}."},
      {kind:"confidence", when:"after"}
    ]
  }
};

const glossary = [
 ["Actionable metric","A metric that tells you what decision to make next."],
 ["Vanity metric","A number that looks impressive but does not guide decisions."],
 ["BML","Build–Measure–Learn: a learning loop for testing startup assumptions."],
 ["Riskiest assumption","The belief that kills the idea if false."],
 ["Hypothesis","A specific, testable prediction with a measurable signal."],
 ["MVP","The smallest artifact that generates learning."],
 ["Pivot","A change in strategy without a change in vision."],
 ["Persevere","Continue because actionable evidence is improving."],
 ["PMF","Product–Market Fit: strong demand from a real market."],
 ["Sean Ellis 40% test","PMF test asking active users how disappointed they would be without the product."],
 ["CAC","Customer Acquisition Cost: acquisition spend divided by paying customers."],
 ["CPA","Cost Per Acquisition: channel/campaign-level acquisition cost."],
 ["LTV","Lifetime Value: profit generated by a customer over their relationship."],
 ["Payback","Time needed to recover CAC from customer contribution."],
 ["Moat","A durable competitive advantage that is hard to copy."],
 ["Distribution","How users find, start, and continue using your product."]
];

const modes = {
  missed:{icon:"!", title:"I missed the lecture", desc:"Full recovery pack + complete module.", start:"sessions"},
  confused:{icon:"?", title:"I attended but I’m confused", desc:"Teacher translation + traps first.", start:"paths"},
  quiz:{icon:"Q", title:"I need to prepare for a quiz", desc:"Exam Mode: scenario traps.", start:"exam"},
  startup:{icon:"↗", title:"I need to apply this to my startup", desc:"Copy-ready startup outputs.", start:"tools"},
  quick:{icon:"5", title:"I only have 5 minutes", desc:"Fast takeaway + trap.", start:"sessions"}
};

const app = document.getElementById("app");
let state = {
  route:"home", module:null, lessonIndex:0, selectedMode:localStorage.getItem("modeV4")||null,
  completed:JSON.parse(localStorage.getItem("completedV4")||"{}"),
  notes:JSON.parse(localStorage.getItem("notesV4")||"{}"),
  feedback:JSON.parse(localStorage.getItem("feedbackV4")||"[]"),
  confidence:JSON.parse(localStorage.getItem("confidenceV4")||"{}"),
  analytics:JSON.parse(localStorage.getItem("analyticsV4")||"{}"),
  examScore:JSON.parse(localStorage.getItem("examScoreV4")||'{"correct":0,"total":0}')
};
function save(){localStorage.setItem("completedV4",JSON.stringify(state.completed));localStorage.setItem("notesV4",JSON.stringify(state.notes));localStorage.setItem("feedbackV4",JSON.stringify(state.feedback));localStorage.setItem("confidenceV4",JSON.stringify(state.confidence));localStorage.setItem("analyticsV4",JSON.stringify(state.analytics));localStorage.setItem("examScoreV4",JSON.stringify(state.examScore)); if(state.selectedMode)localStorage.setItem("modeV4",state.selectedMode);}
function track(k){state.analytics[k]=(state.analytics[k]||0)+1;save();}
function setRoute(route,module=null,idx=0){state.route=route;state.module=module;state.lessonIndex=idx;track("route_"+route);render();}
document.querySelectorAll(".bottom-nav button").forEach(btn=>btn.addEventListener("click",()=>setRoute(btn.dataset.route)));
document.getElementById("resetBtn").addEventListener("click",()=>{if(confirm("Reset progress on this device?")){localStorage.clear();location.reload();}});
function navActive(){document.querySelectorAll(".bottom-nav button").forEach(btn=>{
 const navRoute = state.route==="module"||state.route==="modules"||state.route==="sessions" ? "paths" : (state.route==="tool"||state.route==="dashboard" ? "tools" : state.route);
 btn.classList.toggle("active", btn.dataset.route===navRoute);
});}
function render(){navActive(); const r=state.route; if(r==="home")return home(); if(r==="onboarding")return onboarding(); if(r==="paths")return paths(); if(r==="sessions")return sessions(); if(r==="modules")return modulesPage(); if(r==="module")return lessonPage(state.module,state.lessonIndex); if(r==="exam")return examPage(); if(r==="tutor")return tutorPage(); if(r==="dashboard")return dashboardPage(); if(r==="tools")return toolsPage(); if(r==="tool")return toolPage(state.module); if(r==="feedback")return feedbackPage();}

function home(){
 const done=Object.keys(state.completed).filter(k=>state.completed[k]).length;
 app.innerHTML=`<section class="card hero"><span class="badge gold">v4 product MVP</span><h2 class="hero-title">Nash.</h2><p><b>Your guide to passing.</b><br>Recover the explanation, prepare for traps, and apply the course to your startup.</p><button class="primary-btn" onclick="setRoute('onboarding')">Start with my situation</button><button class="secondary-btn" style="margin-top:10px" onclick="setRoute('paths')">Choose student/founder path</button></section>
 <section class="card"><h3>What Nash does</h3><div class="pill-row"><span class="pill">Lecture recovery packs</span><span class="pill">Exam Mode</span><span class="pill">Glossary</span><span class="pill">Confidence checks</span><span class="pill">Copy-ready outputs</span></div><p class="small">Built as an individual MVP experiment for Entrepreneurship & Innovation.</p></section>
 <section class="card"><h3>Progress</h3><div class="progress-wrap"><div class="progress-bar" style="width:${(done/5)*100}%"></div></div><p class="small">${done}/5 modules completed. Exam score: ${state.examScore.correct}/${state.examScore.total}.</p></section>`;
}
function onboarding(){
 app.innerHTML=`<section class="card"><span class="badge">Personalized entry</span><h2>Why are you here?</h2>${Object.entries(modes).map(([id,m])=>`<button class="mode-btn" onclick="chooseMode('${id}')"><span class="icon">${m.icon}</span><span><b>${m.title}</b><small>${m.desc}</small></span></button>`).join("")}</section>`;
}
window.chooseMode=id=>{state.selectedMode=id;save();setRoute(modes[id].start);}
function paths(){
 app.innerHTML=`<section class="card"><span class="badge">Choose path</span><h2>Student path or founder path?</h2><button class="mode-btn" onclick="setRoute('sessions')"><span class="icon">S</span><span><b>Student path</b><small>Recover lectures, avoid traps, practice for quizzes.</small></span></button><button class="mode-btn" onclick="setRoute('tools')"><span class="icon">F</span><span><b>Founder path</b><small>Apply concepts to your startup and generate copy-ready outputs.</small></span></button></section>`;
}
function sessions(){
 app.innerHTML=`<section class="card"><span class="badge">Lecture recovery packs</span><h2>Recover a session</h2><p class="small">Each pack gives: what the lecture was about, key takeaways, traps, questions, and startup application.</p><div class="grid">${Object.entries(modules).map(([id,m])=>`<button class="module-card" onclick="sessionPack('${id}')"><strong>${m.session}: ${m.title}</strong><span>${m.recovery[0]} · ${m.traps.length} traps</span></button>`).join("")}</div></section>`;
}
window.sessionPack=id=>{
 const m=modules[id];
 app.innerHTML=`<section class="card"><span class="badge">Recovery pack</span><h2>${m.session}: ${m.title}</h2><h3>What this lecture was about</h3><p>${m.goal}</p><h3>Key takeaways</h3><ul class="list">${m.recovery.map(x=>`<li>${x}</li>`).join("")}</ul><h3>Common traps</h3><ul class="list">${m.traps.map(x=>`<li>${x}</li>`).join("")}</ul><button class="primary-btn" onclick="setRoute('module','${id}',0)">Open full module</button><button class="secondary-btn" style="margin-top:10px" onclick="setRoute('exam')">Practice exam traps</button></section>`;
}
function modulesPage(){
 app.innerHTML=`<section class="card"><h2>All modules</h2><div class="grid">${Object.entries(modules).map(([id,m])=>`<button class="module-card" onclick="setRoute('module','${id}',0)"><strong>${state.completed[id]?"✓ ":""}${m.title}</strong><span>${m.subtitle} · ${m.time} · ${m.lessons.length} screens</span></button>`).join("")}</div></section>`;
}
function lessonPage(id,idx){
 const m=modules[id]; idx=Math.max(0,Math.min(idx,m.lessons.length-1)); state.lessonIndex=idx; const l=m.lessons[idx]; const pct=Math.round(((idx+1)/m.lessons.length)*100); track("open_"+id);
 app.innerHTML=`<section class="card"><div class="lesson-top"><span class="badge">${m.session}</span><span class="small">${idx+1}/${m.lessons.length}</span></div><h2>${m.title}</h2><p>${m.goal}</p><div class="stepper">${m.lessons.map((_,i)=>`<div class="dot ${i<idx?'done':''} ${i===idx?'active':''}"></div>`).join("")}</div><div class="progress-wrap"><div class="progress-bar" style="width:${pct}%"></div></div></section>${lessonBody(l,id,idx)}<section class="card"><div class="nav-row"><button class="secondary-btn" onclick="prevLesson('${id}')">${idx===0?"Modules":"Previous"}</button><button class="primary-btn" onclick="nextLesson('${id}')">${idx===m.lessons.length-1?"Finish module":"Next"}</button></div></section>`; attachSim();
}
function lessonBody(l,id,idx){
 if(l.kind==="confidence")return confidenceScreen(id,l.when);
 if(l.kind==="read"&&l.slide)return `<section class="card"><h3>${l.title}</h3><div class="slide-box"><b>What the slide says</b><p>${l.slide}</p></div><div class="teacher-box"><b>What it really means</b><p>${l.meaning}</p></div><div class="example-box"><b>Teacher-style explanation</b><p>${l.teacher}</p></div><div class="trap"><b>Don’t fall for this trap</b><p>${l.trap}</p></div></section>`;
 if(l.kind==="read")return `<section class="card"><h3>${l.title}</h3>${l.html}</section>`;
 if(l.kind==="quiz")return quizHtml(l,id,idx);
 if(l.kind==="classifier")return classifierHtml(l,id,idx);
 if(l.kind==="simulator")return simulatorHtml(l);
 if(l.kind==="interactiveBuilder")return bmlBuilder();
 if(l.kind==="apply")return applyHtml(l,id,idx);
}
function confidenceScreen(id,when){
 const key=`${id}_${when}`; const val=state.confidence[key]||0;
 return `<section class="card"><span class="badge blue">${when==="before"?"Before":"After"} confidence</span><h3>How confident are you with this topic ${when==="before"?"before":"now after"} the module?</h3><div class="conf-grid">${[1,2,3,4,5].map(n=>`<button class="${val==n?'selected':''}" onclick="setConfidence('${id}','${when}',${n})">${n}</button>`).join("")}</div><p class="small">1 = lost, 5 = ready to explain it.</p>${when==="after"?confidenceDelta(id):""}</section>`;
}
function confidenceDelta(id){const b=state.confidence[`${id}_before`], a=state.confidence[`${id}_after`]; if(!b||!a)return ""; const d=a-b; return `<div class="note"><b>Confidence change:</b> ${b} → ${a} (${d>=0?"+":""}${d})</div>`;}
window.setConfidence=(id,when,n)=>{state.confidence[`${id}_${when}`]=n;save();lessonPage(id,state.lessonIndex);}
function quizHtml(l,id,idx){
 return `<section class="card" id="quiz-${id}-${idx}"><span class="badge">Question</span><h3>${l.title}</h3><p><b>${l.question}</b></p>${l.choices.map((c,i)=>`<button class="choice-btn" onclick="answerQuiz('${id}',${idx},${i})">${String.fromCharCode(65+i)}. ${c}</button>`).join("")}<div class="quiz-result" style="display:none"></div></section>`;
}
window.answerQuiz=(id,idx,choice)=>{
 const l=modules[id].lessons[idx]; const box=document.getElementById(`quiz-${id}-${idx}`); const btns=box.querySelectorAll(".choice-btn"); btns.forEach((b,i)=>{b.disabled=true;if(i===l.answer)b.classList.add("correct");if(i===choice&&choice!==l.answer)b.classList.add("wrong")}); const correct=choice===l.answer; state.examScore.total++; if(correct)state.examScore.correct++; save(); const result=box.querySelector(".quiz-result"); result.style.display="block"; result.innerHTML=`<b>${correct?"Correct.":"Not quite."}</b> ${l.explanations?l.explanations[choice]:l.explanation||""}<hr><b>Why the correct answer works:</b> ${l.explanations?l.explanations[l.answer]:""}`;
}
function classifierHtml(l,id,idx){return `<section class="card" id="classifier-${id}-${idx}"><span class="badge">Classifier</span><h3>${l.title}</h3><p>${l.prompt}</p>${l.cases.map((c,i)=>`<div class="example-box"><p><b>${i+1}. ${c[0]}</b></p><select id="class-${id}-${idx}-${i}"><option value="">Choose...</option>${l.options.map(o=>`<option>${o}</option>`).join("")}</select></div>`).join("")}<button class="primary-btn" onclick="checkClassifier('${id}',${idx})">Check answers</button><div class="quiz-result" style="display:none"></div></section>`}
window.checkClassifier=(id,idx)=>{const l=modules[id].lessons[idx];let c=0;l.cases.forEach((x,i)=>{if(document.getElementById(`class-${id}-${idx}-${i}`).value===x[1])c++});const box=document.querySelector(`#classifier-${id}-${idx} .quiz-result`);box.style.display="block";box.innerHTML=`<b>${c}/${l.cases.length} correct.</b><br>${l.cases.map((x,i)=>`${i+1}. ${x[1]}`).join("<br>")}`;}
function applyHtml(l,id,idx){
 const key=`${id}-${idx}`; const saved=state.notes[key]||{}; return `<section class="card"><span class="badge blue">Copy-ready output</span><h3>${l.title}</h3><p>${l.prompt}</p>${l.fields.map((f,i)=>`<label>${f}</label><textarea id="field-${i}" placeholder="${f}">${saved[i]||""}</textarea>`).join("")}<button class="primary-btn" onclick="generateOutput('${id}',${idx})">Generate copy-ready answer</button><div class="example-box copy-output" id="outputBox">${saved.output||""}</div></section>`;
}
window.generateOutput=(id,idx)=>{const l=modules[id].lessons[idx];let vals=l.fields.map((_,i)=>document.getElementById(`field-${i}`).value);let out=l.output;vals.forEach((v,i)=>out=out.replaceAll(`{${i}}`,v||"[missing]"));state.notes[`${id}-${idx}`]={...vals,output:out};save();document.getElementById("outputBox").textContent=out;}
function bmlBuilder(){const s=state.notes["bml-builder"]||{};return `<section class="card"><span class="badge">Interactive</span><h3>Mini BML builder</h3><label>1. Learn</label><textarea id="learnBox">${s.learn||""}</textarea><label>2. Measure</label><textarea id="measureBox">${s.measure||""}</textarea><label>3. Build</label><textarea id="buildBox">${s.build||""}</textarea><button class="primary-btn" onclick="saveBmlBuilder()">Save BML plan</button><div class="note"><b>Self-check:</b> If your metric has no number, it is not testable enough yet.</div></section>`;}
window.saveBmlBuilder=()=>{state.notes["bml-builder"]={learn:learnBox.value,measure:measureBox.value,build:buildBox.value};save();alert("Saved.");}
function simulatorHtml(l){return `<section class="card"><span class="badge">Interactive</span><h3>${l.title}</h3>${l.html||""}<label>Monthly price</label><input id="price" type="number" value="5"><label>Monthly cost to serve</label><input id="cost" type="number" value="1"><label>CAC</label><input id="cac" type="number" value="50"><label>Average tenure, months</label><input id="tenure" type="number" value="3"><div class="kpi" style="margin-top:14px"><div><span class="small">Gross margin</span><strong id="marginOut">—</strong></div><div><span class="small">LTV</span><strong id="ltvOut">—</strong></div><div><span class="small">LTV/CAC</span><strong id="ratioOut">—</strong></div><div><span class="small">Payback</span><strong id="paybackOut">—</strong></div></div><div id="healthOut" class="note"></div></section>`;}
function attachSim(){if(!document.getElementById("price"))return;["price","cost","cac","tenure"].forEach(id=>document.getElementById(id).addEventListener("input",calcUnit));calcUnit();}
function money(n){return isFinite(n)?"$"+Math.round(n).toLocaleString():"—";}
function calcUnit(){const p=+price.value,c=+cost.value,ca=+cac.value,t=+tenure.value,con=p-c,margin=p>0?con/p:0,ltv=con*t,ratio=ca>0?ltv/ca:0,pay=con>0?ca/con:Infinity;marginOut.textContent=Math.round(margin*100)+"%";ltvOut.textContent=money(ltv);ratioOut.textContent=ratio.toFixed(2)+"×";paybackOut.textContent=isFinite(pay)?pay.toFixed(1)+" mo":"Never";let v=ratio>=3?"HEALTHY":ratio>=1?"TIGHT":"BLEEDING";healthOut.className="note "+(ratio>=3?"":"warning");healthOut.innerHTML=`<b>${v}</b><br>${ratio>=3?"Clears 3× rule.":ratio>=1?"Works but little room for error.":"Loses money per customer."}`;}
window.prevLesson=id=>{if(state.lessonIndex===0)return setRoute("modules");setRoute("module",id,state.lessonIndex-1);}
window.nextLesson=id=>{const m=modules[id];if(state.lessonIndex>=m.lessons.length-1){state.completed[id]=true;save();return completion(id);}setRoute("module",id,state.lessonIndex+1);}
function completion(id){const m=modules[id];app.innerHTML=`<section class="card"><span class="badge gold">Completed</span><h2>${m.title}</h2><p>You can now:</p><ul class="list">${m.recovery.map(x=>`<li>${x}</li>`).join("")}</ul>${confidenceDelta(id)}<button class="primary-btn" onclick="setRoute('feedback')">Give feedback</button><button class="secondary-btn" style="margin-top:10px" onclick="setRoute('modules')">Back to modules</button></section>`;}
function examPage(){
 const qs=[
  ["A question asks “Would you use this app?” What is the trap?",["Good Mom Test question","Future-opinion question","Actionable metric","Moat"],1],
  ["A startup reports 10,000 signups but no retention. What type of metric is likely being used?",["Vanity","Actionable","LTV","Payback"],0],
  ["CAC should be divided by:",["All signups","Website visitors","Paying customers acquired","Instagram followers"],2],
  ["If one segment has 90% retention and another has 0%, what should you do first?",["Trust the average","Segment the data","Raise prices","Ignore it"],1],
  ["“We had the idea first” is:",["A strong moat","Not a moat","A regulatory barrier","PMF"],1]
 ];
 app.innerHTML=`<section class="card"><span class="badge gold">Exam Mode</span><h2>Practice traps</h2><p>Score: ${state.examScore.correct}/${state.examScore.total}</p>${qs.map((q,i)=>`<button class="module-card" onclick="examQuestion(${i})"><strong>Trap ${i+1}</strong><span>${q[0]}</span></button>`).join("")}</section>`;
 window.examQuestion=i=>{const q=qs[i];app.innerHTML=`<section class="card" id="examQ"><span class="badge">Exam trap</span><h2>${q[0]}</h2>${q[1].map((c,j)=>`<button class="choice-btn" onclick="answerExam(${i},${j})">${String.fromCharCode(65+j)}. ${c}</button>`).join("")}<div class="quiz-result" style="display:none"></div></section><section class="card"><button class="secondary-btn" onclick="setRoute('exam')">Back to Exam Mode</button></section>`;}
 window.answerExam=(i,j)=>{const q=qs[i],box=document.getElementById("examQ"),btns=box.querySelectorAll(".choice-btn");btns.forEach((b,k)=>{b.disabled=true;if(k===q[2])b.classList.add("correct");if(k===j&&j!==q[2])b.classList.add("wrong")});state.examScore.total++;if(j===q[2])state.examScore.correct++;save();const r=box.querySelector(".quiz-result");r.style.display="block";r.innerHTML=j===q[2]?"<b>Correct.</b> Good trap recognition.":"<b>Not quite.</b> Review the related module.";}
}
function toolsPage(){app.innerHTML=`<section class="card"><span class="badge">Tools</span><h2>Founder + student tools</h2><div class="grid"><button class="module-card" onclick="setRoute('tool','diagnostic')"><strong>Diagnostic quiz</strong><span>Find what to study first.</span></button><button class="module-card" onclick="setRoute('tool','glossary')"><strong>Glossary</strong><span>Search key course terms.</span></button><button class="module-card" onclick="setRoute('tool','chatgpt')"><strong>Why not just ChatGPT?</strong><span>Defense page.</span></button><button class="module-card" onclick="setRoute('tool','analytics')"><strong>Local analytics</strong><span>Progress, confidence, and usage counters.</span></button><button class="module-card" onclick="setRoute('tool','bmlTool')"><strong>BML Builder</strong><span>Write learn → measure → build.</span></button></div></section>`;}
function toolPage(t){
 if(t==="glossary"){app.innerHTML=`<section class="card"><span class="badge">Glossary</span><h2>Course glossary</h2><div class="searchbox"><input id="gSearch" placeholder="Search a term..." oninput="renderGlossary(this.value)"></div><div id="gList"></div></section>`;renderGlossary("");return;}
 if(t==="chatgpt"){app.innerHTML=`<section class="card"><span class="badge">Defense</span><h2>Why not just ChatGPT?</h2><table class="table-lite"><tr><th>ChatGPT</th><th>Nash.</th></tr><tr><td>Blank chat</td><td>Guided course path</td></tr><tr><td>Depends on prompting skill</td><td>Designed for confused students</td></tr><tr><td>Generic summaries</td><td>Course traps, scenarios, and outputs</td></tr></table><div class="takeaway-box"><b>One-liner:</b> ChatGPT gives answers. Nash gives a guided path to passing.</div></section>`;return;}
 if(t==="analytics"){app.innerHTML=`<section class="card"><span class="badge">Local analytics</span><h2>Your data on this device</h2><p>Exam score: ${state.examScore.correct}/${state.examScore.total}</p><pre class="code-ish">${JSON.stringify({completed:state.completed, confidence:state.confidence, analytics:state.analytics},null,2)}</pre><button class="primary-btn" onclick="downloadData()">Download data JSON</button></section>`;return;}
 if(t==="diagnostic"){app.innerHTML=`<section class="card"><span class="badge">Diagnostic</span><h2>What should you study?</h2><label>What feels weakest?</label><select id="diag"><option value="unit">Startup math / unit economics</option><option value="bml">Experiments / hypothesis</option><option value="pivot">Pivot decisions</option><option value="moats">Moats / differentiation</option><option value="pmf">PMF / Sean Ellis</option></select><button class="primary-btn" onclick="diagGo()">Recommend module</button></section>`;return;}
 app.innerHTML=bmlBuilder()+`<section class="card"><button class="secondary-btn" onclick="setRoute('tools')">Back to tools</button></section>`;
}
window.renderGlossary=(q)=>{q=(q||"").toLowerCase();gList.innerHTML=glossary.filter(x=>x[0].toLowerCase().includes(q)||x[1].toLowerCase().includes(q)).map(x=>`<div class="example-box"><b>${x[0]}</b><p>${x[1]}</p></div>`).join("");}
window.diagGo=()=>setRoute("module",diag.value,0);
window.downloadData=()=>{const blob=new Blob([JSON.stringify({completed:state.completed,confidence:state.confidence,analytics:state.analytics,examScore:state.examScore,feedback:state.feedback},null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="nash-local-data.json";a.click();URL.revokeObjectURL(url);}
function feedbackPage(){app.innerHTML=`<section class="card"><span class="badge">Feedback</span><h2>Help improve Nash.</h2><label>Why did you use this?</label><select id="q0">${Object.values(modes).map(m=>`<option>${m.title}</option>`).join("")}</select><label>Did this help you understand better?</label><select id="q1"><option>Yes</option><option>Somewhat</option><option>No</option></select><label>Which part helped most?</label><select id="q2"><option>Teacher-style explanation</option><option>Common traps</option><option>Exam Mode</option><option>Glossary</option><option>Copy-ready outputs</option></select><label>Would you use this again?</label><select id="q3"><option>Yes</option><option>Maybe</option><option>No</option></select><label>What should be improved?</label><textarea id="q4"></textarea><button class="primary-btn" onclick="submitFeedback()">Submit feedback</button></section><section class="card"><p class="small">${state.feedback.length} responses saved locally.</p></section>`;}
window.submitFeedback=()=>{state.feedback.push({time:new Date().toISOString(),use:q0.value,helped:q1.value,part:q2.value,again:q3.value,improve:q4.value});save();alert("Feedback saved.");feedbackPage();}

/* =========================
   Nash V5 additions
   - Dashboard
   - Smart study plan
   - Topic exam sets
   - Startup canvas + export
   - Emergency mode
   - Teacher wording translator
   - Memory tricks
   - AI Tutor via Netlify Function + OpenRouter
========================= */

function moduleCount(){return Object.keys(modules).length;}
function completedCount(){return Object.values(state.completed).filter(Boolean).length;}
function readinessScore(){
  const modulePart = (completedCount()/moduleCount())*45;
  const examPart = state.examScore.total ? (state.examScore.correct/state.examScore.total)*35 : 0;
  const confidenceKeys = Object.keys(state.confidence).filter(k=>k.endsWith('_after'));
  const confAvg = confidenceKeys.length ? confidenceKeys.reduce((a,k)=>a+(+state.confidence[k]||0),0)/(confidenceKeys.length*5) : 0;
  const confPart = confAvg*20;
  return Math.round(Math.min(100,modulePart+examPart+confPart));
}
function weakestTopic(){
  const ids=Object.keys(modules);
  const incomplete=ids.find(id=>!state.completed[id]);
  if(incomplete) return incomplete;
  let lowest=ids[0], score=99;
  ids.forEach(id=>{const v=+(state.confidence[`${id}_after`]||state.confidence[`${id}_before`]||3); if(v<score){score=v;lowest=id;}});
  return lowest;
}
function strongestTopic(){
  let best='moats', score=-1;
  Object.keys(modules).forEach(id=>{const v=(state.completed[id]?4:0)+(+state.confidence[`${id}_after`]||0); if(v>score){score=v;best=id;}});
  return best;
}
function dashboardPage(){
  const weak=weakestTopic(), strong=strongestTopic(), ready=readinessScore();
  app.innerHTML=`<section class="card hero"><span class="badge gold">V5 Dashboard</span><h2>Student Dashboard</h2><div class="progress-ring"><strong>${ready}%</strong><span>readiness</span></div><p>Your strongest topic: <b>${modules[strong].title}</b></p><p>Your weakest topic: <b>${modules[weak].title}</b></p><p>Next step: complete the <b>${modules[weak].title}</b> recovery pack.</p><button class="primary-btn" onclick="setRoute('module','${weak}',0)">Start recommended step</button></section>
  <section class="card"><h3>Progress</h3><div class="kpi"><div><span class="small">Modules completed</span><strong>${completedCount()}/${moduleCount()}</strong></div><div><span class="small">Exam score</span><strong>${state.examScore.correct}/${state.examScore.total}</strong></div></div><div class="progress-wrap"><div class="progress-bar" style="width:${(completedCount()/moduleCount())*100}%"></div></div></section>
  <section class="card"><h3>Smart study plan</h3>${studyPlanHtml(weak)}</section>`;
}
function studyPlanHtml(id){return `<ol class="list"><li>Read the ${modules[id].title} recovery pack.</li><li>Complete one interactive practice task.</li><li>Answer 5 topic-specific exam traps.</li><li>Write one startup application output.</li></ol><div class="note"><b>Estimated time:</b> 15–20 minutes.</div>`;}

const examSets = {
  mixed:[
    ["A question asks: 'Would you use this app?' What is the trap?",["Good Mom Test question","Future-opinion question","Actionable metric","Moat"],1,"This asks for prediction/opinion, not behavior."],
    ["A startup reports 10,000 signups but no retention. What metric is likely being used?",["Vanity","Actionable","LTV","Payback"],0,"Signups alone can look impressive without proving repeat value."],
    ["CAC should be divided by:",["All signups","Website visitors","Paying customers acquired","Instagram followers"],2,"CAC is about acquiring paying customers."],
    ["If one segment has 90% retention and another has 0%, what should you do first?",["Trust the average","Segment the data","Raise prices","Ignore it"],1,"Averages can hide the real signal."],
    ["'We had the idea first' is:",["A strong moat","Not a moat","A regulatory barrier","PMF"],1,"Being first is not durable unless it compounds into something hard to copy."]
  ],
  bml:[["Best hypothesis?",["Students like our idea","At least 6/10 users complete one module this week","Our app will be popular","Teachers will support us"],1,"Strong hypotheses include behavior, metric, and threshold."],["BML should be planned in which order?",["Build → Measure → Learn","Learn → Measure → Build","Measure → Build → Learn","Build → Learn → Measure"],1,"Start with what you need to learn." ]],
  pivot:[["A product works only for apartment students, not dorm students. Best decision?",["Ignore segment split","Customer segment pivot","Platform pivot","Stop immediately"],1,"Same product, better segment."],["A pivot means:",["Changing the vision","Changing strategy while keeping vision","Random redesign","Giving up"],1,"Pivot is a strategic route change." ]],
  pmf:[["Who should answer a PMF survey?",["Friends","Active recent users","Anyone online","Teachers only"],1,"PMF is tested with users who actually used the product."],["30% very disappointed. What next?",["Scale","Segment the data","Declare failure","Ignore"],1,"Grey-zone results need segmentation." ]],
  moats:[["In the AI era, why is code alone weak?",["Code cannot be built","Code is easier to copy","Users hate software","Moats are illegal"],1,"When build becomes cheap, defense shifts to data, distribution, brand, network, switching costs."],["A strong moat example:",["Nice colors","First idea","Unique user data that improves recommendations","One landing page"],2,"Compounding data can become harder to copy." ]],
  unit:[["CAC trap: divide acquisition spend by:",["Paying customers","Visitors","Likes","All signups"],0,"CAC is cost per paying customer acquired."],["LTV/CAC of 0.8 usually means:",["Healthy","Bleeding money","Perfect PMF","A moat"],1,"Below 1 means lifetime value is lower than acquisition cost." ]]
};
function examPage(topic='mixed'){
 const qs=examSets[topic]||examSets.mixed;
 app.innerHTML=`<section class="card"><span class="badge gold">V5 Exam Mode</span><h2>Topic-specific exam traps</h2><p>Score: ${state.examScore.correct}/${state.examScore.total}</p><div class="pill-row">${Object.keys(examSets).map(k=>`<button class="tiny-btn" onclick="examPage('${k}')">${k.toUpperCase()}</button>`).join('')}</div>${qs.map((q,i)=>`<button class="module-card" onclick="examQuestionV5('${topic}',${i})"><strong>Trap ${i+1}</strong><span>${q[0]}</span></button>`).join('')}</section>`;
}
window.examQuestionV5=(topic,i)=>{const q=(examSets[topic]||examSets.mixed)[i];app.innerHTML=`<section class="card" id="examQ"><span class="badge">Exam trap</span><h2>${q[0]}</h2>${q[1].map((c,j)=>`<button class="choice-btn" onclick="answerExamV5('${topic}',${i},${j})">${String.fromCharCode(65+j)}. ${c}</button>`).join('')}<div class="quiz-result" style="display:none"></div></section><section class="card"><button class="secondary-btn" onclick="examPage('${topic}')">Back to ${topic} exam set</button></section>`;}
window.answerExamV5=(topic,i,j)=>{const q=(examSets[topic]||examSets.mixed)[i],box=document.getElementById('examQ'),btns=box.querySelectorAll('.choice-btn');btns.forEach((b,k)=>{b.disabled=true;if(k===q[2])b.classList.add('correct');if(k===j&&j!==q[2])b.classList.add('wrong')});state.examScore.total++;if(j===q[2])state.examScore.correct++;save();const r=box.querySelector('.quiz-result');r.style.display='block';r.innerHTML=(j===q[2]?'<b>Correct.</b> ':'<b>Not quite.</b> ')+q[3]+`<hr><button class="tiny-btn" onclick="setRoute('tutor')">Ask Nash Tutor to explain</button>`;}

function toolsPage(){app.innerHTML=`<section class="card"><span class="badge">V5 Tools</span><h2>Founder + student tools</h2><div class="grid"><button class="module-card" onclick="setRoute('dashboard')"><strong>Dashboard</strong><span>Readiness score, strongest/weakest topic, next step.</span></button><button class="module-card" onclick="setRoute('tool','diagnostic')"><strong>Smart diagnostic</strong><span>Get a mini study plan.</span></button><button class="module-card" onclick="setRoute('tool','startupCanvas')"><strong>Startup Canvas</strong><span>Turn your idea into a clean course summary.</span></button><button class="module-card" onclick="setRoute('tool','emergency')"><strong>5-minute emergency mode</strong><span>Essentials, traps, and fast questions.</span></button><button class="module-card" onclick="setRoute('tool','translator')"><strong>Teacher wording translator</strong><span>Translate confusing course phrases.</span></button><button class="module-card" onclick="setRoute('tool','memory')"><strong>Memory tricks</strong><span>One-line exam reminders.</span></button><button class="module-card" onclick="setRoute('tool','glossary')"><strong>Glossary</strong><span>Search key course terms.</span></button><button class="module-card" onclick="setRoute('tool','analytics')"><strong>Local analytics</strong><span>Progress, confidence, and usage counters.</span></button><button class="module-card" onclick="setRoute('tool','bmlTool')"><strong>BML Builder</strong><span>Write learn → measure → build.</span></button><button class="module-card" onclick="setRoute('tool','chatgpt')"><strong>Why Nash + AI?</strong><span>Defense page for the MVP.</span></button></div></section>`;}

function toolPage(t){
 if(t==="startupCanvas") return startupCanvasPage();
 if(t==="emergency") return emergencyPage();
 if(t==="translator") return translatorPage();
 if(t==="memory") return memoryPage();
 if(t==="glossary"){app.innerHTML=`<section class="card"><span class="badge">Glossary</span><h2>Course glossary</h2><div class="searchbox"><input id="gSearch" placeholder="Search a term..." oninput="renderGlossary(this.value)"></div><div id="gList"></div></section>`;renderGlossary("");return;}
 if(t==="chatgpt"){app.innerHTML=`<section class="card"><span class="badge">Defense</span><h2>Why Nash + AI?</h2><table class="table-lite"><tr><th>Generic ChatGPT</th><th>Nash Tutor</th></tr><tr><td>Blank chat</td><td>Guided course path + course prompt</td></tr><tr><td>Depends on prompting skill</td><td>Buttons for explain, quiz, examples, practice</td></tr><tr><td>Generic summaries</td><td>Course traps, scenarios, and startup outputs</td></tr></table><div class="takeaway-box"><b>One-liner:</b> ChatGPT gives answers. Nash gives a guided path to passing, with an AI tutor inside the product.</div></section>`;return;}
 if(t==="analytics"){app.innerHTML=`<section class="card"><span class="badge">Local analytics</span><h2>Your data on this device</h2><p>Readiness score: ${readinessScore()}%</p><p>Exam score: ${state.examScore.correct}/${state.examScore.total}</p><pre class="code-ish">${JSON.stringify({completed:state.completed, confidence:state.confidence, analytics:state.analytics},null,2)}</pre><button class="primary-btn" onclick="downloadData()">Download data JSON</button></section>`;return;}
 if(t==="diagnostic"){app.innerHTML=`<section class="card"><span class="badge">Smart diagnostic</span><h2>What should you study?</h2><label>What feels weakest?</label><select id="diag"><option value="unit">Startup math / unit economics</option><option value="bml">Experiments / hypothesis</option><option value="pivot">Pivot decisions</option><option value="moats">Moats / differentiation</option><option value="pmf">PMF / Sean Ellis</option></select><button class="primary-btn" onclick="diagGoV5()">Generate study plan</button><div id="diagPlan"></div></section>`;return;}
 app.innerHTML=bmlBuilder()+`<section class="card"><button class="secondary-btn" onclick="setRoute('tools')">Back to tools</button></section>`;
}
window.diagGoV5=()=>{const id=diag.value;diagPlan.innerHTML=`<div class="note"><b>Recommended module:</b> ${modules[id].title}</div>${studyPlanHtml(id)}<button class="primary-btn" onclick="setRoute('module','${id}',0)">Start this plan</button>`;}

function startupCanvasPage(){const s=state.notes.startupCanvas||{};const fields=['Problem','Target user','Riskiest assumption','Hypothesis','MVP artifact','PMF question','Distribution channel','Possible moat','Unit economics guess'];app.innerHTML=`<section class="card"><span class="badge gold">Startup Canvas</span><h2>Build your startup summary</h2>${fields.map((f,i)=>`<label>${f}</label><textarea id="canvas-${i}" placeholder="${f}">${s[i]||''}</textarea>`).join('')}<button class="primary-btn" onclick="saveStartupCanvas()">Save + generate summary</button><button class="secondary-btn" style="margin-top:10px" onclick="copyStartupSummary()">Copy all startup answers</button><div class="example-box copy-output" id="startupOut">${s.output||''}</div></section>`;}
window.saveStartupCanvas=()=>{const fields=['Problem','Target user','Riskiest assumption','Hypothesis','MVP artifact','PMF question','Distribution channel','Possible moat','Unit economics guess'];let vals=fields.map((_,i)=>document.getElementById(`canvas-${i}`).value);let out=`Startup summary\n\n${fields.map((f,i)=>`${f}: ${vals[i]||'[missing]'}`).join('\n')}`;state.notes.startupCanvas={...vals,output:out};save();startupOut.textContent=out;}
window.copyStartupSummary=()=>{const out=(state.notes.startupCanvas&&state.notes.startupCanvas.output)||startupOut.textContent||'';navigator.clipboard.writeText(out);alert('Startup summary copied.');}

function emergencyPage(){app.innerHTML=`<section class="card"><span class="badge danger">Emergency</span><h2>5-minute emergency mode</h2><p>Use this when you have a quiz soon.</p>${Object.entries(modules).map(([id,m])=>`<div class="example-box"><h3>${m.title}</h3><b>3 things to know</b><ul class="list">${m.recovery.slice(0,3).map(x=>`<li>${x}</li>`).join('')}</ul><b>3 traps to avoid</b><ul class="list">${m.traps.slice(0,3).map(x=>`<li>${x}</li>`).join('')}</ul><button class="tiny-btn" onclick="examPage('${id==='unit'?'unit':id}')">Practice ${m.title}</button></div>`).join('')}</section>`;}

const translations={
 'actionable metric':['A number linked to real user behavior.','Module completion rate, retention, paid conversion.','Mistake: using views or likes only.','Memory trick: Actionable means you can act on it.'],
 'validated learning':['Evidence that changes or supports a decision.','Users completed the module and asked for more.','Mistake: saying “we learned a lot” without data.','Memory trick: No evidence, no learning.'],
 'riskiest assumption':['The belief that kills the idea if false.','Students will actually use Nash before exams.','Mistake: testing easy assumptions first.','Memory trick: Test the thing that can kill you.'],
 'product-market fit':['When real users would be disappointed without the product.','Active students say they would miss Nash before quizzes.','Mistake: counting polite compliments.','Memory trick: PMF = would they miss you?'],
 'the build is no longer the moat':['The product can be copied, so defense must come from data, distribution, brand, switching costs, or network effects.','A course-specific confusion database gets better every semester.','Mistake: thinking nice code alone protects you.','Memory trick: Build is easy; advantage must compound.'],
 'cac vs cpa':['CAC is total cost per paying customer acquired. CPA is often campaign/channel cost per acquisition/action.','Spend $100 to get 5 paying customers → CAC = $20.','Mistake: dividing by signups instead of paying customers.','Memory trick: CAC: only paying customers count.']
};
function translatorPage(){app.innerHTML=`<section class="card"><span class="badge">Translator</span><h2>Teacher wording translator</h2><label>Choose a confusing phrase</label><select id="phrase" onchange="showTranslation()">${Object.keys(translations).map(x=>`<option>${x}</option>`).join('')}</select><div id="translationBox"></div></section>`;showTranslation();}
window.showTranslation=()=>{const x=translations[phrase.value];translationBox.innerHTML=`<div class="teacher-box"><b>Simple meaning</b><p>${x[0]}</p></div><div class="example-box"><b>Example</b><p>${x[1]}</p></div><div class="trap"><b>Common mistake</b><p>${x[2]}</p></div><div class="note"><b>Memory trick:</b> ${x[3]}</div>`;}
function memoryPage(){const tricks=['CAC: only paying customers count.','BML: learn first, build last.','Pivot: same vision, new route.','PMF: would they miss you?','Moat: can they copy you and still lose?','Payback: when do you earn CAC back?'];app.innerHTML=`<section class="card"><span class="badge">Memory tricks</span><h2>Fast exam reminders</h2><ul class="list">${tricks.map(t=>`<li><b>${t.split(':')[0]}:</b>${t.substring(t.indexOf(':')+1)}</li>`).join('')}</ul></section>`;}

function tutorPage(){app.innerHTML=`<section class="card hero"><span class="badge gold">AI Tutor</span><h2>Nash Tutor</h2><p>Ask course questions, get practice questions, or ask for simple explanations. This uses a secure Netlify Function connected to OpenRouter.</p><div class="pill-row"><button class="tiny-btn" onclick="quickTutor('Explain product-market fit in simple words with one exam trap.')">Explain PMF</button><button class="tiny-btn" onclick="quickTutor('Quiz me on Unit Economics. Give one question only.')">Quiz Unit Economics</button><button class="tiny-btn" onclick="quickTutor('Explain CAC vs CPA and the common calculation trap.')">CAC vs CPA</button><button class="tiny-btn" onclick="quickTutor('Generate a new unit economics practice case with numbers. Do not solve it yet.')">New numbers</button></div><div id="chatBox" class="chat-box"><div class="ai-msg"><b>Nash Tutor:</b> Hi. Ask me about BML, pivots, PMF, moats, distribution, or unit economics.</div></div><label>Your message</label><textarea id="tutorInput" placeholder="Example: explain my mistake in CAC"></textarea><button class="primary-btn" onclick="sendTutorMessage()">Send to Nash Tutor</button><p class="small">If this does not reply, check your Netlify environment variable: OPENROUTER_API_KEY.</p></section>`;}
window.quickTutor=(msg)=>{tutorInput.value=msg;sendTutorMessage();}
window.sendTutorMessage=async()=>{const msg=tutorInput.value.trim();if(!msg)return;chatBox.innerHTML+=`<div class="user-msg"><b>You:</b> ${escapeHtml(msg)}</div><div class="ai-msg" id="loadingMsg"><b>Nash Tutor:</b> Thinking...</div>`;tutorInput.value='';try{const res=await fetch('/.netlify/functions/tutor',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:msg,context:{readiness:readinessScore(),completed:state.completed,examScore:state.examScore}})});const data=await res.json();document.getElementById('loadingMsg').remove();chatBox.innerHTML+=`<div class="ai-msg"><b>Nash Tutor:</b> ${escapeHtml(data.reply||data.error||'No reply received.')}</div>`;}catch(e){document.getElementById('loadingMsg').remove();chatBox.innerHTML+=`<div class="ai-msg warning"><b>Nash Tutor:</b> API error. Make sure you deployed with Netlify Functions and added OPENROUTER_API_KEY.</div>`;}}
function escapeHtml(str){return String(str).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}

render();
