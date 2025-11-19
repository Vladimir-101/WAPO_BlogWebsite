/* -------------------------------
   CedarScapes Interactive Script
--------------------------------*/

// Smooth scroll from "Explore" button to About section
document.getElementById("exploreBtn").addEventListener("click", () => {
  const aboutSection = document.getElementById("about");
  aboutSection.scrollIntoView({ behavior: "smooth" });

  // Animate zoom effect
  aboutSection.classList.add("zoom-in");
  setTimeout(() => aboutSection.classList.remove("zoom-in"), 1500);
});

// Fade-in Animations on Scroll
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

// Contact Form Interaction
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const message = document.createElement("div");
  message.classList.add("popup-message");
  message.innerHTML = "🌿 Thank you for reaching out! <br> We'll get back to you soon.";
  document.body.appendChild(message);
  setTimeout(() => (message.style.opacity = 1), 50);
  setTimeout(() => {
    message.style.opacity = 0;
    setTimeout(() => message.remove(), 600);
  }, 3000);
  this.reset();
});

/* -------------------------------
   Gallery Popup (10 images)
--------------------------------*/
const popup = document.createElement("div");
popup.classList.add("popup-overlay");
popup.style.display = "none";
popup.style.position = "fixed";
popup.style.top = 0;
popup.style.left = 0;
popup.style.width = "100%";
popup.style.height = "100%";
popup.style.backgroundColor = "rgba(0,0,0,0.8)";
popup.style.alignItems = "center";
popup.style.justifyContent = "center";
popup.style.zIndex = "10000";
popup.style.padding = "20px";

const popupContent = document.createElement("div");
popupContent.style.position = "relative";
popupContent.style.background = "#fff";
popupContent.style.borderRadius = "12px";
popupContent.style.maxWidth = "800px";
popupContent.style.width = "100%";
popupContent.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
popupContent.style.textAlign = "center";
popupContent.style.padding = "15px";
popupContent.style.overflow = "hidden";

const closeBtn = document.createElement("span");
closeBtn.textContent = "✖";
closeBtn.style.position = "absolute";
closeBtn.style.top = "10px";
closeBtn.style.right = "15px";
closeBtn.style.fontSize = "1.5rem";
closeBtn.style.cursor = "pointer";
closeBtn.style.color = "#333";
closeBtn.style.fontWeight = "bold";
closeBtn.style.zIndex = "10001";

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  document.body.style.overflow = "auto";
});

const popupImg = document.createElement("img");
popupImg.style.width = "100%";
popupImg.style.maxHeight = "500px";
popupImg.style.objectFit = "cover";
popupImg.style.borderRadius = "10px";

const popupDesc = document.createElement("p");
popupDesc.style.margin = "15px 0";
popupDesc.style.color = "#006d4f";
popupDesc.style.fontWeight = "600";

const popupLink = document.createElement("a");
popupLink.style.display = "inline-block";
popupLink.style.marginBottom = "10px";
popupLink.style.color = "#007c52";
popupLink.style.fontWeight = "bold";
popupLink.style.textDecoration = "none";
popupLink.target = "_blank";

popupContent.appendChild(closeBtn);
popupContent.appendChild(popupImg);
popupContent.appendChild(popupDesc);
popupContent.appendChild(popupLink);
popup.appendChild(popupContent);
document.body.appendChild(popup);

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

const galleryCards = document.querySelectorAll(".gallery-card");
galleryCards.forEach(card => {
  card.addEventListener("click", () => {
    popupImg.src = card.querySelector("img").src;
    popupDesc.textContent = card.dataset.desc || "";
    popupLink.href = card.dataset.link || "#";
    popupLink.textContent = card.dataset.link ? "View Source" : "";
    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

// Smooth scroll from "Explore" button to About section
document.getElementById("exploreBtn").addEventListener("click", () => {
  showSection("about");
});

// Tab Switching Functionality
const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll("section");

function showSection(id) {
  sections.forEach(sec => {
    sec.style.display = (sec.id === id) ? "block" : "none";
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Set all sections visible on first load (optional)
sections.forEach(sec => sec.style.display = "block");

// Nav click event
navItems.forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    const targetId = item.dataset.target;
    showSection(targetId);
  });
});

// Contact Form Popup
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const message = document.createElement("div");
  message.classList.add("popup-message");
  message.innerHTML = "🌿 Thank you for reaching out! <br> We'll get back to you soon.";
  document.body.appendChild(message);
  setTimeout(() => (message.style.opacity = 1), 50);
  setTimeout(() => {
    message.style.opacity = 0;
    setTimeout(() => message.remove(), 600);
  }, 3000);
  this.reset();
});

// Gallery Popup
const popup = document.createElement("div");
popup.classList.add("popup-overlay");
popup.style.display = "none";
popup.style.position = "fixed";
popup.style.top = 0;
popup.style.left = 0;
popup.style.width = "100%";
popup.style.height = "100%";
popup.style.backgroundColor = "rgba(0,0,0,0.8)";
popup.style.alignItems = "center";
popup.style.justifyContent = "center";
popup.style.zIndex = "10000";
popup.style.padding = "20px";

const popupContent = document.createElement("div");
popupContent.style.position = "relative";
popupContent.style.background = "#fff";
popupContent.style.borderRadius = "12px";
popupContent.style.maxWidth = "800px";
popupContent.style.width = "100%";
popupContent.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
popupContent.style.textAlign = "center";
popupContent.style.padding = "15px";
popupContent.style.overflow = "hidden";

const closeBtn = document.createElement("span");
closeBtn.textContent = "✖";
closeBtn.style.position = "absolute";
closeBtn.style.top = "10px";
closeBtn.style.right = "15px";
closeBtn.style.fontSize = "1.5rem";
closeBtn.style.cursor = "pointer";
closeBtn.style.color = "#333";
closeBtn.style.fontWeight = "bold";
closeBtn.style.zIndex = "10001";
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  document.body.style.overflow = "auto";
});

const popupImg = document.createElement("img");
popupImg.style.width = "100%";
popupImg.style.maxHeight = "500px";
popupImg.style.objectFit = "cover";
popupImg.style.borderRadius = "10px";

const popupDesc = document.createElement("p");
popupDesc.style.margin = "15px 0";
popupDesc.style.color = "#006d4f";
popupDesc.style.fontWeight = "600";

const popupLink = document.createElement("a");
popupLink.style.display = "inline-block";
popupLink.style.marginBottom = "10px";
popupLink.style.color = "#007c52";
popupLink.style.fontWeight = "bold";
popupLink.style.textDecoration = "none";
popupLink.target = "_blank";

popupContent.appendChild(closeBtn);
popupContent.appendChild(popupImg);
popupContent.appendChild(popupDesc);
popupContent.appendChild(popupLink);
popup.appendChild(popupContent);
document.body.appendChild(popup);

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

const galleryCards = document.querySelectorAll(".gallery-card");
galleryCards.forEach(card => {
  card.addEventListener("click", () => {
    popupImg.src = card.querySelector("img").src;
    popupDesc.textContent = card.dataset.desc || "";
    popupLink.href = card.dataset.link || "#";
    popupLink.textContent = card.dataset.link ? "View Source" : "";
    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});
