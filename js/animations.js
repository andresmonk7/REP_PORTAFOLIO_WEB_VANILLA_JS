(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.section-hidden').forEach((el) => observer.observe(el));
})();
