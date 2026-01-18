const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const projectTitle = document.getElementById('project-title');
const projectDescription = document.getElementById('project-description');

const projects = [
    {
        title: "Trabajos Realizados",
        description: "Mantenimiento de Naves Industriales, Diseño de Maquinas, Demolición, Reconstrucción, Obra Civil, Remodelación, Mantenimiento a Subestaciones."
    }
    // Agrega más proyectos aquí
];

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

