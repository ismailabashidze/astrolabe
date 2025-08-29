// src/scripts/interactivity.js

// Function to initialize interactive elements
export function initInteractivity() {
  // Zodiac wheel interaction
  const zodiacSigns = document.querySelectorAll('.zodiac-sign');
  const signDetails = document.getElementById('sign-details');
  
  if (zodiacSigns.length > 0 && signDetails) {
    zodiacSigns.forEach(sign => {
      sign.addEventListener('click', function() {
        const signName = this.dataset.sign;
        const signSymbol = this.dataset.symbol;
        const signElement = this.dataset.element;
        const signDate = this.dataset.date;
        const signDescription = this.dataset.description;
        
        signDetails.innerHTML = `
          <div class="flex items-center mb-4">
            <span class="text-4xl mr-4">${signSymbol}</span>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">${signName}</h3>
              <p class="text-indigo-600">${signElement} • ${signDate}</p>
            </div>
          </div>
          <p class="text-gray-700">${signDescription}</p>
        `;
      });
    });
  }
  
  // FAQ accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
      const isOpen = answer.style.display === 'block';
      
      // Close all items
      document.querySelectorAll('.faq-answer').forEach(el => {
        el.style.display = 'none';
      });
      
      // Open clicked item if it wasn't open
      if (!isOpen) {
        answer.style.display = 'block';
      }
    });
  });
  
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
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initInteractivity);
} else {
  initInteractivity();
}