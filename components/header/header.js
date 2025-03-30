document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  const overlay = document.getElementById("overlay");

  if (hamburger && mobileNav && overlay) {
    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
      overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      overlay.classList.remove("active");
    });
  }
});
