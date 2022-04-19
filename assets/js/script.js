// Mouse Over to Show ALLY project

const ally = document.getElementById("mouseHere-Ally");
const organimi = document.getElementById("mouseHere-Organimi");
const ecycle = document.getElementById("mouseHere-Ecycle");
const foodie = document.getElementById("mouseHere-Foodie");

const hiddenAlly = document.getElementById("hiddenAlly");
const hiddenOrganimi = document.getElementById("hiddenOrganimi");
const hiddenEcycle = document.getElementById("hiddenEcycle");
const hiddenFoodie = document.getElementById("hiddenFoodie");

ally.addEventListener("mouseover", function handleMouseOver() {
  hiddenAlly.style.visibility = "visible";
  hiddenOrganimi.style.visibility = "hidden";
  hiddenEcycle.style.visibility = "hidden";
  hiddenFoodie.style.visibility = "hidden";

  ally.classList.add("highlight-work-page");
  organimi.classList.remove("highlight-work-page");
  ecycle.classList.remove("highlight-work-page");
  foodie.classList.remove("highlight-work-page");
});

// Mouse Over to Show ORGANIMI project

organimi.addEventListener("mouseover", function handleMouseOver() {
  hiddenOrganimi.style.visibility = "visible";
  hiddenAlly.style.visibility = "hidden";
  hiddenEcycle.style.visibility = "hidden";
  hiddenFoodie.style.visibility = "hidden";

  organimi.classList.add("highlight-work-page");
  ally.classList.remove("highlight-work-page");
  ecycle.classList.remove("highlight-work-page");
  foodie.classList.remove("highlight-work-page");
});

// Mouse Over to Show ECYCLE project

ecycle.addEventListener("mouseover", function handleMouseOver() {
  hiddenEcycle.style.visibility = "visible";
  hiddenOrganimi.style.visibility = "hidden";
  hiddenAlly.style.visibility = "hidden";
  hiddenFoodie.style.visibility = "hidden";

  ecycle.classList.add("highlight-work-page");
  organimi.classList.remove("highlight-work-page");
  ally.classList.remove("highlight-work-page");
  foodie.classList.remove("highlight-work-page");
});

// Mouse Over to Show FOODIE project

foodie.addEventListener("mouseover", function handleMouseOver() {
  hiddenFoodie.style.visibility = "visible";
  hiddenOrganimi.style.visibility = "hidden";
  hiddenEcycle.style.visibility = "hidden";
  hiddenAlly.style.visibility = "hidden";

  foodie.classList.add("highlight-work-page");
  organimi.classList.remove("highlight-work-page");
  ecycle.classList.remove("highlight-work-page");
  ally.classList.remove("highlight-work-page");
});
