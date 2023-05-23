// Get the buttons and sections from the HTML code
const proceedBtn1 = document.querySelector('#next-btn');
const proceedBtn2 = document.querySelector('.form-cover2 button:nth-child(2)');
const proceedBtn3 = document.querySelector('.form-cover3 button:first-child');
const backBtn2 = document.querySelector('.form-cover2 button:first-child');
const backBtn3 = document.querySelector('.form-cover3 button:last-child');
const section1 = document.querySelector('.form-cover');
const section2 = document.querySelector('.form-cover2');
const section3 = document.querySelector('.form-cover3');

// Add event listeners to the buttons
proceedBtn1.addEventListener('click', function() {
  section1.style.display = 'none';
  section2.style.display = 'block';
});

proceedBtn2.addEventListener('click', function() {
  section2.style.display = 'none';
  section3.style.display = 'block';
});

proceedBtn3.addEventListener('click', function() {
  // Replace with actual form submission code
});

backBtn2.addEventListener('click', function() {
  section2.style.display = 'none';
  section1.style.display = 'flex';
});

backBtn3.addEventListener('click', function() {
  section3.style.display = 'none';
  section2.style.display = 'none';
});