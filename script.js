const menuBtn = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const exitBtn = document.getElementById('exit-btn');

// shows mobile menu bar
menuBtn.addEventListener('click', function(){
    mobileMenu.style.transform = 'translateX(0%)';
    mobileMenu.style.transition = 'transform 0.3s ease-in';
});

// close mobile menu bar
exitBtn.addEventListener('click', function(){
    mobileMenu.style.transform = 'translateX(100%)';
    mobileMenu.style.transition = 'transform 0.3s ease-in';
});

// MODAL
const modalExitBtn = document.getElementById('modal-exit-btn');
const modal = document.getElementById('modal');
const modals = document.querySelectorAll('.modal');
const projects = document.querySelectorAll('.project');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let modalContent = document.querySelector('.modal-content');
let modalList = [];
let counter = 0;

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



projects.forEach(function(project, index){
    project.addEventListener('click', function(e){
        // show modal
        modal.style.display = 'block';
        modal.style.transition = 'all 0.5s ease-in;';
        modalContent.style.transition = 'all 0.5s ease-in;';
        // console.log(e.target.parentElement, index)
        
        // display each project image content when click
        if(e.target.parentElement.classList.contains(`p${index + 1}`)){
            modalContent.innerHTML = modals[index].innerHTML;
        }

        
    });  
});



// next and prev buttons for Modal slider
prevBtn.addEventListener('click', function(){
    counter--;

    if(counter < 0){
        counter = modals.length - 1;
    }

    modalContent.innerHTML = modals[counter].innerHTML;

})

nextBtn.addEventListener('click', function(){
    counter++;
    if (counter > modals.length - 1) {
      counter = 0;
    }
    modalContent.innerHTML = modals[counter].innerHTML;

})

