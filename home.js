window.addEventListener("load", () => {
  document.querySelector(".yoga-text").classList.add("fade-in", "delay-1");
  document.querySelector(".yoga-img").classList.add("fade-in", "delay-2");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".scroll-reveal, .scroll-zoom").forEach(el => {
  observer.observe(el);
});

