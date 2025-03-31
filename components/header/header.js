document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  const overlay = document.getElementById("overlay");

  // ✅ Handle hamburger toggle
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

  // ✅ Watch for intro end (when .intro-active is removed from <body>)
  const observer = new MutationObserver(() => {
    if (!document.body.classList.contains("intro-active")) {
      document.body.classList.add("intro-complete");
      console.log("✅ intro-complete added after intro");
      observer.disconnect(); // Stop watching
    }
  });

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ["class"]
  });
});
