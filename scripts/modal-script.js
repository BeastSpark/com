document.addEventListener('DOMContentLoaded', function() {
  // ===== ЗАКРИТТЯ МОДАЛКИ РЕЄСТРАЦІЇ =====
  const closeButton = document.querySelector('.close');
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      const modal = document.getElementById('modal_container');
      if (modal) {
        modal.style.opacity = '0';
        modal.style.transform = 'translateY(-20px)';
        setTimeout(() => {
          modal.style.visibility = 'hidden';
        }, 300); // тривалість анімації
      }
    });
  }

  // ===== ОБРОБКА КНОПКИ "ГОТОВО" =====
  const readyButton = document.querySelector('.ready');
  if (readyButton) {
    readyButton.addEventListener('click', function() {
      const inputs = document.querySelectorAll('.register-sec input');
      const nickname = inputs[0].value.trim();
      const password = inputs[1].value;

      if (nickname && password) {
        localStorage.setItem('nickname', nickname);
        localStorage.setItem('password', password);

        console.log('Нік:', nickname);
        console.log('Пароль:', password);

        const modal = document.getElementById('modal_container');
        if (modal) {
          modal.style.opacity = '0';
          modal.style.transform = 'translateY(-20px)';
          setTimeout(() => {
            modal.style.visibility = 'hidden';

            window.location.href = "https://beastspark.github.io/Play/";
          }, 300);
        }
      } else {
        alert('Будь ласка, заповніть всі поля.');
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const faqModal = document.getElementById('faq-modal');
  const openFaqBtn = document.getElementById('open-faq');
  const closeFaq = document.getElementById('close-faq');

  if (!faqModal) return;

  // Відкрити
  if (openFaqBtn) {
    openFaqBtn.addEventListener('click', () => {
      faqModal.classList.add('active');
      faqModal.classList.remove('closing'); // скидаємо, якщо було
    });
  }

  // Закрити
  if (closeFaq) {
    closeFaq.addEventListener('click', () => {
      faqModal.classList.add('closing');
    });
  }

  // Слухач для плавного прибирання класів (вішається один раз)
  faqModal.addEventListener('transitionend', (e) => {
    if (faqModal.classList.contains('closing') && e.propertyName === 'opacity') {
      faqModal.classList.remove('active', 'closing');
    }
  });
});

