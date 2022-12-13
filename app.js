let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");


function handlePasswordValidation(){
    if(password.value!= confirmPassword.value){
            confirmPassword.setCustomValidity("Password Don't Match")
        }
    else{
        confirmPassword.setCustomValidity("");
    }
}

password.onchange = handlePasswordValidation;
confirmPassword.onchange = handlePasswordValidation;
confirmPassword.onkeyup = handlePasswordValidation;