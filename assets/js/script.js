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
  $("#css-navbar .menu ul").toggleClass("show");
  let img = $("#menu");
  if (showNavbar) {
    img.attr("src", "/assets/svg/exit.svg");
  } else {
    img.attr("src", "/assets/svg/menu.svg");
  }
}

$("#navbar-show").click(function (e) {
  e.preventDefault();

  toggleMenu();
});

$("#css-navbar .menu  ul li a").click(function () {
  toggleMenu();
});
