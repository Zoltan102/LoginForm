document.addEventListener('DOMContentLoaded', () => {
    console.log('document loaded')

    document.getElementById('submit')!.addEventListener('click', () =>{
        let userName = (document.getElementById('userName') as HTMLInputElement).value;
        let password = (document.getElementById('password') as HTMLInputElement).value;
        let email = (document.getElementById('email') as HTMLInputElement).value;
        let term = (document.getElementById('terms') as HTMLInputElement).value;

        if (userName === null || userName.length < 6 || userName.length > 30 || userName.includes('&') || userName.includes('-') || userName.includes('_') || userName.includes('\u0027' )){
            console.log('wrong username');
            (document.getElementById('userName') as HTMLInputElement).value = "";
            (document.getElementById('userName') as HTMLInputElement).placeholder = "Felhaszálónév nem megengedett!";
            document.getElementById('userName')?.classList.add('error');
        }
    });
});