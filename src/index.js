"use strict";
document.addEventListener('DOMContentLoaded', () => {
    console.log('document loaded');
    document.getElementById('submit').addEventListener('click', () => {
        let userName = document.getElementById('userName').value;
        let password = document.getElementById('password').value;
        let rePassword = document.getElementById('rePassword').value;
        let email = document.getElementById('email').value;
        let reEmail = document.getElementById('reEmail').value;
        let terms = document.getElementById('terms').value;
        if (userName === null || userName.length < 6 || userName.length > 30 || userName.includes('&') || userName.includes('-') || userName.includes('_') || userName.includes('\u0027') || userName.includes('<') || userName.includes('>') || (userName.split('.').length > 1) || userName.charAt(0) == '.') {
            console.log('wrong username');
            document.getElementById('userName').value = "";
            document.getElementById('userName').placeholder = "Felhaszálónév nem megengedett!";
            document.getElementById('userName').classList.add('error');
        }
        else if (!(email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) || email === null) {
            console.log('wrong email');
            document.getElementById('email').value = "";
            document.getElementById('email').placeholder = "E-mail nem megengedett!";
            document.getElementById('email').classList.add('error');
        }
        else if (email !== reEmail) {
            console.log('emails dont match');
            document.getElementById('reEmail').value = "";
            document.getElementById('reEmail').placeholder = "E-mail-ek nem egyeznek!";
            document.getElementById('reEmail').classList.add('error');
        }
        else if (password === null || password.length < 5 || password.length > 10) {
            console.log('wrong password');
            document.getElementById('password').value = "";
            document.getElementById('password').placeholder = "Jelszó nem megengedett!";
            document.getElementById('password').classList.add('error');
        }
        else if (rePassword === null || password !== rePassword) {
            console.log('emails dont match');
            document.getElementById('rePassword').value = "";
            document.getElementById('rePassword').placeholder = "jelszavak nem egyeznek!";
            document.getElementById('rePassword').classList.add('error');
        }
        else if (terms === null) {
        }
        else {
            alert('Sikeres regisztráció!');
        }
    });
});
