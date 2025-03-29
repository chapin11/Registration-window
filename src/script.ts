let signUpBtn = document.querySelector('.sign-up-btn');
let signInBtn = document.querySelector('.sign-in-btn');
let signUpWindow = document.querySelector('.sign-up')
let signInWindow = document.querySelector('.sign-in')

// Изначально нормальная позиция у окна Sign in
signInWindow?.classList.add('normal-position')

signUpBtn?.addEventListener('click',()=> {
    if(!signUpWindow?.classList.contains('normal-position')) {
        signInWindow?.classList.add('scroll-right')
        signUpWindow?.classList.add('normal-position')
        signUpWindow?.classList.remove('scroll-left')
        signInWindow?.classList.remove('normal-position')
        signUpBtn?.classList.add('btn-color-active')
        signUpBtn?.classList.remove('btn-color')
        signInBtn?.classList.add('btn-color')
        signInBtn?.classList.remove('btn-color-active')

    }

})
signInBtn?.addEventListener('click',()=> {
    if(!signInWindow?.classList.contains('normal-position')) {

        signUpWindow?.classList.add('scroll-left')
        signInWindow?.classList.add('normal-position')
        signInWindow?.classList.remove('scroll-right')
        signUpWindow?.classList.remove('normal-position')

        signInBtn?.classList.add('btn-color-active')
        signInBtn?.classList.remove('btn-color')
        signUpBtn?.classList.add('btn-color')
        signUpBtn?.classList.remove('btn-color-active')

    }

})