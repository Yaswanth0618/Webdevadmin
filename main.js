src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js"

localStorage.setItem("isLoggedIn", "true");
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
    alert("Login successful");
    localStorage.setItem("isLoggedIn", "true"); // Set login status to true
    window.location.href = "home.html"; // Redirect to main.html
  } else {
    alert("Invalid username or password");
  }
}


