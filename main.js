/**
 * 23 FAMILY Dance Studio - Interactive JavaScript
 * Updated with Latvia phone format (+371), Hero Carousel, 3 Atmosphere Tabs,
 * and Coaches Лиана & Анастасия.
 */

// Schedule Data (Лиана & Анастасия)
const SCHEDULE_DATA = [
  // Понедельник
  {
    day: 'mon',
    dayName: 'Понедельник',
    time: '18:30 – 20:00',
    title: 'High Heels Beginners',
    category: 'beginners',
    trainer: 'Анастасия',
    hall: 'Зал 1 (Centrs)',
    spots: 'Осталось 3 места',
    level: 'С нуля'
  },
  {
    day: 'mon',
    dayName: 'Понедельник',
    time: '20:15 – 21:45',
    title: 'High Heels Pro / Choreo',
    category: 'pro',
    trainer: 'Лиана',
    hall: 'Зал 1 (Centrs)',
    spots: 'Осталось 2 места',
    level: 'Продолжающие'
  },
  {
    day: 'mon',
    dayName: 'Понедельник',
    time: '19:00 – 20:30',
    title: 'Strip Plastic',
    category: 'beginners',
    trainer: 'Анастасия',
    hall: 'Зал 2 (Sunset)',
    spots: 'Осталось 5 мест',
    level: 'Любой уровень'
  },

  // Вторник
  {
    day: 'tue',
    dayName: 'Вторник',
    time: '18:30 – 20:00',
    title: 'Frame Up & Floorwork',
    category: 'floor',
    trainer: 'Анастасия',
    hall: 'Зал 1 (Centrs)',
    spots: 'Осталось 4 места',
    level: 'Любой уровень'
  },
  {
    day: 'tue',
    dayName: 'Вторник',
    time: '20:15 – 21:45',
    title: 'Vogue Femme & Runway',
    category: 'pro',
    trainer: 'Лиана',
    hall: 'Зал 1 (Centrs)',
    spots: 'Осталось 3 места',
    level: 'Средний / Pro'
  },

  // Среда
  {
    day: 'wed',
    dayName: 'Среда',
    time: '18:30 – 20:00',
    title: 'High Heels Beginners',
    category: 'beginners',
    trainer: 'Анастасия',
    hall: 'Зал 1 (Centrs)',
    spots: 'Осталось 2 места',
    level: 'С нуля'
  },
  {
    day: 'wed',
    dayName: 'Среда',
    time: '20:15 – 21:45',
    title: 'Choreo Lab & Video Prep',
    category: 'pro',
    trainer: 'Лиана',
    hall: 'Зал 1 (Centrs)',
    spots: 'Осталось 1 место',
    level: 'Продолжающие'
  },

  // Четверг
  {
    day: 'thu',
    dayName: 'Четверг',
    time: '18:30 – 20:00',
    title: 'Strip Plastic & Stretching',
    category: 'beginners',
    trainer: 'Анастасия',
    hall: 'Зал 2 (Sunset)',
    spots: 'Осталось 4 места',
    level: 'Все уровни'
  },
  {
    day: 'thu',
    dayName: 'Четверг',
    time: '20:15 – 21:45',
    title: 'High Heels Pro Speed Choreo',
    category: 'pro',
    trainer: 'Лиана',
    hall: 'Зал 1 (Centrs)',
    spots: 'Осталось 3 места',
    level: 'Pro'
  },

  // Пятница
  {
    day: 'fri',
    dayName: 'Пятница',
    time: '18:30 – 20:00',
    title: 'Frame Up & Floorwork',
    category: 'floor',
    trainer: 'Анастасия',
    hall: 'Зал 1 (Centrs)',
    spots: 'Осталось 3 места',
    level: 'Любой уровень'
  },
  {
    day: 'fri',
    dayName: 'Пятница',
    time: '20:15 – 22:00',
    title: 'Dance Video Shooting / Jam',
    category: 'pro',
    trainer: 'Лиана & Анастасия',
    hall: 'Оба зала',
    spots: 'Спецкурс',
    level: 'Для резидентов'
  },

  // Суббота
  {
    day: 'sat',
    dayName: 'Суббота',
    time: '13:00 – 14:30',
    title: 'High Heels Weekend Intensive',
    category: 'beginners',
    trainer: 'Анастасия',
    hall: 'Зал 1 (Centrs)',
    spots: 'Осталось 4 места',
    level: 'С нуля и базовый'
  },
  {
    day: 'sat',
    dayName: 'Суббота',
    time: '15:00 – 16:30',
    title: 'Choreo Class & Solo Performance',
    category: 'pro',
    trainer: 'Лиана',
    hall: 'Зал 1 (Centrs)',
    spots: 'Осталось 2 места',
    level: 'Pro'
  },

  // Воскресенье
  {
    day: 'sun',
    dayName: 'Воскресенье',
    time: '14:00 – 15:30',
    title: 'Femme Plastic & Balance',
    category: 'beginners',
    trainer: 'Анастасия',
    hall: 'Зал 2 (Sunset)',
    spots: 'Осталось 5 мест',
    level: 'С нуля'
  },
  {
    day: 'sun',
    dayName: 'Воскресенье',
    time: '16:00 – 18:00',
    title: 'Masterclass Guest Star / Lab',
    category: 'pro',
    trainer: 'Приглашенный хореограф',
    hall: 'Зал 1 (Centrs)',
    spots: 'Спецпроект',
    level: 'Все желающие'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeroCarousel();
  initSchedule();
  initAtmosphereTabs();
  initFaqAccordion();
  initLatviaPhoneMasks();
  initLeadForm();
  initVideoModal();
  initBookingModal();
  initQuickBookingButtons();
  initHeaderScroll();
});

/* Mobile Menu */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

/* Header style on scroll */
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('shadow-md', 'bg-cream/98');
    } else {
      header.classList.remove('shadow-md', 'bg-cream/98');
    }
  });
}

/* Hero Carousel (С каруселью со стрелочками и кликабельными заглушками) */
function initHeroCarousel() {
  const carousel = document.getElementById('heroCarousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.hero-carousel-slide');
  const dots = carousel.querySelectorAll('.hero-carousel-dot');
  const prevBtn = document.getElementById('heroCarouselPrev');
  const nextBtn = document.getElementById('heroCarouselNext');
  const counter = document.getElementById('heroCarouselCounter');

  if (slides.length === 0) return;

  let currentIndex = 0;
  let autoPlayTimer = null;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides.forEach((slide, i) => {
      if (i === index) slide.classList.add('active');
      else slide.classList.remove('active');
    });

    dots.forEach((dot, i) => {
      if (i === index) dot.classList.add('active');
      else dot.classList.remove('active');
    });

    if (counter) {
      counter.textContent = `0${index + 1} / 0${slides.length}`;
    }

    currentIndex = index;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  if (nextBtn) nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    nextSlide();
    resetAutoPlay();
  });

  if (prevBtn) prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    prevSlide();
    resetAutoPlay();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetIndex = parseInt(dot.dataset.slideIndex, 10);
      showSlide(targetIndex);
      resetAutoPlay();
    });
  });

  function startAutoPlay() {
    autoPlayTimer = setInterval(nextSlide, 6000);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  carousel.addEventListener('mouseenter', stopAutoPlay);
  carousel.addEventListener('mouseleave', startAutoPlay);

  showSlide(0);
  startAutoPlay();
}

/* Interactive Atmosphere 3 Tabs: 
   1. Видео с тренировок
   2. Видео с выступлений
   3. Галерея фото
*/
function initAtmosphereTabs() {
  const tabs = document.querySelectorAll('.atmosphere-tab-btn');
  const contents = document.querySelectorAll('.atmosphere-tab-content');

  if (tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = tab.dataset.atmosphereTab;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      contents.forEach(content => {
        if (content.id === `tabContent-${targetTab}`) {
          content.classList.remove('hidden');
          // Reset animation so it replays smoothly
          content.style.animation = 'none';
          void content.offsetHeight; // trigger reflow
          content.style.animation = '';
        } else {
          content.classList.add('hidden');
        }
      });
    });
  });
}

/* Interactive Schedule */
function initSchedule() {
  const scheduleContainer = document.getElementById('scheduleGrid');
  const dayTabs = document.querySelectorAll('.schedule-tab');
  const filterChips = document.querySelectorAll('.filter-chip');

  if (!scheduleContainer) return;

  let currentDay = 'mon';
  let currentCategory = 'all';

  function renderSchedule() {
    scheduleContainer.innerHTML = '';

    const filtered = SCHEDULE_DATA.filter(item => {
      const matchDay = item.day === currentDay;
      const matchCategory = currentCategory === 'all' || item.category === currentCategory;
      return matchDay && matchCategory;
    });

    if (filtered.length === 0) {
      scheduleContainer.innerHTML = `
        <div class="col-span-full py-12 text-center bg-cream-light rounded-2xl border border-subtle">
          <p class="text-sm font-semibold uppercase tracking-wider text-charcoal/60">В этот день по выбранной категории занятий нет</p>
          <button class="mt-4 px-5 py-2 rounded-full bg-maroon text-white text-xs font-semibold uppercase tracking-wider reset-filter-btn">
            Показать все направления дня
          </button>
        </div>
      `;
      const resetBtn = scheduleContainer.querySelector('.reset-filter-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentCategory = 'all';
          filterChips.forEach(chip => {
            if (chip.dataset.category === 'all') chip.classList.add('active');
            else chip.classList.remove('active');
          });
          renderSchedule();
        });
      }
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'group bg-cream-light rounded-2xl p-6 border border-subtle hover:border-maroon transition-all duration-300 hover-lift flex flex-col justify-between shadow-sm';
      
      const badgeColor = item.category === 'pro' 
        ? 'bg-maroon text-white' 
        : (item.category === 'floor' ? 'bg-charcoal text-white' : 'bg-maroon/10 text-maroon');

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between gap-2 mb-4">
            <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${badgeColor}">
              ${item.level}
            </span>
            <span class="text-xs font-semibold text-charcoal/60 tracking-wider">
              ${item.hall}
            </span>
          </div>

          <div class="mb-3">
            <span class="text-xs uppercase font-mono tracking-widest text-maroon font-bold block mb-1">
              ${item.time}
            </span>
            <h4 class="font-syne text-xl font-bold uppercase text-charcoal group-hover:text-maroon transition-colors">
              ${item.title}
            </h4>
          </div>

          <div class="flex items-center gap-3 pt-3 border-t border-subtle mb-6">
            <div class="w-8 h-8 rounded-full bg-maroon text-cream flex items-center justify-center text-xs font-bold font-syne">
              ${item.trainer[0]}
            </div>
            <div>
              <p class="text-xs font-bold text-charcoal leading-none">${item.trainer}</p>
              <p class="text-[10px] text-charcoal/50 uppercase tracking-wider mt-0.5">Хореограф</p>
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-subtle flex items-center justify-between gap-4">
          <span class="text-[11px] font-medium text-maroon flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-maroon animate-pulse"></span>
            ${item.spots}
          </span>
          <button 
            type="button" 
            class="px-5 py-2.5 rounded-full bg-maroon hover:bg-maroon-light text-white text-xs font-bold uppercase tracking-wider shadow transition-colors book-class-btn"
            data-class-title="${item.title}"
            data-class-trainer="${item.trainer}"
            data-class-time="${item.dayName}, ${item.time}"
          >
            Записаться →
          </button>
        </div>
      `;

      scheduleContainer.appendChild(card);
    });

    // Attach event listeners to buttons
    scheduleContainer.querySelectorAll('.book-class-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const title = e.currentTarget.dataset.classTitle;
        const trainer = e.currentTarget.dataset.classTrainer;
        const time = e.currentTarget.dataset.classTime;
        handleQuickBookingSelection({ title, trainer, time });
      });
    });
  }

  // Day tabs click
  dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dayTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentDay = tab.dataset.day;
      renderSchedule();
    });
  });

  // Filter chips click
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentCategory = chip.dataset.category;
      renderSchedule();
    });
  });

  renderSchedule();
}

/* FAQ Accordion */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}

/* Phone input auto formatting adapted for Latvia (+371 XX XXX XXX) */
function initLatviaPhoneMasks() {
  const phoneInputs = document.querySelectorAll('input[type="tel"]');

  phoneInputs.forEach(input => {
    input.addEventListener('focus', () => {
      if (!input.value.trim()) {
        input.value = '+371 ';
      }
    });

    input.addEventListener('input', () => {
      let raw = input.value.replace(/\D/g, '');

      // Handle Latvia country code 371
      if (raw.startsWith('371')) {
        raw = raw.substring(3);
      }

      // Limit to 8 digits (Latvian phone numbers are 8 digits)
      raw = raw.substring(0, 8);

      let formatted = '+371';
      if (raw.length > 0) {
        formatted += ' ' + raw.substring(0, 2);
      }
      if (raw.length > 2) {
        formatted += ' ' + raw.substring(2, 5);
      }
      if (raw.length > 5) {
        formatted += ' ' + raw.substring(5, 8);
      }

      input.value = formatted;
    });

    input.addEventListener('blur', () => {
      if (input.value.trim() === '+371') {
        input.value = '';
      }
    });
  });
}

/* Main Lead Form Submission */
function initLeadForm() {
  const leadForm = document.getElementById('leadForm');
  const formSuccess = document.getElementById('formSuccess');

  if (!leadForm) return;

  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(leadForm);
    const booking = {
      id: Date.now(),
      name: formData.get('name'),
      phone: formData.get('phone'),
      direction: formData.get('direction'),
      trainer: formData.get('trainer'),
      time: formData.get('time'),
      location: formData.get('location') || 'Centrs',
      notes: formData.get('notes'),
      country: 'Latvia (+371)',
      createdAt: new Date().toISOString()
    };

    // Save to local storage
    const existing = JSON.parse(localStorage.getItem('23family_bookings') || '[]');
    existing.push(booking);
    localStorage.setItem('23family_bookings', JSON.stringify(existing));

    if (formSuccess) {
      formSuccess.classList.remove('hidden');
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    leadForm.reset();

    setTimeout(() => {
      if (formSuccess) formSuccess.classList.add('hidden');
    }, 8000);
  });
}

/* Video Modal */
function initVideoModal() {
  const videoModal = document.getElementById('videoModal');
  const openButtons = document.querySelectorAll('.open-video-btn');
  const closeBtn = document.getElementById('closeVideoModal');

  if (!videoModal) return;

  function openModal(title, subtitle) {
    const titleEl = document.getElementById('videoModalTitle');
    const subtitleEl = document.getElementById('videoModalSubtitle');
    if (titleEl && title) titleEl.textContent = title;
    if (subtitleEl && subtitle) subtitleEl.textContent = subtitle;

    videoModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    videoModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Handle static buttons & dynamically created buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-video-btn');
    if (btn) {
      e.preventDefault();
      const title = btn.dataset.videoTitle || 'Хореография 23 FAMILY';
      const trainer = btn.dataset.videoTrainer || 'Лиана & Анастасия';
      openModal(title, trainer);
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* Quick Booking Modal */
function initBookingModal() {
  const modal = document.getElementById('quickBookingModal');
  const openButtons = document.querySelectorAll('.open-booking-modal-btn');
  const closeBtn = document.getElementById('closeBookingModal');
  const form = document.getElementById('quickModalForm');
  const successNotice = document.getElementById('quickModalSuccess');

  if (!modal) return;

  function openModal(data = {}) {
    if (data.direction) {
      const select = modal.querySelector('select[name="direction"]');
      if (select) select.value = data.direction;
    }
    if (data.trainer) {
      const select = modal.querySelector('select[name="trainer"]');
      if (select) select.value = data.trainer;
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if (successNotice) successNotice.classList.add('hidden');
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const booking = {
        id: Date.now(),
        name: fd.get('name'),
        phone: fd.get('phone'),
        direction: fd.get('direction'),
        trainer: fd.get('trainer'),
        type: 'modal_quick_booking',
        country: 'Latvia (+371)',
        createdAt: new Date().toISOString()
      };

      const existing = JSON.parse(localStorage.getItem('23family_bookings') || '[]');
      existing.push(booking);
      localStorage.setItem('23family_bookings', JSON.stringify(existing));

      if (successNotice) successNotice.classList.remove('hidden');
      form.reset();

      setTimeout(() => {
        closeModal();
      }, 3000);
    });
  }

  window.openBookingModal = openModal;
}

/* Quick booking handling from cards */
function handleQuickBookingSelection({ title, trainer, time, location }) {
  const form = document.getElementById('leadForm');
  if (!form) return;

  const directionSelect = document.getElementById('directionSelect');
  const trainerSelect = document.getElementById('trainerSelect');
  const locationSelect = document.getElementById('locationSelect');

  if (directionSelect && title) {
    for (let i = 0; i < directionSelect.options.length; i++) {
      if (title.toLowerCase().includes(directionSelect.options[i].text.toLowerCase()) || 
          directionSelect.options[i].text.toLowerCase().includes(title.toLowerCase().split(' ')[0])) {
        directionSelect.selectedIndex = i;
        break;
      }
    }
  }

  if (trainerSelect && trainer) {
    if (trainer.includes('Лиана')) trainerSelect.value = 'liana';
    else if (trainer.includes('Анастасия')) trainerSelect.value = 'anastasia';
    else trainerSelect.value = 'any';
  }

  if (locationSelect && location) {
    locationSelect.value = location;
  }

  const bookingSection = document.getElementById('booking');
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' });
    
    // Highlight animation
    const container = form.closest('.rounded-3xl');
    if (container) {
      container.classList.add('ring-4', 'ring-maroon');
      setTimeout(() => {
        container.classList.remove('ring-4', 'ring-maroon');
      }, 1500);
    }
  }
}

function initQuickBookingButtons() {
  // Trainer selection buttons (Лиана / Анастасия)
  document.querySelectorAll('[data-select-trainer]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const trainerKey = btn.dataset.selectTrainer;
      const trainerSelect = document.getElementById('trainerSelect');
      if (trainerSelect) {
        trainerSelect.value = trainerKey;
      }
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Direction selection buttons
  document.querySelectorAll('[data-select-direction]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const dirKey = btn.dataset.selectDirection;
      const directionSelect = document.getElementById('directionSelect');
      if (directionSelect) {
        directionSelect.value = dirKey;
      }
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Location selection buttons
  document.querySelectorAll('[data-select-location]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const locKey = btn.dataset.selectLocation;
      const locationSelect = document.getElementById('locationSelect');
      if (locationSelect) {
        locationSelect.value = locKey;
      }
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Tariff selection buttons
  document.querySelectorAll('[data-select-tariff]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tariffName = btn.dataset.selectTariff;
      const notes = document.getElementById('bookingNotes');
      if (notes) {
        notes.value = `Выбранный тариф: ${tariffName}`;
      }
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
