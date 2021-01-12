"use sctrict"

const headerBtn = document.querySelector(".page-header__btn");
const navMenu = document.querySelector(".headernav-list");
const sectionAboutBank = document.querySelector(".about-bank");

headerBtn.addEventListener("click", (evt) => {
  evt.preventDefault();

  navMenu.classList.toggle("headernav-list--hide");

  if (!navMenu.classList.contains("headernav-list--hide")) {
    headerBtn.style.backgroundImage = `url("../img/icon-close.svg")`;
    headerBtn.style.width = "18px";
    headerBtn.style.height = "19px";
    sectionAboutBank.style.background = `linear-gradient(180deg, #2d314d 0%, rgba(45, 49, 77, 0) 100%), url("../img/bg-about.jpg") -41px -83px no-repeat`;
  } else {
    headerBtn.style.backgroundImage = `url("../img/icon-burger.svg")`;
    headerBtn.style.width = "24px";
    headerBtn.style.height = "11px";
    sectionAboutBank.style.background = `url("../img/bg-about.jpg") -41px -83px no-repeat`;
  }
})
