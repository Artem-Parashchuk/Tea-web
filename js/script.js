const btnMenu = document.querySelector('.mobile-menu__btn'); // Кнопка меню
const btnMenuClose = document.querySelector('.mobile-menu__close-btn') // Кнопка закривання меню
const menuList = document.querySelector('.nav__list')              // Мобільне меню
const menuClose = document.querySelector('.menu-close')                   //  div для створення фону при відкритому меню 

btnMenu.addEventListener('click', (e) => {
    menuList.classList.add('nav__list--open')
    menuClose.classList.add('is-open')
})

btnMenuClose.addEventListener('click', (e) => {
    menuList.classList.remove('nav__list--open')
    menuClose.classList.remove('is-open')
})

document.addEventListener('click', (e) => {
    if(e.target === menuClose) {
        menuList.classList.remove('nav__list--open')
        menuClose.classList.remove('is-open')
    }
})
