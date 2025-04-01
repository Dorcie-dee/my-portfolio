//darktoggling
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️';
  } else {
    darkModeToggle.textContent = '🌙';
  }
});


//hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');


//toggle mobile menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});


//back to top
const backToTopButton = document.getElementById('back-to-top');

//to show or hide the button when scrolling
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

//for smooth scrolling to the top
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



