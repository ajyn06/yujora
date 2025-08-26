 const overlay = document.getElementById("form-overlay");
  const formPlanTitle = document.getElementById("form-plan-title");
  const formPlanPrice = document.getElementById("form-plan-price");
  const notification = document.getElementById("notification");

  document.querySelectorAll(".join-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const plan = btn.getAttribute("data-plan").split(" - ");
      formPlanTitle.textContent = plan[0];
      formPlanPrice.textContent = plan[1];
      overlay.style.display = "flex";
    });
  });

  function closeForm() {
    overlay.style.display = "none";
  }

  function submitForm(e) {
    e.preventDefault();
    overlay.style.display = "none";
    notification.style.display = "block";
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  }
  