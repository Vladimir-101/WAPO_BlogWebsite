/* -------------------------------
   CedarScapes Interactive Script
--------------------------------*/

// 🌿 Smooth scroll from "Explore" button to About section
document.getElementById("exploreBtn").addEventListener("click", () => {
  const aboutSection = document.getElementById("about");
  aboutSection.scrollIntoView({ behavior: "smooth" });

  // Animate a subtle zoom effect on the About section after scroll
  aboutSection.classList.add("zoom-in");
  setTimeout(() => aboutSection.classList.remove("zoom-in"), 1500);
});

/* -------------------------------
   Fade-in Animations on Scroll
--------------------------------*/

// Select all sections for animation
const sections = document.querySelectorAll("section");

const fadeInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => {
  section.classList.add("hidden");
  fadeInObserver.observe(section);
});

/* -------------------------------
   Floating Leaves Animation
--------------------------------*/
function createLeaf() {
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");
  leaf.style.left = Math.random() * 100 + "vw";
  leaf.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.body.appendChild(leaf);

  setTimeout(() => leaf.remove(), 10000);
}

setInterval(createLeaf, 800);

/* -------------------------------
   Contact Form Interaction
--------------------------------*/
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const message = document.createElement("div");
  message.classList.add("popup-message");
  message.innerHTML = "🌿 Thank you for reaching out! <br> We'll get back to you soon.";

  document.body.appendChild(message);

  // Fade in the popup
  setTimeout(() => (message.style.opacity = 1), 50);

  // Fade out and remove after 3s
  setTimeout(() => {
    message.style.opacity = 0;
    setTimeout(() => message.remove(), 600);
  }, 3000);

  this.reset();
});

/* -------------------------------
   Button Hover Animation
--------------------------------*/
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.1)";
    btn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "none";
  });
});
