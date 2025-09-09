
const scrollBody = document.querySelector("body");
const btnMenu = document.getElementById('btn__menu');
const mainNav = document.getElementById('main__nav');
const lineButton = btnMenu.querySelectorAll('.line')
const logoBook = document.querySelector('.bookmark__img');
const circleBook = logoBook.querySelector('.bookCircle');
const pathBook = logoBook.querySelector('.bookPath');

/* export function checkedBtn() { */

btnMenu.addEventListener('click', () => {
    const lineTrfm = btnMenu.getAttribute('aria-expanded') === "true";
    btnMenu.setAttribute('aria-expanded', String(!lineTrfm));
    if (lineTrfm) {
        mainNav.classList.remove('menu__nav--open');
        lineButton[0].classList.remove('top');
        lineButton[1].classList.remove('middle');
        lineButton[2].classList.remove('bottom');
        logoBook.classList.remove('text-white');
        circleBook.classList.remove('text-white');
        pathBook.classList.remove('fill-gray-600')
        bodyScrollLockUpgrade.enableBodyScroll(scrollBody);
        btnMenu.focus();
    } else {
        mainNav.classList.add('menu__nav--open');
        lineButton[0].classList.add('top');
        lineButton[1].classList.add('middle');
        lineButton[2].classList.add('bottom');
        logoBook.classList.add('text-white');
        circleBook.classList.add('text-white');
        pathBook.classList.add('fill-gray-600')
        bodyScrollLockUpgrade.disableBodyScroll(scrollBody);
        btnMenu.focus();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btnMenu.getAttribute('aria-expanded') === 'true') {
        btnMenu.click();
    }
});


