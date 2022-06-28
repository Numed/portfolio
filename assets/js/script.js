let hamburgMenu = document.querySelector(".hamburger-menu"),
  contactsLabel = document.querySelectorAll(".contacts-form label"),
  userName = document.querySelector(".user-name__input"),
  userEmail = document.querySelector("user-email__input"),
  userSubject = document.querySelector(".user-subject"),
  userMessage = document.querySelector(".user-textarea"),
  btnSubmit = document.querySelector(".btn-submit");

hamburgMenu.onclick = function () {
  let btnIcon = document.querySelector(".btn-menu i");
  hamburgMenu.classList.toggle("active");
  if (btnIcon.classList.contains("fa-times")) {
    btnIcon.classList.replace("fa-times", "fa-bars");
  } else {
    btnIcon.classList.replace("fa-bars", "fa-times");
  }
};

userEmail.oninput = function () {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!userEmail.value.match(pattern)) {
      errorMsg[0].textContent = "Enter a valid email";
      errorMsg[0].style.display = "inline";
    } else {
      errorMsg[0].style.display = "none";
    }
  
    if (userEmail.value != "") {
      label[0].style.transform = "translate(-10px, -35px)";
    } else {
      label[0].style.transform = "translate(0, 0)";
    }
  };
  

btnSubmit.onclick = function () {
    if(userEmail)
};
