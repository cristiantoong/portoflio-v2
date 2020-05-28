const menuBtn = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const exitBtn = document.getElementById('exit-btn');

menuBtn.addEventListener('click', function(){
    // mobileMenu.style.visibility = 'unset';
    mobileMenu.style.transform = 'translateX(0%)';
    mobileMenu.style.transition = 'transform 0.3s ease-in';
});

exitBtn.addEventListener('click', function(){
    // mobileMenu.style.visibility = 'hidden';
    mobileMenu.style.transform = 'translateX(100%)';
    mobileMenu.style.transition = 'transform 0.3s ease-in';
});