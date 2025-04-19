/**
 * БЫСТРЫЙ ЗАРАБОТОК - Основной скриптовый файл
 * Содержит все интерактивные функции для сайта
 */

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', function() {
  initFaqAccordion();
  initTestimonialsSlider();
  initDynamicCounters();
  initStatisticsCounters();
  initRealtimePayments();
  initCashoutCarousel();
  initCookiePopup();
});

// ===== FAQ ACCORDION =====
/**
 * Инициализирует аккордеон для FAQ секции
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      faqItems.forEach(faqItem => {
        if (faqItem !== item) {
          faqItem.classList.remove('active');
        }
      });
      
      item.classList.toggle('active');
    });
  });
}

// ===== СЛАЙДЕР ОТЗЫВОВ =====
/**
 * Инициализирует слайдер отзывов с кнопками навигации
 */
function initTestimonialsSlider() {
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  let currentSlide = 0;
  
  if (testimonialCards.length > 0) {
    testimonialCards[0].classList.add('active');
  }
  
  function showSlide(index) {
    testimonialCards.forEach(card => {
      card.classList.remove('active');
    });
    
    testimonialCards[index].classList.add('active');
  }
  
  prevButton.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = testimonialCards.length - 1;
    }
    showSlide(currentSlide);
  });
  
  nextButton.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= testimonialCards.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  });
}

// ===== ДИНАМИЧЕСКИЕ СЧЕТЧИКИ ВИДЕО И ЗАРАБОТКА =====
/**
 * Инициализирует счетчики доступных видео и прогнозируемого заработка
 */
function initDynamicCounters() {
  const videosCountElement = document.getElementById('videos-count');
  const earningsAmountElement = document.getElementById('earnings-amount');

  let videosCount = 900;
  let direction = 1;
  
  function updateEarnings(videosCount) {
    const earningsAmount = Math.round(videosCount * 1.2);
    
    earningsAmountElement.textContent = earningsAmount;
    
    earningsAmountElement.classList.add('count-updated');
    setTimeout(() => {
      earningsAmountElement.classList.remove('count-updated');
    }, 500);
  }

  function updateVideosCount() {
    if (videosCount >= 1600) {
      direction = -1;
    } else if (videosCount <= 900) {
      direction = 1;
    } else if (Math.random() > 0.7) {
      direction *= -1;
    }
    
    const change = Math.floor(Math.random() * 6) + 5;
    
    videosCount += (change * direction);
    
    if (videosCount > 1600) videosCount = 1600;
    if (videosCount < 900) videosCount = 900;
    
    videosCountElement.textContent = videosCount;
    
    videosCountElement.classList.add('count-updated');
    setTimeout(() => {
      videosCountElement.classList.remove('count-updated');
    }, 500);
    
    updateEarnings(videosCount);
  }

  setInterval(updateVideosCount, 2000);
  
  updateVideosCount();
}

// ===== СТАТИСТИЧЕСКИЕ СЧЕТЧИКИ =====
/**
 * Инициализирует анимированные статистические счетчики на странице
 */
function initStatisticsCounters() {
  const avgTimeElement = document.getElementById('avg-time');
  let baseMinutes = 18;
  let baseSeconds = 14;
  let timeDirection = 1;
  
  function updateAvgTime() {
    const secondsChange = Math.floor(Math.random() * 5) + 1;
    
    if (baseMinutes >= 22) {
      timeDirection = -1;
    } else if (baseMinutes <= 14) {
      timeDirection = 1;
    } else if (Math.random() > 0.8) {
      timeDirection *= -1;
    }
    
    baseSeconds += secondsChange * timeDirection;
    
    if (baseSeconds >= 60) {
      baseMinutes += 1;
      baseSeconds -= 60;
    } else if (baseSeconds < 0) {
      baseMinutes -= 1;
      baseSeconds += 60;
    }
    
    if (baseMinutes < 14) baseMinutes = 14;
    if (baseMinutes > 22) baseMinutes = 22;
    
    avgTimeElement.textContent = baseMinutes + 'м ' + baseSeconds + 'с';
  }
  
  const avgEarningsElement = document.getElementById('avg-earnings');
  let baseEarnings = 14230.08;
  
  function updateAvgEarnings() {
    const change = (Math.random() * 130) - 50;
    baseEarnings += change;
    
    if (baseEarnings < 13000) baseEarnings = 13000;
    if (baseEarnings > 15500) baseEarnings = 15500;
    
    const formattedEarnings = baseEarnings.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    avgEarningsElement.textContent = formattedEarnings;
  }
  
  const totalEarningsElement = document.getElementById('total-earnings');
  let totalEarningsValue = 60850083;
  
  function updateTotalEarnings() {
    const increase = Math.floor(Math.random() * 301) + 100;
    totalEarningsValue += increase;
    
    const formattedTotal = totalEarningsValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    totalEarningsElement.textContent = formattedTotal;
  }
  
  setInterval(updateAvgTime, 2000);
  setInterval(updateAvgEarnings, 2000);
  setInterval(updateTotalEarnings, 1000);
  
  updateAvgTime();
  updateAvgEarnings();
  updateTotalEarnings();
}

// ===== ВЫПЛАТЫ В РЕАЛЬНОМ ВРЕМЕНИ =====
/**
 * Инициализирует счетчик выплат в реальном времени
 */
function initRealtimePayments() {
  const realtimePaymentElement = document.getElementById('realtime-payment');
  let currentPayment = 148750;

  function updateRealtimePayment() {
    const increase = Math.floor(Math.random() * 901) + 100;
    
    currentPayment += increase;
    
    const formattedPayment = currentPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    realtimePaymentElement.textContent = '€' + formattedPayment;
  }
  
  setInterval(updateRealtimePayment, 1000);
  
  updateRealtimePayment();
}

// ===== КАРУСЕЛЬ CASHOUT-КАРТОЧЕК =====
/**
 * Инициализирует непрерывно движущуюся карусель карточек кешаута с случайными суммами
 */
function initCashoutCarousel() {
  const container = document.querySelector('.cashout-cards-container');
  const track = document.querySelector('.cashout-cards-track');
  
  if (!container || !track) return;
  
  // Отключаем CSS-анимацию
  track.style.animation = 'none';
  
  // Получаем существующие карточки
  const originalCards = Array.from(track.querySelectorAll('.cashout-card'));
  if (originalCards.length === 0) return;
  
  // Создаем клоны карточек для бесшовного переноса
  const cardClones = originalCards.map(card => {
    const clone = card.cloneNode(true);
    updateCardWithRandomAmount(clone);
    return clone;
  });
  
  // Очищаем трек
  track.innerHTML = '';
  
  // Добавляем оригинальные карточки с случайными суммами
  originalCards.forEach(card => {
    updateCardWithRandomAmount(card);
    track.appendChild(card);
  });
  
  // Добавляем клоны в конец для создания бесшовного эффекта
  cardClones.forEach(clone => {
    track.appendChild(clone);
  });
  
  // Запускаем непрерывную анимацию
  let position = 0;
  const speed = 30; // Пикселей в секунду
  let lastTimestamp = 0;
  const totalWidth = originalCards.reduce((sum, card) => sum + card.offsetWidth, 0);
  
  function animate(timestamp) {
    // При первом вызове просто запоминаем временную метку
    if (!lastTimestamp) {
      lastTimestamp = timestamp;
      requestAnimationFrame(animate);
      return;
    }
    
    // Вычисляем сдвиг на основе прошедшего времени
    const elapsed = timestamp - lastTimestamp;
    lastTimestamp = timestamp;
    
    // Плавное смещение с учетом времени между кадрами
    const pixelShift = (speed * elapsed) / 1000;
    position -= pixelShift;
    
    // Применяем transform с дробными значениями для плавности
    track.style.transform = `translateX(${position.toFixed(2)}px)`;
    
    // Когда прокрутили весь первый набор карточек, сбрасываем позицию в начало
    // для создания эффекта бесконечной карусели без прыжков
    if (Math.abs(position) >= totalWidth) {
      position += totalWidth;
      track.style.transform = `translateX(${position.toFixed(2)}px)`;
      
      // Обновляем случайные суммы на всех карточках при новом цикле
      track.querySelectorAll('.cashout-card').forEach(card => {
        updateCardWithRandomAmount(card);
      });
    }
    
    requestAnimationFrame(animate);
  }
  
  // Запускаем анимацию
  requestAnimationFrame(animate);
}

/**
 * Обновляет карточку случайной суммой от 50 до 200 евро
 */
function updateCardWithRandomAmount(card) {
  const randomAmount = Math.floor(Math.random() * 151) + 50;
  
  const amountElement = card.querySelector('.cashout-amount');
  if (amountElement) {
    const euroSymbol = amountElement.querySelector('.euro-symbol');
    
    amountElement.innerHTML = '';
    amountElement.appendChild(euroSymbol);
    amountElement.appendChild(document.createTextNode(randomAmount));
  }
}

// ===== УТИЛИТЫ =====
/**
 * Форматирует число с разделителями тысяч
 */
function formatNumber(number, decimals = 0) {
  return number.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// ===== COOKIE POPUP =====

function initCookiePopup() {
  const cookiePopup = document.getElementById('cookie-popup');
  if (!cookiePopup) return;
  
  // Функция для закрытия попапа
  function closePopup() {
    cookiePopup.classList.remove('show');
    document.body.style.overflow = ''; // Разблокируем прокрутку страницы
  }
  
  // Всегда показываем попап при загрузке страницы
  setTimeout(function() {
    cookiePopup.classList.add('show');
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
  }, 500);
  
  // Добавляем обработчики для всех кнопок закрытия
  const closeButtons = ['cookie-accept', 'cookie-deny', 'cookie-close'];
  closeButtons.forEach(id => {
    const button = document.getElementById(id);
    if (button) {
      button.addEventListener('click', closePopup);
    }
  });
  
  // Закрытие при клике на фон (но не на сам попап)
  cookiePopup.addEventListener('click', function(e) {
    if (e.target === cookiePopup) {
      closePopup();
    }
  });
  
  // Связываем ссылки с футером
  const cookieLinks = document.querySelectorAll('.cookie-link');
  const footerLinks = document.querySelectorAll('.footer-link');
  
  cookieLinks.forEach((link, index) => {
    if (footerLinks[index]) {
      link.href = footerLinks[index].href;
    }
  });
} 