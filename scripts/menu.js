const menuIcon = document.querySelector('.menu__icon'); 

if (menuIcon) {
    const menuBody = document.querySelector('.menu__body');
    
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}