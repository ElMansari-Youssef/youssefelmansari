

let menu = document.querySelector('.navbar .menu');
let close = document.querySelector('header .mobile-menu i');
let menuContainer = document.querySelector('.mobile-menu');
let arrow = document.getElementById('arrow');


let scrollEffect = () => {
    let y = window.scrollY;
    y >=400 ? arrow.style.opacity = '1' : arrow.style.opacity = '0';

}


window.addEventListener('scroll', scrollEffect);

menu.addEventListener('click', () => {

    console.log('menu');

    menuContainer.style.visibility = 'visible';
    menuContainer.style.opacity = '1';

    
})

close.addEventListener('click', () => { 

    menuContainer.style.visibility = 'hidden';
    menuContainer.style.opacity = '0';


})