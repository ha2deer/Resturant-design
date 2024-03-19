document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code for the about.html page can go here
    console.log('About page loaded!');
  
    // Example: Change background color when clicking a button
    const changeColorButton = document.getElementById('change-color-btn');
    const body = document.body;
  
    changeColorButton.addEventListener('click', function() {
      body.style.backgroundColor = '#f0f0f0';
    });
  });
  