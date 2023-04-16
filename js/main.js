let msgtxt = document.getElementById("msgtxt"),
  xmsg = document.getElementById("x");

export function msgView(msg, time) {
  msgtxt.innerHTML = msg.toLowerCase();
  msgtxt.parentElement.style.display = "block";
  xmsg.addEventListener("click", function () {
    xmsg.parentElement.parentElement.style.display = "none";
  });
  if (xmsg.parentElement.parentElement.style.display == "block") {
    setTimeout(function () {
      xmsg.parentElement.parentElement.style.display = "none";
    }, time);
  }
}

let parentElementLoading =
    document.getElementById("firstball").parentElement.parentElement,
  firstballAnimation = document.getElementById("firstball"),
  secondballAnimation = document.getElementById("secondball"),
  textAinmation = document.getElementById("text");

export function loading(time) {
  parentElementLoading.style.display = "flex";
  firstballAnimation.style.animationPlayState = "running";
  secondballAnimation.style.animationPlayState = "running";
  textAinmation.style.animationPlayState = "running";
  if (parentElementLoading.style.display == "flex") {
    setTimeout(function () {
      parentElementLoading.style.display = "none";
    }, time);
  }
}

let userInput = document.getElementById("username"),
  PasswordInput = document.getElementById("password"),
  loginButton = document.getElementById("login");

let Click = 0;
window.onload = function () {
  // localStorage.clear();
  if (localStorage.getItem("user-code") == 0) {
    userInput.setAttribute("disabled", true);
    PasswordInput.setAttribute("disabled", true);
    loading(4500);
    setTimeout(function () {
      if (userInput.hasAttribute("disabled") === true) {
        window.location.href = "./homepage.html";
      }
    }, 6000);
  } else {
    loginButton.addEventListener("click", function (e) {
      if (userInput.value == "admin" && PasswordInput.value == "admin") {
        msgView(
          `My pleasure, <br>
        Welcome in our Website.`,
          4000
        );
        Click++;

        setTimeout(() => {
          msgView(`you can now change username and password to continue`, 4000);
        }, 4500);

        setTimeout(() => {
          if (Click != 0) {
            loading(5000);
            userInput.value = "";
            PasswordInput.value = "";
            userInput.setAttribute("placeholder", "New Username");
            PasswordInput.setAttribute("placeholder", "New Password");
          }
        }, 9000);
        setTimeout(() => {
          msgView(`Type New Username and New Password`, 4000);
        }, 14000);

        e.preventDefault();

        loginButton.addEventListener("click", function (eventTwo) {
          if (userInput.value !== "" && PasswordInput.value !== "") {
            let newUser = localStorage.setItem("new-user", userInput.value);
            let newPass = localStorage.setItem("new-pass", PasswordInput.value);
            let code = localStorage.setItem("user-code", 0);

            msgView(
              `Hello , ${localStorage.getItem(
                "new-user"
              )} <br> You changed your informations`,
              4000
            );
            setTimeout(function () {
              if (Click != 0) {
                loading(6000);
              }
            }, 4500);

            setTimeout(() => {
              window.location.href =
                "https://adhamsherbiny.github.io/kingsman/homepage.html";
            }, 10000);
            eventTwo.preventDefault();
            userInput.setAttribute("disabled", "disabled");
            PasswordInput.setAttribute("disabled", "disabled");
          } else if (userInput.value == "") {
            msgView(`enter new username`, 3000);
          } else if (PasswordInput.value == "") {
            msgView(`enter new password`, 3000);
          }
        });
      } else if (userInput.value == "" && PasswordInput.value != "") {
        msgView(`enter username`, 4000);
      } else if (PasswordInput.value == "" && userInput.value != "") {
        msgView(`enter password`, 4000);
      } else if (userInput.value == "" && PasswordInput.value == "") {
        msgView(`Enter username and password`, 4000);
      } else {
        msgView(
          `Sorry we can not find your username and password  <br> try again later`,
          4000
        );
      }
    });
  }
};
