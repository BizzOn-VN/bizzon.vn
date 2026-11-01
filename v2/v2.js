// Reveal sections once as they scroll into view; without IntersectionObserver everything just shows
const revealed = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }),
    { rootMargin: '0px 0px -10% 0px' },
  );
  revealed.forEach((el) => observer.observe(el));
} else {
  revealed.forEach((el) => el.classList.add('is-in'));
}

// Close the mobile menu after a link in it is tapped
document.querySelectorAll('.menu nav a').forEach((link) =>
  link.addEventListener('click', () => link.closest('details').removeAttribute('open')),
);
