const progress = document.querySelector('.progress');
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  const height = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${(scrollY / height) * 100}%`;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Booking request captured! Connect this form to WhatsApp, email, or backend.');
});
