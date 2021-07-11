const form = document.getElementById("form1");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const email = document.getElementById("email");
const checkbox = document.getElementById("checkbox");
let span = document.getElementById("error");

form.addEventListener("submit", e => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const userNameValue = userName.value.trim();
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();

    if (userNameValue === "") {
        errorMessage(userName,"Lütfen bu alanı doldurunuz")
        userName.setAttribute("style","border:1px solid red;")
    }
    if (passwordValue === "") {
        errorMessage(password,"Lütfen bu alanı doldurunuz")
        password.setAttribute("style","border:1px solid red;")
    }
    else if (passwordValue.length < 8) {
        errorMessage(password,"Şifreniz minimum 8 karakter olmalı")
        password.setAttribute("style","border:1px solid red;")
    }
    if (emailValue === "") {
        errorMessage(email,"Lütfen bu alanı doldurunuz")
        email.setAttribute("style","border:1px solid red;")
    }
    else if (!isEmail(emailValue)){
        errorMessage(email,"Lütfen geçerli bir email giriniz")
        email.setAttribute("style","border:1px solid red;")
    }
    if (checkbox.checked == false) {
        errorMessage(checkbox,"Lütfen bu alanı doldurunuz")
    }
}

function errorMessage(input,message) {
    const formBody = input.parentElement;
    const span = formBody.querySelector("span");
    span.innerText = message;
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function inputChange(input) {
    let newInput = input.parentElement;
    let newSpan = newInput.querySelector("span")
    newSpan.innerText = "";
    input.setAttribute("style","border:1px solid green;")
}