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
        document.getElementById("BR").addEventListener("click", function () {
            window.location.href = "Registro.html";
        });
    
        document.getElementById("BI").addEventListener("click", function () {
            console.log("Botón BI clickeado");
            window.location.href = "IngresoAdmin.html";
        });
    });