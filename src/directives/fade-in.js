const fadeIn = {
  mounted(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-20px)'; // Start position for the "jump-in"
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.2 // Trigger when 20% of the item is visible
    });

    observer.observe(el);
  }
};

export default fadeIn;