
const username = document.getElementById("username-field");
const password = document.getElementById("password-field");

document.getElementById("login-form-submit").addEventListener("click", myFunction);
      function myFunction() {
          window.location.href="index.html";
        if (username.value === "user" && password.value === "webdev") {
            window.location.href="index.html";
        } else {
            loginErrorMsg.style.opacity = 1;
        }
        
      }