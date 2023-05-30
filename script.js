//copie menu pour mobile
function copyMenu(){
    //copie inside .dpt-cat .departements
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML=dptCategory.innerHTML;

    //copie inside nav à nav
    var mainNav= document.querySelector('.header-nav nav');
    var navPlace= document.querySelector('.off-canvas nav');
    navPlace.innerHTML=mainNav.innerHTML;

    //copie .header-top .wrapper à .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML=topNav.innerHTML;
}
copyMenu();

// affichage du menu mobile
const menuButton=document.querySelector('.trigger'),
    closeButton=document.querySelector('.t-close'),
    addclass=document.querySelector('.site');
menuButton.addEventListener('click', function(){
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function(){
    addclass.classList.remove('showmenu')
})

//affichage sous-menu sur mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click',toggle));

function toggle(e){
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand') ;
    this.closest('.has-child').classList.toggle('expand');
}


// Slider

const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
  });