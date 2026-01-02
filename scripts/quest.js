document.addEventListener("DOMContentLoaded", () => {
  const joinBtn = document.getElementById("Join");
  const questModal = document.getElementById("find-items-modal");
  const fimProgress = document.getElementById("fim-progress");
  const fimCloseBtn = document.getElementById("fim-close");
  const uiCounter = document.getElementById("ui-counter");
  const questImage = document.getElementById("quest-image");
  const regModal = document.getElementById("modal_container");

  let foundItems = 0;
  const totalItems = 5;
  let itemsGenerated = false;
  let questCompleted = false;

  function updateProgress() {
    fimProgress.textContent = `${foundItems} / ${totalItems}`;
    uiCounter.textContent = `Предметів знайдено: ${foundItems} / ${totalItems}`;

    if (foundItems === totalItems) {
      questCompleted = true;
      console.log("✅ Квест завершено! Відкриваємо модалку реєстрації...");

      // ВІДКРИВАЄМО МОДАЛКУ РЕЄСТРАЦІЇ
      setTimeout(() => {
        // Закриваємо ОБИДВІ модалки квесту
        if (questModal) questModal.classList.remove("active");
        if (questImage) questImage.classList.remove("show");

        // Чистимо z-index конфлікти
        if (regModal) {
          regModal.style.zIndex = "9999";
          regModal.classList.add("active");
          console.log("✅ regModal активна, z-index = 9999");
        } else {
          console.error("❌ regModal НЕ знайдено! ID 'modal_container' не існує");
        }
      }, 800);
    }
  }

  function createItem(container) {
    const item = document.createElement("div");
    item.classList.add("item-object");

    item.style.position = "relative";
    item.style.margin = "20px auto";

    item.addEventListener("click", () => {
      item.remove();
      foundItems++;
      console.log(`📦 Предмет зібрано! Всього: ${foundItems}/${totalItems}`);
      updateProgress();
    });

    container.appendChild(item);
  }

  function revealSecretFaq() {
    const secretFaq = document.querySelector(".faq-item.secret");
    if (secretFaq) {
      secretFaq.style.display = "block";
      secretFaq.classList.add("revealed");
    }
  }

  joinBtn.addEventListener("click", () => {
    console.log("🔘 JOIN натиснута! questCompleted =", questCompleted);
    
    // Якщо квест завершено → ВІДКРИВАЄМО МОДАЛКУ РЕЄСТРАЦІЇ
    if (questCompleted) {
      console.log("✅ Квест вже завершено, відкриваємо реєстрацію...");
      if (regModal) {
        regModal.style.cssText = `
          z-index: 9999 !important;
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
          pointer-events: auto !important;
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 105% !important;
          backdrop-filter: blur(0px) !important;
          filter: none !important;
        `;
        regModal.classList.add("active");
        
        console.log("✅ regModal активна і видима");
      }
      return;
    }

    // Якщо квест НЕ завершено → відкриваємо квест
    questModal.classList.add("active");
    questImage.classList.add("show");

    if (!itemsGenerated) {
      const containers = document.querySelectorAll(".items-container");
      console.log(`🎮 Квест розпочато! Контейнерів знайдено: ${containers.length}`);

      containers.forEach((container) => createItem(container));

      updateProgress();
      itemsGenerated = true;

      // Показуємо секретну FAQ
      revealSecretFaq();
    }
  });

  fimCloseBtn.addEventListener("click", () => {
    questModal.classList.remove("active");
    questImage.classList.remove("show");
    uiCounter.classList.add("show");

    const sliderItems = document.querySelectorAll(".logo-slider .item");
    if (sliderItems[2]) {
      const eizen = sliderItems[2];
      const newItem = document.createElement("li");
      newItem.className = "item";

      const itemsDiv = document.createElement("div");
      itemsDiv.className = "items-container item3";
      newItem.appendChild(itemsDiv);

      eizen.replaceWith(newItem);

      createItem(itemsDiv);
    }
  });
});