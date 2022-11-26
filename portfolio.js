const slides = [
    './gallery/4.jpg',
    './gallery/5.jpg',
    './gallery/6.jpg',
    './gallery/7.jpg',
    './gallery/8.jpg',
    './gallery/1.jpg',
    './gallery/2.jpg',
    './gallery/3.jpg',
    './gallery/9.jpg',
    './gallery/10.jpg'
];

const buttons = document.querySelectorAll('.gallery-button');
const activeSlide = document.querySelector('#activeSlide');
let newIndex = 0;

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        
        newIndex = button.className.includes('next') ? newIndex + 1 : newIndex -1;
        
        if(newIndex < 0) newIndex = slides.length - 1;
        if(newIndex == slides.length) newIndex = 0;
        activeSlide.src = slides[newIndex];
        console.log(newIndex);
    });
});