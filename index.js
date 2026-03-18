const toggleBtn = document.querySelector(".toggle-btn");
const toggleIcon = toggleBtn.querySelector("ion-icon");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", () => {
  links.classList.toggle("active");

  // Switch icon depending on state
  if (links.classList.contains("active")) {
    toggleIcon.setAttribute("name", "close-outline");
  } else {
    toggleIcon.setAttribute("name", "menu-outline");
  }
});
