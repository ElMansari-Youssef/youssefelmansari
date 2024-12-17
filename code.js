let menu = document.querySelector('.navbar .menu');
let close = document.querySelector('header .mobile-menu i');
let menuContainer = document.querySelector('.mobile-menu');


menu.addEventListener('click', () => {

    console.log('menu');

    menuContainer.style.visibility = 'visible';
    menuContainer.style.opacity = '1';

    
})

close.addEventListener('click', () => { 

    menuContainer.style.visibility = 'hidden';
    menuContainer.style.opacity = '0';


})