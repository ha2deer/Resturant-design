document.addEventListener('DOMContentLoaded', function() {
    const menuCategories = document.querySelectorAll('.menu-category');
  
    // Add event listeners to each menu category
    menuCategories.forEach(category => {
      const toggleButton = category.querySelector('.toggle-button');
      const menuItems = category.querySelector('.menu-items');
  
      // Toggle visibility of menu items when clicking on toggle button
      toggleButton.addEventListener('click', function() {
        menuItems.classList.toggle('show');
      });
    });
  });
  