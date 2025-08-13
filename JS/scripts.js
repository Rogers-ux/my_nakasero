// Add shadow to navbar on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Highlight nav link based on current page URL
document.querySelectorAll('.nav-link').forEach(link => {
  // This helps on local files by comparing only pathname
  if (link.href.includes(window.location.pathname)) {
    link.classList.add('active');
  }
});

// Appointment form handling (basic client-side demo)
const form = document.getElementById('appointment-form');
if(form){
  form.addEventListener('submit', e => {
    e.preventDefault();

    // Here you can add AJAX or server integration

    const message = document.getElementById('form-message');
    message.textContent = "Thank you for booking! We will contact you soon.";
    form.reset();
  });
}
// Hamburger Menu Toggle
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = `<div></div><div></div><div></div>`;

// Insert hamburger before the nav-links
const navbar = document.getElementById('navbar');
const navLinks = navbar.querySelector('.nav-links');
navbar.insertBefore(hamburger, navLinks);

// Toggle active classes on click
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // animate to "X"
  navLinks.classList.toggle('active');  // slide in menu
});

// Optional: close menu when a link is clicked (for mobile)
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (hamburger.classList.contains('active')) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});
