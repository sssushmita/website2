const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow?.animate({left:`${e.clientX}px`,top:`${e.clientY}px`},{duration:500,fill:'forwards'});});
const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');reveal.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));
const links=[...document.querySelectorAll('.nav-link')];
const sections=[...document.querySelectorAll('main section[id]')];
const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')===`#${entry.target.id}`))}}),{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>navObserver.observe(s));
document.querySelectorAll('.interactive-card').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(700px) rotateX(${y*-8}deg) rotateY(${x*8}deg) translateY(-6px)`});card.addEventListener('pointerleave',()=>card.style.transform='');});