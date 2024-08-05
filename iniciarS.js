document.getElementById("B3").addEventListener("click", function(event){
    event.preventDefault();  

    let email = document.getElementById("Email").value.trim();
    let Pass = document.getElementById("Password").value.trim();
    
    let emailerror = document.getElementById("Email-error");
    let passerror = document.getElementById("Contra-error");

    let camposValidos = true;

    let Mailuser = "joselincango73@gmail.com";
    let Passuser = "j.eduardo23";


    if(email === "" || email !== Mailuser){
        emailerror.textContent = "*Por favor ingrese su correo electrónico correctamente.*";
        emailerror.classList.remove("hidden");
        emailerror.classList.add("error1");
        camposValidos = false;
    }else{
        emailerror.classList.add("hidden");
    }
    if (Pass === "" || Pass !== Passuser) {
        passerror.textContent = "Ingrese su contraseña correctamente.";
        passerror.classList.remove("hidden");
        passerror.classList.add("error1");
        camposValidos = false;
    }else{
        passerror.classList.add("hidden");
    }
    if (camposValidos) {
        window.location.href = "PaginaPrincipal.html";
    }
});