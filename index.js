let btn = document.getElementById('cta-btn');
let overlay = document.getElementById('overlay');
btn.addEventListener("click", fucntion(){
    overlay.style.display = 'grid';
    overlay.classList.add('animate-overlay');
});