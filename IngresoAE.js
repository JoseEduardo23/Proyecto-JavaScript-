document.getElementById("roles").addEventListener("change", function(){
    let selectVALUE = this.value;

    if (selectVALUE === "option1") {
        window.location.href = "IniciarS.html";
    }else if(selectVALUE === "option2"){
        window.location.href = "IniciarS.html";
    }
});
document.getElementById("BR").addEventListener("click", function (){
    window.location.href = "Registro.html";

});
