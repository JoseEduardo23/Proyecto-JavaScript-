document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("B3").addEventListener("click", function (event) {
        event.preventDefault();

        let email = document.getElementById("Email").value.trim();
        let Pass = document.getElementById("Password").value.trim();
        
        let emailerror = document.getElementById("Email-error");
        let passerror = document.getElementById("Contra-error");

        let camposValidos = true;

        let Mailuser = "CodeNestLearning.com";
        let Passuser = "Grupo5#3";

        if (email === "" || email !== Mailuser) {
            emailerror.textContent = "*Por favor ingrese su correo electrónico correctamente.*";
            emailerror.classList.remove("hidden");
            emailerror.classList.add("error1");
            camposValidos = false;
        } else {
            emailerror.classList.add("hidden");
        }

        if (Pass === "" || Pass !== Passuser) {
            passerror.textContent = "Ingrese su contraseña correctamente.";
            passerror.classList.remove("hidden");
            passerror.classList.add("error1");
            camposValidos = false;
        } else {
            passerror.classList.add("hidden");
        }

        if (camposValidos) {
            window.location.href = "Gestiondecursos.html";
        }
    });

    document.getElementById("BR").addEventListener("click", function() {
        window.location.href = "Registro.html";
    });

    document.getElementById("B4").addEventListener("click", function () {
        window.location.href = "IngresoAdmin.html";
    });

    document.getElementById("edp1").addEventListener("click", function() {
        window.location.href = "EditarPerfil.html"; 
    });

    // Añadir la nueva función
    document.getElementById("B5").addEventListener("click", function() {
        window.location.href = "NuevaPagina.html";
    });

    // Función para el input de búsqueda
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
});