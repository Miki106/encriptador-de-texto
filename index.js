//capturamos las diferentes variables
var encriptar = document.querySelector(".encriptar");
var desencriptar = document.querySelector(".desencriptar");
var frase = document.querySelector(".frase-codificada");
var copiar = document.querySelector(".copiar");
var muneco = document.querySelector(".muneco");
var descr = document.querySelector(".descr-area");
var advetencia = document.querySelector(".div-advetencia");
var error = document.getElementById('iderror');
var botones = document.querySelector(".div-botones");
var area = document.querySelector(".text-area");
var fraseCodi = document.getElementById("fraseCodi");
var textoEncriptar = document.getElementById("Texto");



function ajustar() {
    frase.style.display = "flex";
    copiar.style.display = "flex";
    muneco.style.display = "none";
    descr.style.display = "none";
}

function valido() {
    error.style.color = '#28b423'
    error.style.rotate = "-360deg";
    error.style.fontSize = "1em";
    error.style.fontWeight = "0";
}

function invalido() {
    error.style.color = '#e42630';
    error.style.rotate = "360deg";
    error.style.fontSize = "1.5em";
    error.style.fontWeight = "400";
}

function textoError() {
    let texto = textoEncriptar.value;
    
    if (!texto) {
        fraseCodi.value = "Debe ingresar al menos un caracter!";
        fraseCodi.style.color = "#e42630";
        fraseCodi.style.fontSize = "1.4em";
        textoEncriptar.focus();
    } else {
        
        fraseCodi.value = "Error! Por favor ingresa solo letras minúsculas y sin acento";
        fraseCodi.style.color = "#e42630";
        fraseCodi.style.fontSize = "1.4em";
        textoEncriptar.focus();
    }
    return fraseCodi
}

function validar(inputValidar) {
    
    let isValid = false;
    
    let texto = inputValidar.value;
    
    const pattern = new RegExp("^[a-z\\s\\n\\ñ]+$");
    
    if (!texto) {
        isValid = false;
    } else {
        
        if (!pattern.test(texto)) {
            isValid = false;
        } else {
            
            isValid = true;
        }
    }
    
    if (!isValid) {
        invalido();
    } else {
        valido();
    }
    
    return isValid;
}
function mostrarEncriptado() {
    
    let texto = textoEncriptar.value;
    
    ajustar();
    
    const valido = validar(textoEncriptar);
    
    if (!valido) {
        textoError();
    } else {
        
        let textoEncriptado = [];
         
        if (texto.length) {
            
            fraseCodi.style.color = "#495057";
            for (let i = 0; i < texto.length; i++) {
                
                let codigo;
                
                if (texto.charAt(i) == "a") {
                    codigo = texto.charAt(i).replace(/a/g, 'ai');
                }
                else if (texto.charAt(i) == "e") {
                    codigo = texto.charAt(i).replace(/e/g, 'enter');
                }
                else if (texto.charAt(i) == "i") {
                    codigo = texto.charAt(i).replace(/i/g, 'imes');
                }
                else if (texto.charAt(i) == "o") {
                    codigo = texto.charAt(i).replace(/o/g, 'ober');
                }
                else if (texto.charAt(i) == "u") {
                    codigo = texto.charAt(i).replace(/u/g, 'ufat');
                } else {
                    
                    codigo = texto.charAt(i);
                }
                
                textoEncriptado.push(codigo)
                
                fraseCodi.value = textoEncriptado.join("");
            }
        }
    }
    
    textoEncriptar.value = "";
    
    resetCopiar();
}

function mostrarDesencriptar() {
    
    let textoEncrip = textoEncriptar.value;
    
    ajustar();
    
    const valido = validar(textoEncriptar);
    
    if (!valido) {
        textoError();
    } else {
        
        if (textoEncrip.length) {
            
            fraseCodi.style.color = "#495057";
             
            let textoDesEncrip = textoEncrip.replace(/enter/gi, "e").replace(/imes/gi, "i")
                .replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
            
            fraseCodi.value = textoDesEncrip;
        }
    }
    
    textoEncriptar.value = "";
    
    resetCopiar();
}

function copiarTexto() {
    if (fraseCodi.value == "") {
        alert("No hay nada que copiar!")
    } else {
        
        window.getSelection().removeAllRanges();
        
        fraseCodi.select();
        
        var res = document.execCommand('copy');
        
        if (res) {
            copiar.style.borderColor = '#28b423';
            copiar.style.boxShadow = '3px 3px 3px  #088c19';
            copiar.style.transform = 'scale(0.95)';
            alert("Texto copiado");
        }
    }
}

function resetCopiar() {
    copiar.style.borderColor = '#0a3871';
    copiar.style.boxShadow = 'none';
    copiar.style.transform = 'scale(1)';
}

encriptar.onclick = mostrarEncriptado;

desencriptar.onclick = mostrarDesencriptar;

copiar.onclick = copiarTexto;