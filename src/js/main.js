"use sctrict"

const btnOpenMenu = document.querySelector(".page-header__btn");
const headerNavMenu = document.querySelector(".headernav-list");
const sectionAboutBank =document.querySelector(".about-bank");

btnOpenMenu.addEventListener("click", (evt) => {
  evt.preventDefault();

  headerNavMenu.classList.toggle("headernav-list--hide")

  if (!headerNavMenu.classList.contains("headernav-list--hide")) {
    btnOpenMenu.style.backgroundImage = `url("../img/icon-close.svg")`;
    btnOpenMenu.style.width = "18px";
    btnOpenMenu.style.height = "19px";
    sectionAboutBank.style.background = `linear-gradient(180deg, #2d314d 0%, rgba(45, 49, 77, 0) 100%), url("../img/bg-about.jpg") -41px -83px no-repeat`;
  } else {
    btnOpenMenu.style.backgroundImage = `url("../img/icon-burger.svg")`;
    btnOpenMenu.style.width = "24px";
    btnOpenMenu.style.height = "11px";
    sectionAboutBank.style.background = `url("../img/bg-about.jpg") -41px -83px no-repeat`;
  }
});
