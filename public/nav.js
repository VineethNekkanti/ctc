const navList = document.querySelector('.nav-list');
const toggle = document.querySelector('.nav-mobile-toggle');
const visibility = navList.getAttribute("data-visible");

toggle.addEventListener('click', () => {

  if(visibility === "false"){
    navList.setAttribute("data-visible", true);
    toggle.setAttribute("aria-expanded", true);
  } else if(visibility === "true") {
    navList.setAttribute("data-visible", false);
    toggle.setAttribute("aria-expanded", false);
  }
});
