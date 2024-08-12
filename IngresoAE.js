document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("roles").addEventListener("change", function() {
        let selectVALUE = this.value;

        if (selectVALUE === "option1") {
            window.location.href = "IniciarS.html";
        } else if (selectVALUE === "option2") {
            window.location.href = "IniciarS2.html";
        }
    });

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const query = searchInput.value.trim().toLowerCase();
            if (query === 'cursos') {
                window.location.href = 'CursosDisp.html';
            } else {
                window.location.href = 'PaginaNoEncontrada.html';
            }
        }
    });

    document.getElementById("BR").addEventListener("click", function () {
        window.location.href = "Registro.html";
    });

    document.getElementById("edp1").addEventListener("click", function() {
        window.location.href = "EditarPerfil.html"; 
    });
});