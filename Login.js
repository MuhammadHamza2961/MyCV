
function login() {
    let username = document.querySelector('#username').value
    let password = document.querySelector('#password').value

    if (username === 'Hamza' && password === 'hamza123') {
        sessionStorage.setItem('LoggedIn', 'true');
        alert("Success");
        // window.location.href = 'My_Resume.html'
    }
    else {
        alert("Wrong Credentials")
    }
}
