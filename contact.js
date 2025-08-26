const form = document.getElementById("contactForm");
const notification = document.getElementById("notification");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
  form.reset();
});
