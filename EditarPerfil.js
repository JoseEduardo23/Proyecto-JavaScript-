document.addEventListener('DOMContentLoaded', function () {
    const inputFotoPerfil = document.getElementById('inputFotoPerfil');
    const nombreCompleto = document.getElementById('nombreCompleto');
    const nombreUsuario = document.getElementById('nombreUsuario');
    const correoElectronico = document.getElementById('correoElectronico');
    const numeroTelefono = document.getElementById('numeroTelefono');
    const biografia = document.getElementById('biografia');
    const fotoPerfilImg = document.querySelector('.fotoPerfil img');
    const guardarBtn = document.querySelector('.accionesPerfil button[type="submit"]');
    const cancelarBtn = document.querySelector('.accionesPerfil button[type="reset"]');

    inputFotoPerfil.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                fotoPerfilImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    guardarBtn.addEventListener('click', function (event) {
        event.preventDefault(); 

        const profileData = {
            nombreCompleto: nombreCompleto.value,
            nombreUsuario: nombreUsuario.value,
            correoElectronico: correoElectronico.value,
            numeroTelefono: numeroTelefono.value,
            biografia: biografia.value
        };

        console.log('Datos del perfil guardados:', profileData);

        alert('Cambios guardados con éxito.');
    });

    cancelarBtn.addEventListener('click', function (event) {
        event.preventDefault(); 

        if (confirm('¿Estás seguro de que deseas cancelar? Se perderán los cambios.')) {
            nombreCompleto.value = '';
            nombreUsuario.value = '';
            correoElectronico.value = '';
            numeroTelefono.value = '';
            biografia.value = '';

            fotoPerfilImg.src = 'Estilos/IMG/perfilPlaceholder.png';
        }
    });
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
    document.getElementById("BR").addEventListener("click", function(){
        window.location.href = "Registro.html";
    })

    document.getElementById("edp1").addEventListener("click", function() {
        window.location.href = "EditarPerfil.html"; 
    });
    
});
