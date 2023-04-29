const listaMenu = document.querySelector(".lista_menu");


const botonEncriptar = document.getElementById("encripta");
const botonDesencriptar = document.getElementById("desencripta");
const botonCopiar = document.getElementById("copiar");

let divFinal=document.getElementById("div_final")
let placeHolderFinal = document.getElementById("placehold_final");


let textoFinal = document.getElementById("texto_final");
let textoDesScrypt='';

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;


//funciones

function encriptar() {
    let textoEntrada = document.getElementById("texto_entrada").value;
    let textoEncriptado= textoEntrada.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    placeHolderFinal.style.display = "none";
    textoFinal.style.display = "block";
    botonCopiar.style.display="inline";

    textoFinal.value=textoEncriptado ;

    // console.log(textoEntrada);
    // console.log(textoEncriptado)
    // alert("Encriptando...");
}

function desencriptar() {
    textoFinal.value='';
    let textoEntrada = document.getElementById("texto_entrada").value;
   textoDesScrypt=textoEntrada.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
   textoFinal.value=textoDesScrypt;

    console.log(textoDesScrypt );

    
    // alert("Desecriptando...");
}

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function copiar() {

    console.log(textoFinal.value);
    let textoEntrada = document.querySelector("#texto_entrada");
    textoEntrada.value = textoFinal.value;
    // console.log(textoEntrada);
    // alert("Copiando...");
}
 //function encriptar (){
//     var texto = document.querySelector("#input-texto").value;
//     var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
//     document.querySelector(".text-input-salida").value = textoCifrado;
//     document.querySelector("#input-texto").value;
//     }


    
// var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;

// function desencriptar (){ var texto = document.querySelector("#input-texto").value; var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); document.querySelector(".text-input-salida").value = textoCifrado; document.querySelector("#input-texto").value;

// }

// var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;