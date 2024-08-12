document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("B5").addEventListener("click", function (event) {
        event.preventDefault(); 

        let email1 = document.getElementById("Email1").value.trim();
        let pass1 = document.getElementById("Password1").value.trim();
        
        let emailError1 = document.getElementById("Email-error1");
        let passError1 = document.getElementById("Contra-error1");

        let camposValidos = true;

        let mailUser1 = "Grupo5@CodeNestLearning.com";
        let passUser1 = "Grupo5#3";

        if (email1 === "" || email1 !== mailUser1) {
            emailError1.textContent = "*Por favor ingrese su correo electrónico correctamente.*";
            emailError1.classList.remove("hidden");
            emailError1.classList.add("error1");
            camposValidos = false;
        } else {
            emailError1.classList.add("hidden");
        }

        if (pass1 === "" || pass1 !== passUser1) {
            passError1.textContent = "Ingrese su contraseña correctamente.";
            passError1.classList.remove("hidden");
            passError1.classList.add("error1");
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