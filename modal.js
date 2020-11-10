const body = document.querySelector("body");
const openBtn = document.querySelector(".openBtn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".closeModalBtn");

function handleBtn() {
  modal.classList.remove("hidden");
  body.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
}

function init() {
  openBtn.addEventListener("click", handleBtn);
}
init();

function handleCloseBtn() {
  modal.classList.add("hidden");
  body.style.backgroundColor = "";
}
if (closeBtn) {
  closeBtn.addEventListener("click", handleCloseBtn);
}
