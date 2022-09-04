const hamburgerIcon = document.querySelector(".hamburger");
const menuModal = document.querySelector(".menu-modal");

hamburgerIcon.addEventListener("click", function (e) {
  menuModal.classList.toggle("hide-menu");
});
