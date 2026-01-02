document.addEventListener("DOMContentLoaded", () => {
  const snowflakeCount = 25;
  const snowflakes = [];

  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.innerHTML = "❄";
    document.body.appendChild(snowflake);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const speed = 1 + Math.random() * 3;
    const size = 8 + Math.random() * 12;
    const drift = (Math.random() - 0.5) * 1.5;
    snowflake.style.fontSize = size + "px";

    snowflakes.push({ el: snowflake, x, y, speed, drift });
  }

  function animateSnow() {
    for (const snowflake of snowflakes) {
      snowflake.y += snowflake.speed;
      snowflake.x += snowflake.drift;

      if (snowflake.y > window.innerHeight) {
        snowflake.y = -10;
        snowflake.x = Math.random() * window.innerWidth;
      }

      snowflake.el.style.transform = `translate(${snowflake.x}px, ${snowflake.y}px)`;
    }

    requestAnimationFrame(animateSnow);
  }

  animateSnow();
});
