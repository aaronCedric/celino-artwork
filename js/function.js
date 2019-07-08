const resize = document.querySelector('.resize');
const line = document.querySelectorAll('.line');
const navList = document.querySelector('.main-menu');
const menuList = document.querySelectorAll('.main-menu-list');

let showMenu = false;

const toggleMenu = () => {
    if (!showMenu) {
        resize.classList.add('close');
        navList.classList.add('show');
        line.forEach(item => item.classList.add('show'));
        menuList.forEach(item => item.classList.add('show'));
        showMenu = true;
    } else {
        resize.classList.remove('close');
        navList.classList.remove('show');
        line.forEach(item => item.classList.remove('show'));
        menuList.forEach(item => item.classList.remove('show'));
        showMenu = false;
    }
}

resize.addEventListener('click', toggleMenu);