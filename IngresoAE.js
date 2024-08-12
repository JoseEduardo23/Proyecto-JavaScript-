document.addEventListener('DOMContentLoaded', function () {
    // Manejo del evento change del select
    document.getElementById("roles").addEventListener("change", function() {
        let selectVALUE = this.value;

        if (selectVALUE === "option1") {
            window.location.href = "IniciarS2.html";
        } else if (selectVALUE === "option2") {
            window.location.href = "IniciarS.html";
        }
    });

    // Manejo del evento keydown para el campo de búsqueda
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const query = searchInput.value.trim().toLowerCase();
            if (query === 'cursos') {
                window.location.href = 'CursosDisp.html';
            } else {
                window.location.href = 'PaginaNoEncontrada.html'; // Ajusta según tus necesidades
            }
        }
    });

    // Manejo del evento click del botón BR
    document.getElementById("BR").addEventListener("click", function () {
        window.location.href = "Registro.html";
    });
});