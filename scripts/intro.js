window.addEventListener("load", () => {
  const overlay = document.getElementById("memory-lock-overlay");
  const hasPlayed = sessionStorage.getItem("memorySiteIntroPlayed");

  if (!hasPlayed && overlay) {
    sessionStorage.setItem("memorySiteIntroPlayed", "true");

    // Show overlay and trigger CSS animations
    overlay.style.display = "flex";
    requestAnimationFrame(() => {
      document.body.classList.add("intro-active");

      // Let animations play for 2.5s, then hide
      setTimeout(() => {
        document.body.classList.remove("intro-active");

        // Optional: fade out smoothly
        overlay.style.opacity = "0";
        setTimeout(() => {
          overlay.style.display = "none";
        }, 1000); // fade-out duration
      }, 2500);
    });
  } else {
    overlay.style.display = "none";
    overlay.style.opacity = "0";
    document.body.classList.remove("intro-active");
  }
});
