/*document.getElementById('loginForm').addEventListener('submit1', function (event) {
    event.preventDefault(); 

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="psw"]').value;

    if (username === 'zyoung002' && password === 'password') {
        alert('Login successful!');
        function window.location.href= "http://127.0.0.1:5500/Landing.html"
    } else {
        alert('Invalid username or password');
    }
}); */
function login() {
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="psw"]').value;

    if (username === 'zyoung002' && password === 'password') {
        alert('Login successful!');
        window.location.href= "http://127.0.0.1:5500/Landing.html";
    } else {
        alert('Invalid username or password');
    }

}