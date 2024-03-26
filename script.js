
const textArea = document.querySelector(".textArea");
const mensaje = document.querySelector(".mensaje");

function encriptar(stringEncriptado){

    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase(); // "toLowerCase": debe comenzar con letra minúscula

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function btnEncriptar() {
    const textoEncriptado  = encriptar(textArea.value);
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mensaje.value = textoEncriptado;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(mensaje.value);
    textArea.value = textoDesencriptado;
    mensaje.value = "";
    textArea.style.backgroundImage = "none";
}

function copiarTextoAlPortapapeles(texto) {
    // Crea un elemento de textarea temporal para copiar el texto
    var elementoTemporal = document.createElement("textarea");
    // Asigna el texto al elemento temporal
    elementoTemporal.value = texto;
    // Asegúrate de que el elemento temporal no sea visible
    elementoTemporal.style.position = "fixed";
    elementoTemporal.style.left = "-9999px";
    elementoTemporal.style.top = "-9999px";
    // Agrega el elemento temporal al DOM
    document.body.appendChild(elementoTemporal);
    // Selecciona el texto dentro del elemento temporal
    elementoTemporal.select();
    // Copia el texto seleccionado al portapapeles
    document.execCommand("copy");
    // Elimina el elemento temporal del DOM
    document.body.removeChild(elementoTemporal);
}

function btnCopiar(){
    const textoCopiado = mensaje.value;
    copiarTextoAlPortapapeles(textoCopiado);
    mensaje.value = "";
    mostrarMensaje();
}

function mostrarMensaje() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    cerrarMensaje();
}

function cerrarMensaje() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}