document.addEventListener("DOMContentLoaded", function () {
  // твій існуючий код GSAP...

  // Санта прилітає під кінець
  gsap.to(".santa-fly", {
    x: window.innerWidth + 400, // пролітає за межі екрану
    opacity: 1,
    duration: 4,
    delay: 6.5, // коли стартувати (синхронізуй з твоїм loader)
    ease: "power1.inOut",
    onComplete: () => {
      // коли Санта пролетів — можна сховати прелоадер
      gsap.to(".loading-screen", {
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => {
          document.querySelector(".loading-screen").style.display = "none";
          document.body.classList.add("loaded");
        }
      });
    }
  });
});
