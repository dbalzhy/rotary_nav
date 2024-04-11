const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))


/** carousel block */
let slideIndex = 1

function showSlides(n) {
    let slides = document.getElementById('imgs').getElementsByTagName('img')

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

let interval = setInterval(function () {
    slideIndex++;
    showSlides(slideIndex);
}, 3000);



