const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselWrapper = document.querySelector('.carousel-wrapper');
let index = 0;

function showSlide(i) {
    const slides = document.querySelectorAll('.carousel-item');
    if (i >= slides.length) index = 0;
    if (i < 0) index = slides.length - 1;
    carouselWrapper.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => {
    index--;
    showSlide(index);
    resetAutoSlide();
});

nextButton.addEventListener('click', () => {
    index++;
    showSlide(index);
    resetAutoSlide();
});

// Inicia mostrando la primera slide
showSlide(index);


// Función para pasar a la siguiente slide automáticamente
function autoSlide() {
    index++;
    showSlide(index);
}

// Configura el intervalo para cambiar de slide automáticamente cada 5 segundos
let slideInterval = setInterval(autoSlide, 5000);

// Función para reiniciar el intervalo cuando el usuario navega manualmente
function resetAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoSlide, 60000);
}



document.addEventListener('DOMContentLoaded', function() {
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('fade-in-up')) {
                    entry.target.classList.add('fadeInUp');
                } else if (entry.target.classList.contains('fade-in-left')) {
                    entry.target.classList.add('fadeInLeft');
                }
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Seleccionar y observar tarjetas en mission-vision-values
    const cards = document.querySelectorAll('#mission-vision-values .card');
    cards.forEach(card => {
        card.classList.add('animated', 'fade-in-up');
        observer.observe(card);
    });

    // Seleccionar y observar sección nosotros
    const nosotrosSection = document.querySelector('#nosotros');
    nosotrosSection.classList.add('animated', 'fade-in-up');
    observer.observe(nosotrosSection);

    // Seleccionar y observar carrusel en nuestros proyectos
    const carousel = document.querySelector('.carousel');
    carousel.classList.add('animated', 'fade-in-left');
    observer.observe(carousel);
});