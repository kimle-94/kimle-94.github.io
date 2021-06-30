// let menu = document.querySelector("#menu");
// let isdown = false;
// menu.addEventListener("click", () => {
//   isdown = !isdown;
//   if (isdown) {
//     menu.src = "/assets/svg/menu-red.svg";
//   } else {
//     menu.src = "/assets/svg/menu-black.svg";
//   }

//   let invisible = document.querySelector("#invisible");
//   invisible.classList.toggle("visible");
// });

$(function () {
  $("body#work-page").mousewheel(function (event, delta) {
    // event.preventDefault();
    let menu_box = document.querySelector(".menu-box-container");
    menu_box.scrollLeft -= delta * 1;
  });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("css-navbar").style.top = "0";
  } else {
    document.getElementById("css-navbar").style.top = "-10rem";
  }
  prevScrollpos = currentScrollPos;
};

let showNavbar = false;
function toggleMenu() {
  showNavbar = !showNavbar;
  $('#css-navbar .menu ul').toggleClass('show')
  let img = $('#menu');
  if (showNavbar) {
    img.attr('src', '/assets/svg/exit.svg');
  } else {
    img.attr('src', '/assets/svg/menu.svg');
  }
}

$('#navbar-show').click(function(e) {
  e.preventDefault();

  toggleMenu();
})

$('#css-navbar .menu  ul li a').click(function() {
  toggleMenu();
})
