// === FAQ toggle ===
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains("active");

    // Закриваємо всі перед відкриттям нового
    document.querySelectorAll(".faq-item").forEach(item => {
      item.classList.remove("active");
      const ans = item.querySelector(".faq-answer");
      if (ans) ans.style.maxHeight = null;
    });

    // Відкриваємо якщо був закритий
    if (!isActive) {
      faqItem.classList.add("active");
      const answer = faqItem.querySelector(".faq-answer");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// === Модальне FAQ вікно ===
const openFaqBtn = document.getElementById("open-faq");
const faqModal = document.getElementById("faq-modal");
const closeFaqBtn = document.getElementById("close-faq");

// Відкрити
openFaqBtn.addEventListener("click", () => {
  faqModal.style.display = "flex";
});

// Закрити
closeFaqBtn.addEventListener("click", () => {
  faqModal.style.display = "none";
});

// Закриття по кліку поза вікном
faqModal.addEventListener("click", (e) => {
  if (e.target === faqModal) faqModal.style.display = "none";
});

// === Показ секретного FAQ після прийняття квесту ===
function revealSecretFaq() {
  const secret = document.querySelector(".faq-item.secret");
  if (secret) secret.style.display = "block";
}
