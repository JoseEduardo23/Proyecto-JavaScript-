document.getElementById("BIn").addEventListener("click", function(event){
    event.preventDefault();

    let email1 = document.getElementById("Email").value.trim();
    let nombre = document.getElementById("Nombre").value.trim();
    let apellido = document.getElementById("Apellido").value.trim();
    let passw = document.getElementById("Password").value.trim();
    let cpassw = document.getElementById("Cpassword").value.trim();

    let mailerror = document.getElementById("Email-error"); 
    let nomberror = document.getElementById("Nombre-error");
    let apelerror = document.getElementById("Apellido-error");
    let paswerror = document.getElementById("Contraseña-error");
    let cpaserror = document.getElementById("Ccontraseña-error");

    let camposValidos = true;

    if (email1 === "") {
        mailerror.textContent = "*Complete el campo*";
        mailerror.classList.remove("hidden");
        camposValidos = false;
    } else {
        mailerror.classList.add("hidden");
    }

    if (nombre === "") {
        nomberror.textContent = "*Complete el campo*";
        nomberror.classList.remove("hidden");
        camposValidos = false;
    } else {
        nomberror.classList.add("hidden");
    }

    if (apellido === "") {
        apelerror.textContent = "*Complete el campo*";
        apelerror.classList.remove("hidden");
        camposValidos = false;
    } else {
        apelerror.classList.add("hidden");
    }

    if (passw === "" || cpassw === "") {
        paswerror.textContent = "*Complete el campo*";
        paswerror.classList.remove("hidden");
        cpaserror.textContent = "*Complete el campo*";
        cpaserror.classList.remove("hidden");
        camposValidos = false;
    } else if (passw !== cpassw) {
        cpaserror.textContent = "*La contraseña ingresada no es igual*";
        cpaserror.classList.remove("hidden");
        camposValidos = false;
    } else {
        paswerror.classList.add("hidden");
        cpaserror.classList.add("hidden");
    }

    if(camposValidos){
        window.location.href = "PaginaPrincipal.html";
        alert("Usuario Registrado correctamente");
    }
});
document.getElementById("Bcanc").addEventListener("click", function(){
    window.location.href = "IngresoAdmin.html";
})