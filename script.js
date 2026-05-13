const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* ================= TYPING EFFECT ================= */

const textElement = document.querySelector(".typing-text span");

const texts = [
  "Hi, I'm Samuel",
  "Building Cloud Solutions",
  "Cloud & DevOps Engineer",
  "AWS | Docker | Jenkins"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const currentText = texts[textIndex];

  if (!isDeleting) {

    textElement.textContent =
      currentText.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentText.length) {

      isDeleting = true;

      setTimeout(typeEffect, 1000);

      return;
    }

  } else {

    textElement.textContent =
      currentText.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      isDeleting = false;

      textIndex++;

      if (textIndex === texts.length) {
        textIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 40 : 90);
}

typeEffect();