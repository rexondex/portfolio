// Replace these examples with your own projects.
const projects = [
  { title: 'FORM & FEELING', category: 'DIGITAL EXPERIENCE · 2026', description: '형태와 감각을 탐구하는 디지털 경험입니다. 이곳에 프로젝트의 배경과 역할, 그리고 결과를 소개해 보세요.' },
  { title: 'IN BETWEEN', category: 'VISUAL IDENTITY · 2026', description: '공간과 움직임의 관계에서 출발한 비주얼 아이덴티티 프로젝트입니다. 이곳에 프로젝트에 대한 이야기를 적어 보세요.' },
  { title: 'COMMON GROUND', category: 'ART DIRECTION · 2025', description: '서로 다른 관점이 만나는 지점을 시각적으로 풀어낸 작업입니다. 프로젝트의 핵심 아이디어를 소개해 보세요.' },
  { title: 'SOFT SIGNALS', category: 'CREATIVE DEVELOPMENT · 2025', description: '작은 움직임과 반응으로 새로운 감각을 만드는 인터랙티브 실험입니다. 사용한 기술과 경험을 소개해 보세요.' }
];

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  reveals.forEach(element => observer.observe(element));
} else reveals.forEach(element => element.classList.add('visible'));

const cursor = document.querySelector('.cursor');
const orbit = document.querySelector('.hero-orbit');
if (window.matchMedia('(pointer: fine)').matches && !reducedMotion.matches) {
  window.addEventListener('pointermove', event => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    const x = (event.clientX / window.innerWidth - .5) * 25;
    const y = (event.clientY / window.innerHeight - .5) * 25;
    orbit.style.transform = `translate(${x}px, ${y}px)`;
  }, { passive: true });
  document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('pointerenter', () => cursor.classList.add('active'));
    project.addEventListener('pointerleave', () => cursor.classList.remove('active'));
  });
}

const dialog = document.querySelector('.project-dialog');
const dialogArt = dialog.querySelector('.dialog-art');
document.querySelectorAll('.project').forEach(button => button.addEventListener('click', () => {
  const index = Number(button.dataset.project);
  const project = projects[index];
  document.querySelector('#dialog-number').textContent = `0${index + 1} / 04`;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-category').textContent = project.category;
  document.querySelector('#dialog-description').textContent = project.description;
  dialogArt.replaceChildren(button.querySelector('.project-art').cloneNode(true));
  cursor.classList.remove('active');
  dialog.showModal();
}));
dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
