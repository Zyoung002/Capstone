document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
  
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
  
    if (username === '' && password === '') {
        alert('Login successful!');
       window.location.href= "http://127.0.0.1:5500/Landing.html"
    } else {
        alert('Invalid username or password');
    }
  })
