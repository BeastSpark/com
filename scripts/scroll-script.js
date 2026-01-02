//---------------------------------------------------------------
// Ховання хедера + показ прогрес-бара
const header = document.querySelector('header');
const scrollBar = document.getElementById("scroll-progress-bar");

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Хедер ховається після 75px
  if (scrollPosition > 75) {
    header.classList.add('hidden');
    scrollBar.classList.add('active'); // показуємо шкалу прогресу
  } else {
    header.classList.remove('hidden');
    scrollBar.classList.remove('active'); // ховаємо шкалу
  }

  // Оновлення ширини прогрес-бара
  let docHeight = document.documentElement.scrollHeight - window.innerHeight;
  let scrollPercent = (scrollPosition / docHeight) * 100;
  scrollBar.style.width = scrollPercent + "%";
});

//---------------------------------------------------------------
// Додаємо клас "scrolling" під час прокрутки (для глобальних ефектів)
let scrollTimeout;
window.addEventListener('scroll', () => {
  document.body.classList.add('scrolling');

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    document.body.classList.remove('scrolling');
  }, 150);
});

//---------------------------------------------------------------
// Анімації при вході елементів у видиму область
document.addEventListener("DOMContentLoaded", () => {
  const animatedEls = document.querySelectorAll(
    '.fade-timeline, .fade-content, .text-appear, .heading-appear'
  );

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatedEls.forEach(el => observer.observe(el));
});
