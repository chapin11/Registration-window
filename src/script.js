var signUpBtn = document.querySelector('.sign-up-btn');
var signInBtn = document.querySelector('.sign-in-btn');
var signUpWindow = document.querySelector('.sign-up');
var signInWindow = document.querySelector('.sign-in');
// Изначально нормальная позиция у окна Sign in
signInWindow === null || signInWindow === void 0 ? void 0 : signInWindow.classList.add('normal-position');
signUpBtn === null || signUpBtn === void 0 ? void 0 : signUpBtn.addEventListener('click', function () {
    if (!(signUpWindow === null || signUpWindow === void 0 ? void 0 : signUpWindow.classList.contains('normal-position'))) {
        signInWindow === null || signInWindow === void 0 ? void 0 : signInWindow.classList.add('scroll-right');
        signUpWindow === null || signUpWindow === void 0 ? void 0 : signUpWindow.classList.add('normal-position');
        signUpWindow === null || signUpWindow === void 0 ? void 0 : signUpWindow.classList.remove('scroll-left');
        signInWindow === null || signInWindow === void 0 ? void 0 : signInWindow.classList.remove('normal-position');
        signUpBtn === null || signUpBtn === void 0 ? void 0 : signUpBtn.classList.add('btn-color-active');
        signUpBtn === null || signUpBtn === void 0 ? void 0 : signUpBtn.classList.remove('btn-color');
        signInBtn === null || signInBtn === void 0 ? void 0 : signInBtn.classList.add('btn-color');
        signInBtn === null || signInBtn === void 0 ? void 0 : signInBtn.classList.remove('btn-color-active');
    }
});
signInBtn === null || signInBtn === void 0 ? void 0 : signInBtn.addEventListener('click', function () {
    if (!(signInWindow === null || signInWindow === void 0 ? void 0 : signInWindow.classList.contains('normal-position'))) {
        signUpWindow === null || signUpWindow === void 0 ? void 0 : signUpWindow.classList.add('scroll-left');
        signInWindow === null || signInWindow === void 0 ? void 0 : signInWindow.classList.add('normal-position');
        signInWindow === null || signInWindow === void 0 ? void 0 : signInWindow.classList.remove('scroll-right');
        signUpWindow === null || signUpWindow === void 0 ? void 0 : signUpWindow.classList.remove('normal-position');
        signInBtn === null || signInBtn === void 0 ? void 0 : signInBtn.classList.add('btn-color-active');
        signInBtn === null || signInBtn === void 0 ? void 0 : signInBtn.classList.remove('btn-color');
        signUpBtn === null || signUpBtn === void 0 ? void 0 : signUpBtn.classList.add('btn-color');
        signUpBtn === null || signUpBtn === void 0 ? void 0 : signUpBtn.classList.remove('btn-color-active');
    }
});
