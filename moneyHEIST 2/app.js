const navbarlist = document.querySelector('.navbar-list');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click',close);

function show(){
    navbarlist.style.display = 'flex';
    navbarlist.style.top = '0';
}
function close(){
    navbarlist.style.top = '-100%';
}