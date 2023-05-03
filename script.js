const pwdRepeat = document.getElementById("pwd-repeat");

pwdRepeat.addEventListener("keyup", e => {
    const pwd = document.querySelector("#pwd");

    const pwdError = document.querySelector("#pwd-repeat + .error");
    
    if (pwdRepeat.value != pwd.value){
        pwdError.innerText = "Passwords don't match";
    } else {
        pwdError.innerText = "";
    }
})