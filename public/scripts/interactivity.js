// public/scripts/interactivity.js

// Function to initialize interactive elements
function initInteractivity() {
  // FAQ accordion
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      const icon = question.querySelector('svg');
      
      question.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block';
        
        // Close all items
        document.querySelectorAll('.faq-answer').forEach(el => {
          el.style.display = 'none';
        });
        
        // Reset all icons
        document.querySelectorAll('.faq-question svg').forEach(svg => {
          svg.classList.remove('rotate-180');
        });
        
        // Open clicked item if it wasn't open
        if (!isOpen) {
          answer.style.display = 'block';
          icon.classList.add('rotate-180');
        }
      });
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (event) => {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      const isClickInsideMenu = mobileMenu.contains(event.target);
      const isClickOnButton = mobileMenuButton && mobileMenuButton.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnButton) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
  
  // Header scroll effect
  let lastScrollTop = 0;
  const header = document.querySelector('header');
  
  if (header) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
      }
      
      lastScrollTop = scrollTop;
    });
  }
  
  // Add shadow to header on scroll
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 10) {
        header.classList.add('shadow-lg');
      } else {
        header.classList.remove('shadow-lg');
      }
    }
  });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initInteractivity);
} else {
  initInteractivity();
}