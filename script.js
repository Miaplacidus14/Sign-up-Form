const button = document.querySelector(".submit");

button.addEventListener('click', () => {
    var password = document.getElementById("pwd").value;
    var c_password = document.getElementById("confirm-pwd").value;
    var pwdError = document.querySelector(".pwdError");
    if (password!== c_password) {
        pwdError.textContent = "* Passwords do not match";
    } else {
        pwdError.textContent = "";
    }
})
