const loginBtn = document.getElementById("loginBtn");
const signUpBtn = document.getElementById("signUpBtn");
const loginForm = document.getElementById("loginForm");
const signUpForm = document.getElementById("signUpForm");
const formWrapper = document.querySelector(".form-wrapper");

loginBtn.addEventListener("click", () => {
    loginForm.classList.add("active");
    signUpForm.classList.remove("active");
    formWrapper.style.transform = "translateX(0%)";
});

signUpBtn.addEventListener("click", () => {
    signUpForm.classList.add("active");
    loginForm.classList.remove("active");
    formWrapper.style.transform = "translateX(-50%)";
});
