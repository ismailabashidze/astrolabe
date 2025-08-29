// Page transition animations
(function() {
  // Add fade out animation when clicking on internal links
  document.addEventListener('click', function(event) {
    const link = event.target.closest('a');
    if (link && link.href && isInternalLink(link.href)) {
      // Don't apply animation to anchor links, external links, or special cases
      if (link.getAttribute('href').startsWith('#') || 
          link.getAttribute('target') === '_blank' ||
          link.getAttribute('download')) {
        return;
      }
      
      const mainContent = document.querySelector('.page-transition');
      if (mainContent) {
        // Prevent default navigation
        event.preventDefault();
        
        // Add fade out class
        mainContent.classList.remove('page-enter');
        mainContent.classList.add('page-exit');
        
        // Navigate after animation completes
        setTimeout(() => {
          window.location.href = link.href;
        }, 700); // Match the CSS animation duration
      }
    }
  });
  
  // Handle browser back/forward navigation
  window.addEventListener('popstate', function() {
    const mainContent = document.querySelector('.page-transition');
    if (mainContent) {
      // Add fade out class
      mainContent.classList.remove('page-enter');
      mainContent.classList.add('page-exit');
    }
  });
  
  // Add fade in animation when page loads
  document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('.page-transition');
    if (mainContent) {
      // Reset classes to ensure proper entrance animation
      mainContent.classList.remove('page-exit');
      mainContent.classList.add('page-enter');
    }
  });
  
  // Helper function to check if a link is internal
  function isInternalLink(href) {
    try {
      // Skip empty hrefs, anchor links, and javascript: links
      if (!href || href.startsWith('#') || href.startsWith('javascript:')) {
        return false;
      }
      
      const url = new URL(href, window.location.origin);
      return url.origin === window.location.origin;
    } catch (e) {
      // If URL parsing fails, treat as internal if it doesn't contain a protocol
      // (relative links) but not for obviously external protocols
      return href.includes('://') === false && 
             href.startsWith('//') === false &&
             href.trim() !== '';
    }
  }
})();