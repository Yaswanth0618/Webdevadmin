/** 
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
*/





/**
<body>
  <div class="bodylogin">
    <div class="containerxy">
      <h2>Culinary Harbor Admin</h2>
      <form id="loginForm">
       <input type="text" id="username" placeholder="Username">
        <input type="password" id="password" placeholder="Password">
        <button type="submit" id="submit" >Login</button>
     </form>
    </div>
  </div>

</body>
*/