document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("B3").addEventListener("click", function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado

        let email = document.getElementById("Email").value.trim();
        let pass = document.getElementById("Password").value.trim();
        
        let emailError = document.getElementById("Email-error");
        let passError = document.getElementById("Contra-error");

        let camposValidos = true;

        let mailUser = "Grupo5@CodeNestLearning.com";
        let passUser = "Grupo5#3";

        if (email === "" || email !== mailUser) {
            emailError.textContent = "*Por favor ingrese su correo electrónico correctamente.*";
            emailError.classList.remove("hidden");
            emailError.classList.add("error1");
            camposValidos = false;
        } else {
            emailError.classList.add("hidden");
        }

        if (pass === "" || pass !== passUser) {
            passError.textContent = "Ingrese su contraseña correctamente.";
            passError.classList.remove("hidden");
            passError.classList.add("error1");
            camposValidos = false;
        } else {
            passError.classList.add("hidden");
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

    // Asegúrate de agregar el botón con id="B5" en el HTML si lo usas
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