document.addEventListener("DOMContentLoaded", function () {
    const indicator = document.querySelector(".current-menu-indicator");
    const menuItems = document.querySelectorAll(".has-dropdown");
  
    menuItems.forEach((menuItem, index) => {
      const menuItemId = `menu-item-${index + 1}`; // Generate the corresponding ID
      const menuItemElement = document.getElementById(menuItemId); // Get the menu item by ID
  
      menuItemElement.addEventListener("click", () => {
        // Calculate the left position of the indicator based on the clicked menu item
        const leftPosition = index * menuItemElement.offsetWidth;
  
        // Update the indicator's position
        indicator.style.left = leftPosition + "px";
      });
    });
  });
  