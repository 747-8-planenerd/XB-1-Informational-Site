document.addEventListener("DOMContentLoaded", function() {
  const highlightBtn = document.getElementById("highlight-btn");
  if (highlightBtn) {
    highlightBtn.addEventListener("click", function() {
      document.querySelectorAll(".grid-engines section").forEach(section => {
        section.classList.toggle("highlight");
      });
    });
  }

  const signupBtn = document.getElementById("signup-btn");
  if (signupBtn) {
    signupBtn.addEventListener("click", function() {
      window.location.href = "newsletter.html";
    });
  }
});