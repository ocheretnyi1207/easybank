"use sctrict"

const btnOpenMenu = document.querySelector(".page-header__btn");
const headerNavMenu = document.querySelector(".headernav-list");
const sectionAboutBank =document.querySelector(".about-bank");

btnOpenMenu.addEventListener("click", (evt) => {
  evt.preventDefault();

  headerNavMenu.classList.toggle("hide")

  if (!headerNavMenu.classList.contains("hide")) {
    btnOpenMenu.style.backgroundImage = `url("../img/icon-close.svg")`;
    btnOpenMenu.style.width = "18px";
    btnOpenMenu.style.height = "19px";
    sectionAboutBank.style.background = `linear-gradient(180deg, #2d314d 0%, rgba(45, 49, 77, 0) 100%), url("../img/bg-about.jpg") no-repeat`;
  } else {
    btnOpenMenu.style.backgroundImage = `url("../img/icon-burger.svg")`;
    btnOpenMenu.style.width = "24px";
    btnOpenMenu.style.height = "11px";
    sectionAboutBank.style.backgroundImage = `url("../img/bg-about.jpg") no-repeat`;
  }
});
