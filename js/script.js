//hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

//toggle mobile menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});


//back to top
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Responsive adjustments on resize
window.addEventListener('resize', () => {
  // Close mobile menu if screen size increases
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  }
});





































// document.addEventListener('DOMContentLoaded', function() {
//   const skillCircles = document.querySelectorAll('.skill-circle');

//   skillCircles.forEach(circle => {
//       const percentage = parseInt(circle.dataset.percentage);
//       const circleInner = circle.querySelector('.circle-inner');

//       // Create a dynamic gradient based on the percentage
//       circleInner.style.backgroundImage = `conic-gradient(
//           #007bff ${percentage}%, 
//           lightgray ${percentage}%
//       )`;
//   });
// });



 