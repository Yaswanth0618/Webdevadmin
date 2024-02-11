localStorage.setItem('isLoggedIn', 'false');
function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  if (username === 'CHadmin1289' && password === 'CHadminpass8912') {
    alert('Login successful');
    localStorage.setItem('isLoggedIn', 'true'); // Set login status to true
    window.location.href = 'home.html'; // Redirect to main.html
  } else {
    alert('Invalid username or password');
  }
}