"use strict";

let hamburgMenu = document.querySelector(".hamburger-menu"),
  contactsLabel = document.querySelectorAll(".contacts-form label"),
  userName = document.querySelector(".user-name__input"),
  userEmail = document.querySelector(".user-email__input"),
  userSubject = document.querySelector(".user-subject"),
  userMessage = document.querySelector(".user-textarea"),
  btnSubmit = document.querySelector(".btn-submit"),
  btnIcon = document.querySelector(".btn-menu i"),
  errorMessage = document.querySelector(".email__input-error"),
  navLinks = document.querySelectorAll(".nav-link a");

hamburgMenu.onclick = function (event) {
  hamburgMenu.classList.toggle("active");
  if (btnIcon.classList.contains("fa-times")) {
    btnIcon.classList.replace("fa-times", "fa-bars");
  } else {
    btnIcon.classList.replace("fa-bars", "fa-times");
  }
};

for (const navLink of navLinks) {
  navLink.addEventListener("click", (e) => {
    if (hamburgMenu.classList.contains("active") && e.target == navLink) {
      hamburgMenu.classList.remove("active");
      btnIcon.classList.replace("fa-times", "fa-bars");
    }
  });
}

userEmail.oninput = function () {
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!userEmail.value.match(pattern)) {
    errorMessage.style.display = "inline";
    errorMessage.textContent = "Invalid email";
  } else {
    errorMessage.style.display = "none";
  }

  if (userEmail.value != "") {
    contactsLabel[1].style.transform = "translate(0, -5px)";
  } else {
    contactsLabel[1].style.transform = "translate(0, 15px)";
  }
};

userName.oninput = () => {
  if (userName.value != "") {
    contactsLabel[0].style.transform = "translate(0, -5px)";
  } else {
    contactsLabel[0].style.transform = "translate(0, 15px)";
  }
};

userSubject.oninput = () => {
  if (userSubject.value != "") {
    contactsLabel[2].style.transform = "translate(0, -5px)";
  } else {
    contactsLabel[2].style.transform = "translate(0, 15px)";
  }
};

btnSubmit.onsubmit = function (e) {
  e.preventDefault();
  if (
    userName.value == "" &&
    userEmail.value == "" &&
    userSubject.value == "" &&
    userMessage.value == ""
  ) {
    userName.classList.add("shake");
    userEmail.classList.add("shake");
    userSubject.classList.add("shake");
    userMessage.classList.add("shake");
  } else if (userName.value == "") {
    userName.classList.add("shake");
  } else if (userEmail.value == "") {
    userEmail.classList.add("shake");
  } else if (userSubject.value == "") {
    userSubject.classList.add("shake");
  } else if (userMessage.value == "") {
    userMessage.classList.add("shake");
  }
  setTimeout(() => {
    userEmail.classList.remove("shake");
    userMessage.classList.remove("shake");
    userName.classList.remove("shake");
    userSubject.classList.remove("shake");
  }, 500);
};
