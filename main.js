
localStorage.setItem("isLoggedIn", "false");
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


