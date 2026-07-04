/* Sticky header */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('toTop').classList.toggle('show', window.scrollY > 600);
}, {passive:true});

/* Scroll reveal */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); } });
}, {threshold:.15});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* Animated counters */
function animateCounter(el){
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const dur = 1400; const start = performance.now();
  function tick(now){
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); counterIO.unobserve(e.target); } });
}, {threshold:.5});
document.querySelectorAll('[data-count]').forEach(el => counterIO.observe(el));

/* Theme toggle */
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const root = document.documentElement;
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
});

/* Testimonial carousel */
const slides = document.querySelectorAll('.test-slide');
const dots = document.querySelectorAll('.test-dots button');
let ti = 0;
function showSlide(i){
  slides.forEach((s,idx) => s.classList.toggle('active', idx===i));
  dots.forEach((d,idx) => d.classList.toggle('active', idx===i));
  ti = i;
}
dots.forEach(d => d.addEventListener('click', () => showSlide(parseInt(d.dataset.i))));
setInterval(() => showSlide((ti+1) % slides.length), 5500);

/* FAQ accordion */
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-q');
  const ans = item.querySelector('.faq-a');
  if (item.classList.contains('open')) ans.style.maxHeight = ans.scrollHeight + 'px';
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o => { o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null; });
    if (!isOpen){ item.classList.add('open'); ans.style.maxHeight = ans.scrollHeight + 'px'; }
  });
});

/* Back to top */
document.getElementById('toTop').addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

/* Cookie banner */
setTimeout(() => document.getElementById('cookieBanner').classList.add('show'), 1200);
document.getElementById('cookieAccept').addEventListener('click', () => document.getElementById('cookieBanner').classList.remove('show'));
