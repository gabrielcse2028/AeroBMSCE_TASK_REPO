// Accessible mobile navigation shared by all three pages.
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.getElementById("site-navigation");
if (menuToggle && siteNav) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    siteNav.classList.remove("is-open");
  };
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    siteNav.classList.toggle("is-open", open);
  });
  siteNav.addEventListener("click", event => { if (event.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu(); menuToggle.focus();
    }
  });
  window.matchMedia("(min-width: 801px)").addEventListener("change", closeMenu);
}

// Slideshow: show one recruitment-team photo at a time.
const photos = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg", "images/photo4.jpg"];
const descriptions = ["AeroBMSCE team and aircraft", "AeroBMSCE team photograph", "AeroBMSCE aviation activity", "AeroBMSCE project photograph"];
const slide = document.getElementById("slide");
const slideshow = document.querySelector(".slideshow");
if (slide && slideshow) {
  const dots = [...slideshow.querySelectorAll(".dot")];
  const next = slideshow.querySelector(".next");
  const prev = slideshow.querySelector(".prev");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let index = 0;
  let timer = null;
  let hovering = false;
  let focusWithin = false;
  function showSlide(value) {
    index = (value + photos.length) % photos.length;
    slide.src = photos[index];
    slide.alt = descriptions[index];
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
      if (i === index) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  }
  function stop() { if (timer !== null) clearInterval(timer); timer = null; }
  function start() {
    stop();
    if (!reduceMotion.matches && !document.hidden && !hovering && !focusWithin) {
      timer = setInterval(() => showSlide(index + 1), 2000);
    }
  }
  next.addEventListener("click", () => { showSlide(index + 1); start(); });
  prev.addEventListener("click", () => { showSlide(index - 1); start(); });
  dots.forEach((dot, i) => dot.addEventListener("click", () => { showSlide(i); start(); }));
  slideshow.addEventListener("mouseenter", () => { hovering = true; stop(); });
  slideshow.addEventListener("mouseleave", () => { hovering = false; start(); });
  slideshow.addEventListener("focusin", () => { focusWithin = true; stop(); });
  slideshow.addEventListener("focusout", event => { if (!slideshow.contains(event.relatedTarget)) { focusWithin = false; start(); } });
  document.addEventListener("visibilitychange", start);
  if (reduceMotion.addEventListener) reduceMotion.addEventListener("change", start);
  showSlide(0);
  start();
}
