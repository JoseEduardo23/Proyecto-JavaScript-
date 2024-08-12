document.addEventListener('DOMContentLoaded', function () {
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
        document.getElementById("edp1").addEventListener("click", function() {
            window.location.href = "EditarPerfil.html"; 
        });
    });