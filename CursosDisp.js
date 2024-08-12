document.addEventListener('DOMContentLoaded', function () {
    const sliderContainers = document.querySelectorAll('.slider-container');

    sliderContainers.forEach(container => {
        let currentSlide = 0;
        const slider = container.querySelector('.slider');
        const slides = slider.querySelectorAll('img');
        const totalSlides = slides.length;

        function updateSlide() {
            const slideWidth = slides[0].clientWidth; // Obtener el ancho de una imagen
            slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }

        function moveSlide(n) {
            currentSlide += n;
            if (currentSlide >= totalSlides) {
                currentSlide = 0;
            } else if (currentSlide < 0) {
                currentSlide = totalSlides - 1;
            }
            updateSlide();
        }

        container.querySelector('.prev').addEventListener('click', function() {
            moveSlide(-1);
        });

        container.querySelector('.next').addEventListener('click', function() {
            moveSlide(1);
        });

        updateSlide();
    });

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const query = searchInput.value.trim().toLowerCase();
            if (query === 'Informacion' || query === "informacion") {
                window.location.href = "Informacion.html";
            } else {
                window.location.href = 'PaginaNoEncontrada.html'; 
            }
        }
    });

    document.getElementById("BR").addEventListener("click", function () {
        window.location.href = "Registro.html";
    });

    document.getElementById("BI").addEventListener("click", function () {
        console.log("Botón BI clickeado");
        window.location.href = "IngresoAdmin.html";
    });
    document.getElementById("C1c").addEventListener("click", function() {
        window.location.href = "Curso1.html";
    });
    document.getElementById("edp1").addEventListener("click", function() {
        window.location.href = "EditarPerfil.html"; 
    });
});