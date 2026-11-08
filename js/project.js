const S=window.SITE,p=S.projects.find(x=>x.slug===new URLSearchParams(location.search).get("p")),root=document.getElementById("cs");
const pend='<p class="pend">Pending — to be confirmed and added in js/content.js.</p>';
const L=a=>a&&a.length?`<ul class="bul">${a.map(x=>`<li>${x}</li>`).join("")}</ul>`:pend,T=t=>t?`<p>${t}</p>`:pend;
const dom=u=>u.replace(/^https?:\/\//,"").replace(/\/$/,"");
if(!p){root.innerHTML='<h1>Project not found</h1><a class="btn" href="index.html#projects">Back to projects</a>'}else{
document.title=p.title+" — Case Study | Mahmoud Sallam";
const nx=S.projects[(S.projects.indexOf(p)+1)%S.projects.length];
const shots=[1,2,3].map(n=>`<div class="shot"><span class="ph">Screenshot ${n} pending</span><img src="assets/projects/${p.slug}-${n}.jpg" alt="${p.title} screenshot ${n}" loading="lazy" onerror="this.remove()"></div>`).join("");
const sec=(n,t,b)=>`<section class="cs-sec"><span class="n">${n}</span><div><h2>${t}</h2>${b}</div></section>`;
root.innerHTML=`<a class="back" href="index.html#projects">← All projects</a><span class="tag">${p.category} · ${p.group==="initiative"?"Initiative":"Commercial"}</span><h1>${p.title}</h1><div class="cta"><a class="btn pri" href="${p.url}" target="_blank" rel="noopener">Live Demo ↗</a>${p.github?`<a class="btn" href="${p.github}" target="_blank" rel="noopener">GitHub ↗</a>`:""}</div>`+
sec("01","Project Overview",T(p.overview))+sec("02","Project Objectives",L(p.objectives))+sec("03","Business Requirements",L(p.requirements))+sec("04","My Contribution",T(p.contribution))+sec("05","Design Approach",T(p.design))+sec("06","Development Approach",T(p.development))+sec("07","Verified Technologies",p.tech.length?`<ul class="tags">${p.tech.map(x=>`<li>${x}</li>`).join("")}</ul>`:pend)+sec("08","Key Features (observed on the live site)",L(p.features))+sec("09","Screenshots",`<div class="shotgrid">${shots}</div>`)+sec("10","Live Demo",`<a class="btn pri" href="${p.url}" target="_blank" rel="noopener">${dom(p.url)} ↗</a>`)+sec("11","Future Improvements",L(p.future))+
`<a class="next" href="project.html?p=${nx.slug}">Next project<strong>${nx.title} →</strong></a>`}
document.getElementById("mail").href="mailto:"+S.email;
