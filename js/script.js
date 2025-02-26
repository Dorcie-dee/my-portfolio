document.addEventListener('DOMContentLoaded', function() {
  const skillCircles = document.querySelectorAll('.skill-circle');

  skillCircles.forEach(circle => {
      const percentage = parseInt(circle.dataset.percentage);
      const circleInner = circle.querySelector('.circle-inner');

      // Create a dynamic gradient based on the percentage
      circleInner.style.backgroundImage = `conic-gradient(
          #007bff ${percentage}%, 
          lightgray ${percentage}%
      )`;
  });
});



 