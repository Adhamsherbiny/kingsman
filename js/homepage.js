import { msgView, loading } from "./main.js";
if (true) {
  if (localStorage.getItem("user-code") == "0") {
    let cardName = document.getElementById("cardUsername"),
      cardNumber = document.getElementById("cardNumber"),
      cardDate = document.getElementById("cardDate");
    setTimeout(function () {
      msgView(
        `hi, ${localStorage.getItem(
          "new-user"
        )} we make your kingsman card <br> <br> save card number to make actions from kingsman card`,
        5000
      );
    }, 2000);

    setTimeout(function () {
      loading(2000);
    }, 7500);

    setTimeout(function () {
      cardName.innerHTML = localStorage.getItem("new-user");
      localStorage.setItem(
        "card-number",
        `C-${Math.floor(Math.random() * 1000000000)}`
      );
      cardNumber.innerHTML = localStorage.getItem("card-number");
      cardDate.innerHTML = "1/1/2024";
    }, 10000);
  } else {
    window.location.pathname = "../index.html";
  }
}

let menuIcon = document.getElementById("menu-icon"),
  navMenu = document.getElementById("nav-menu"),
  dropMenu = document.getElementById("dropmenu"),
  dropMenuClick = document.getElementById("dropmenuclick");

menuIcon.addEventListener("click", function (e) {
  if (navMenu.style.display == "flex") {
    navMenu.style.display = "none";
    dropMenu.style.display = "none";
    activeLink.setAttribute("class", "active");
    dropMenuClick.removeAttribute("class");
  } else {
    navMenu.style.display = "flex";
    dropMenu.style.display = "none";
    activeLink.setAttribute("class", "active");
    dropMenuClick.removeAttribute("class");
  }
});

let activeLink = document.querySelector(".active");
dropMenuClick.addEventListener("click", function (e) {
  e.preventDefault();
  if (dropMenu.style.display == "block") {
    activeLink.setAttribute("class", "active");
    dropMenuClick.removeAttribute("class");
    dropMenu.style.display = "none";
  } else {
    dropMenuClick.setAttribute("class", "active");
    activeLink.removeAttribute("class");
    dropMenu.style.display = "block";
  }
});
