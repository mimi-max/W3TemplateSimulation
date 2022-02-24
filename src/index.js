let menu = document.querySelector(".sidebar");
let close = document.querySelector('.sidebar__link-close');
let btn = document.querySelector('.navigation__button')


function openMenu(ev) {
    console.log("ttt")
    menu.classList.add('sidebar--show')
    ev.stopPropagation()
    document.querySelector(".main-container").addEventListener('click',closeMenu);
    btn.removeEventListener('click', openMenu);
    
}

 btn.addEventListener('click', openMenu);


function closeMenu(e){
    console.log("gg")
    menu.classList.remove('sidebar--show')
    document.querySelector(".main-container").removeEventListener('click',closeMenu);
    btn.addEventListener('click', openMenu);
    
}
close.addEventListener('click',closeMenu);
