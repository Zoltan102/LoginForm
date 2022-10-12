"use strict";
document.addEventListener('DOMContentLoaded', () => {
    console.log('document loaded');
    document.getElementById('submit').addEventListener('click', () => {
        var _a;
        let userName = document.getElementById('userName').value;
        let password = document.getElementById('password').value;
        let email = document.getElementById('email').value;
        let term = document.getElementById('terms').value;
        if (userName === null || userName.length < 6 || userName.length > 30 || userName.includes('&') || userName.includes('-') || userName.includes('_') || userName.includes('\u0027')) {
            console.log('wrong username');
            document.getElementById('userName').value = "";
            document.getElementById('userName').placeholder = "Felhaszálónév nem megengedett!";
            (_a = document.getElementById('userName')) === null || _a === void 0 ? void 0 : _a.classList.add('error');
        }
    });
});
