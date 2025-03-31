document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  const overlay = document.getElementById("overlay");

  // ✅ Force .intro-complete after 3 seconds no matter what
  setTimeout(() => {
    document.body.classList.add("intro-complete");
    console.log("✅ Fallback: .intro-complete added by timeout");
  }, 3000);

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
