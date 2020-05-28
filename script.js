const menuBtn = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const exitBtn = document.getElementById('exit-btn');

menuBtn.addEventListener('click', function(){
    mobileMenu.style.visibility = 'unset';
});

exitBtn.addEventListener('click', function(){
    mobileMenu.style.visibility = 'hidden';
});