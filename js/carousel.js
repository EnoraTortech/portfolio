document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".slide");
  const controlButtons = document.querySelectorAll(".control-button");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "flex";
      } else {
        slide.style.display = "none";
      }
    });
  }

  controlButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    showSlide(index);
    controlButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});


  showSlide(0); // Afficher le premier bloc par défaut
});
