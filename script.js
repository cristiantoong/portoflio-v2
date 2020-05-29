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

// MODAL

const modalExitBtn = document.getElementById('modal-exit-btn');
const modal = document.getElementById('modal');

modalExitBtn.addEventListener('click', function(){
    modal.style.display = 'none';
});



// Hide modal on outside click
window.addEventListener('click', function(e){
    if (e.target == modal){
        modal.style.display = 'none'
    } else {
        return false
    }
});