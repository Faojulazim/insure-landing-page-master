const menuIcon = document.querySelector("#menuIcon");
const closeIcon = document.querySelector("#closeIcon");
const hiddenMenu = document.querySelector("#hiddenMenu");
const hideAfterClick = document.querySelector("#hideAfterClick");

menuIcon.addEventListener("click", (e) => {
  document.body.classList.add("overflow-y-hidden");
  closeIcon.classList.remove("hidden");
  hiddenMenu.classList.remove("translate-x-[100%]");
  menuIcon.classList.add("hidden");
});
closeIcon.addEventListener("click", (e) => {
  document.body.classList.remove("overflow-y-hidden");
  closeIcon.classList.add("hidden");
  hiddenMenu.classList.add("translate-x-[100%]");
  menuIcon.classList.remove("hidden");
});
