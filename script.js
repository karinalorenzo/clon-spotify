const toggleBtn = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("is-active");
});
