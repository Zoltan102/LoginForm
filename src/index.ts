document.addEventListener('DOMContentLoaded', () => {
    console.log('document loaded')

    document.getElementById('submit')!.addEventListener('click', () =>{
        let userName = (document.getElementById('userName') as HTMLInputElement).value;
        let password = (document.getElementById('password') as HTMLInputElement).value;
        let rePassword = (document.getElementById('rePassword') as HTMLInputElement).value;
        let email = (document.getElementById('email') as HTMLInputElement).value;
        let reEmail = (document.getElementById('reEmail') as HTMLInputElement).value;
        let terms = (document.getElementById('terms') as HTMLInputElement).value;

        if (userName === null || userName.length < 6 || userName.length > 30 || userName.includes('&') || userName.includes('-') || userName.includes('_') || userName.includes('\u0027') || userName.includes('<') || userName.includes('>') || (userName.split('.')!.length > 1) || userName.charAt(0) == '.'){
            console.log('wrong username');
            (document.getElementById('userName') as HTMLInputElement).value = "";
            (document.getElementById('userName') as HTMLInputElement).placeholder = "Felhaszálónév nem megengedett!";
            document.getElementById('userName')!.classList.add('error');
        }else if (!(email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) || email === null ){
            console.log('wrong email');
            (document.getElementById('email') as HTMLInputElement).value = "";
            (document.getElementById('email') as HTMLInputElement).placeholder = "E-mail nem megengedett!";
            document.getElementById('email')!.classList.add('error');
        }else if (email !== reEmail){
            console.log('emails dont match');
            (document.getElementById('reEmail') as HTMLInputElement).value = "";
            (document.getElementById('reEmail') as HTMLInputElement).placeholder = "E-mail-ek nem egyeznek!";
            document.getElementById('reEmail')!.classList.add('error');
        }else if (password === null || password.length < 5 || password.length > 10){
            console.log('wrong password');
            (document.getElementById('password') as HTMLInputElement).value = "";
            (document.getElementById('password') as HTMLInputElement).placeholder = "Jelszó nem megengedett!";
            document.getElementById('password')!.classList.add('error');
        }else if (rePassword === null || password !== rePassword){
            console.log('emails dont match');
            (document.getElementById('rePassword') as HTMLInputElement).value = "";
            (document.getElementById('rePassword') as HTMLInputElement).placeholder = "jelszavak nem egyeznek!";
            document.getElementById('rePassword')!.classList.add('error');
        }else if (terms === null){

        }else{
            alert('Sikeres regisztráció!')
        }
    });
});