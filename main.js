/**
 * Elso Rios - Psicoterapeuta Junguiano
 * Interactive Client Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Scroll Effect
  const header = document.querySelector('.site-header');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // 3. Testimonials Slider Controller
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const dotsContainer = document.querySelector('.slider-dots');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');
  let currentSlide = 0;
  let slideInterval;

  if (testimonialCards.length > 0) {
    // Generate dots
    dotsContainer.innerHTML = '';
    testimonialCards.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    const showSlide = (index) => {
      testimonialCards.forEach(card => card.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));

      currentSlide = (index + testimonialCards.length) % testimonialCards.length;
      testimonialCards[currentSlide].classList.add('active');
      if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    };

    const nextSlide = () => showSlide(currentSlide + 1);
    const prevSlide = () => showSlide(currentSlide - 1);

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Auto-advance every 6 seconds
    const startAutoSlide = () => {
      slideInterval = setInterval(nextSlide, 6000);
    };

    const stopAutoSlide = () => {
      clearInterval(slideInterval);
    };

    const sliderContainer = document.querySelector('.testimonials-slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', stopAutoSlide);
      sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }

    showSlide(0);
    startAutoSlide();
  }

  // 4. FAQ Accordion Controller
  const faqHeaders = document.querySelectorAll('.faq-header');

  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const faqItem = header.parentElement;
      const isActive = faqItem.classList.contains('active');

      // Close all other accordions
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      // Toggle current
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });

  // 5. Article Modal Popup Controller
  const modalOverlay = document.getElementById('article-modal');
  const modalOpenBtn = document.getElementById('open-article-modal');
  const modalCloseBtn = document.getElementById('close-article-modal');

  if (modalOverlay && modalOpenBtn && modalCloseBtn) {
    const openModal = () => {
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    modalOpenBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });

    modalCloseBtn.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // 6. Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav);
});
