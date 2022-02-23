let menuToggle = document.querySelector(".navigation__button");
let menu =document.querySelector(".sidebar");

function showMenu (e){
    console.log(e)
    menu.classList.toggle("sidebar--show");

}
document.querySelector(".main-container").addEventListener('click',showMenu)
