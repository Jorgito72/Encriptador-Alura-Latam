const listaMenu = document.querySelector(".lista_menu");


const botonEncriptar = document.getElementById("encripta");
const botonDesencriptar = document.getElementById("desencripta");
const botonCopiar = document.getElementById("copiar");

let divFinal=document.getElementById("div_final")
let placeHolderFinal = document.getElementById("placehold_final");
let textoFinal = document.getElementById("texto_final");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;
//funciones

function encriptar() {
    let textoEntrada = document.getElementById("texto_entrada").value;

    placeHolderFinal.style.display = "none";
    textoFinal.style.display = "block";
    botonCopiar.style.display="inline";
    textoFinal.value=textoEntrada +"Jorge";

    console.log(textoEntrada);
    // alert("Encriptando...");
}
function desencriptar() {
    let textoEntrada = document.getElementById("texto_entrada").value;
    console.log(textoEntrada);
    // alert("Desecriptando...");
}

function copiar() {

    console.log(textoFinal);
    let textoEntrada = document.querySelector("#texto_entrada");
    textoEntrada.value = textoFinal.value;
    console.log(textoEntrada);
    // alert("Copiando...");
}
