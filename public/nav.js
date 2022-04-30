const navList = document.querySelector('.nav-list');
const toggle = document.querySelector('.nav-mobile-toggle');
const aboutUS = document.querySelector('.anchor1');
const writeAReview = document.querySelector('.anchor2');
const contribute = document.querySelector('.anchor3');


toggle.addEventListener('click', () => {
const visibility = navList.getAttribute("data-visible");

  if(visibility === "false"){
    navList.setAttribute("data-visible", true);
    toggle.setAttribute("aria-expanded", true);

  } else if(visibility === "true") {
    navList.setAttribute("data-visible", false);
    toggle.setAttribute("aria-expanded", false);

  }
});

aboutUS.addEventListener('click', () => {
const visibility = navList.getAttribute("data-visible");

  if(visibility === "true") {
    navList.setAttribute("data-visible", false);
    toggle.setAttribute("aria-expanded", false);
  }

})

writeAReview.addEventListener('click', () => {
const visibility = navList.getAttribute("data-visible");

  if(visibility === "true") {
    navList.setAttribute("data-visible", false);
    toggle.setAttribute("aria-expanded", false);
  }

})

contribute.addEventListener('click', () => {
const visibility = navList.getAttribute("data-visible");

  if(visibility === "true") {
    navList.setAttribute("data-visible", false);
    toggle.setAttribute("aria-expanded", false);
  }

})
