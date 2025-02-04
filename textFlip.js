document.addEventListener("DOMContentLoaded", function() {
    const roles = document.querySelectorAll(".role");
    let currentRoleIndex = 0;
    
    function cycleRoles() {
      roles.forEach((role, index) => {
        role.style.opacity = "0"; // Set all roles to be invisible
        role.style.transform = "translateY(100%)"; // Move all roles down
      });
  
      roles[currentRoleIndex].style.opacity = "1"; // Set the current role to visible
      roles[currentRoleIndex].style.transform = "translateY(0)"; // Move it into place
  
      currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Move to the next role
    }
  
    setInterval(cycleRoles, 1500); // Cycle every 3 seconds
    cycleRoles(); // Run immediately
  });
  