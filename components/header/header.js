document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  const overlay = document.getElementById("overlay");

  // ✅ Add .intro-complete after 3s (or match your intro duration)
  setTimeout(() => {
    document.body.classList.add("intro-complete");
  }, 3000); // 3000ms = 3 seconds

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
