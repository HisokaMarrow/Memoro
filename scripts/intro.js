window.addEventListener("load", () => {
  const overlay = document.getElementById("memory-lock-overlay");
  const hasPlayed = sessionStorage.getItem("memorySiteIntroPlayed");

  if (!hasPlayed && overlay) {
    sessionStorage.setItem("memorySiteIntroPlayed", "true");
    overlay.style.display = "flex";
    requestAnimationFrame(() => {
      document.body.classList.add("intro-active");

      setTimeout(() => {
        document.body.classList.remove("intro-active");
        overlay.style.opacity = "0";
        setTimeout(() => {
          overlay.style.display = "none";
        }, 1000);
      }, 2500);
    });
  } else if (overlay) {
    overlay.style.display = "none";
    overlay.style.opacity = "0";
    document.body.classList.remove("intro-active");
  }
});
