const formContainer = document.querySelector('.form-container');
const switchToSignup = document.querySelector('.switch-to-signup');
const switchToLogin = document.querySelector('.switch-to-login');

switchToSignup.addEventListener('click', () => {
    formContainer.style.transform = 'translateX(-100%)';
});

switchToLogin.addEventListener('click', () => {
    formContainer.style.transform = 'translateX(0)';
});
