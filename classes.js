function toggleCareer(id) {
  const desc = document.getElementById(id);
  document.querySelectorAll('.career-description').forEach(el => {
    if (el !== desc) {
      el.style.display = "none";
    }
  });

  if (desc.style.display === "block") {
    desc.style.display = "none";
  } else {
    desc.style.display = "block";
  }
}

document.addEventListener("scroll", () => {
    document.querySelectorAll(".instructor").forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  });