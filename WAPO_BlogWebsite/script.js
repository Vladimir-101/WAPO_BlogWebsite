/* -------------------------------
   CedarScapes Interactive Script
--------------------------------*/

// Smooth scroll from "Explore" button to About section
document.getElementById("exploreBtn").addEventListener("click", () => {
  const aboutSection = document.getElementById("about");
  aboutSection.scrollIntoView({ behavior: "smooth" });

  // Animate zoom effect
  aboutSection.classList.add("zoom-in");
  setTimeout(() => aboutSection.classList.remove("zoom-in"), 1000);
});

/* -------------------------------
   Fade-in Section Animations
--------------------------------*/
const sections = document.querySelectorAll("section");
const fadeInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.2 }
);

sections.forEach((sec) => {
  sec.classList.add("hidden");
  fadeInObserver.observe(sec);
});

/* -------------------------------
   Contact Form Popup Message
--------------------------------*/
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
   UNIVERSAL POPUP SYSTEM
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

// Close popup when clicking outside
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

/* -------------------------------
   Gallery Image Click → Popup
--------------------------------*/
const galleryCards = document.querySelectorAll(".gallery-card");

galleryCards.forEach((card) => {
  card.addEventListener("click", () => {
    popupImg.src = card.querySelector("img").src;
    popupDesc.textContent = card.dataset.desc || "";
    popupLink.href = card.dataset.link || "#";
    popupLink.textContent = card.dataset.link ? "View Source" : "";
    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

/* -------------------------------
   CLICKABLE LOGO → Popup
--------------------------------*/
const logo = document.querySelector("cedarscape.png");

if (logo) {
  logo.addEventListener("click", () => {
    popupImg.src = logo.src;
    popupDesc.textContent = "CedarScapes Official Logo";
    popupLink.href = logo.src;
    popupLink.textContent = "Open Full Image";

    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
}

