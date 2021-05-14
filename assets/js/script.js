// let btnRed = document.querySelector('button');

// btnRed.addEventListener('click', () => {
//     window.history.back();
// });

let menu = document.querySelector("#menu");
let isdown = false;
menu.addEventListener("click", () => {
  isdown = !isdown;
  if (isdown) {
    menu.src = "/assets/svg/menu-red.svg";
  } else {
    menu.src = "/assets/svg/menu-black.svg";
  }

  let invisible = document.querySelector("#invisible");
  invisible.classList.toggle("visible");
});
