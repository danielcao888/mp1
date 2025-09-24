const navBar = document.getElementById("navBar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute("href")));

// change which nav item is active based on scroll op the user
function highlightNav() {
  let idx = 0;
  const navBottom = navBar.getBoundingClientRect().bottom + window.scrollY;
  sections.forEach((sec, i) => {
    if (sec.offsetTop <= navBottom + 4) {
      idx = i;
    }
  });
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
    idx = navLinks.length - 1;
  }
  navLinks.forEach((l, i) => {
    l.classList.toggle("active", i === idx);
  });
}
window.addEventListener("scroll", highlightNav);
highlightNav();

// shrink nav bar when user is scrolling down
function shrinkNav() {
  if (window.scrollY > 10) {
    navBar.classList.add("shrink");
  } else {
    navBar.classList.remove("shrink");
  }
}
window.addEventListener("scroll", shrinkNav);
shrinkNav();

// carousel functionality and carousel vars
const track = document.querySelector(".car-track");
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".car-btn.left");
const rightBtn = document.querySelector(".car-btn.right");
let curSlide = 0;

function moveCarousel() {
  track.style.transform = `translateX(-${curSlide * 100}%)`;
}
leftBtn.addEventListener("click", () => {
  curSlide = (curSlide - 1 + slides.length) % slides.length;
  moveCarousel();
});
rightBtn.addEventListener("click", () => {
  curSlide = (curSlide + 1) % slides.length;
  moveCarousel();
});
moveCarousel();

// modal with open + close functionalities
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");

openBtn.addEventListener("click", () => {
  modal.classList.add("show");
});
modal.addEventListener("click", e => {
  if (e.target.dataset.close === "true") {
    modal.classList.remove("show");
  }
});
window.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    modal.classList.remove("show");
  }
});
