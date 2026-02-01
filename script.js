const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks! Your booking request has been sent.");
  form.reset();
});
