var palabra =""
    var palabra3 =""
    function desencriptar(){
        palabra = document.getElementById("textencript").value;
        palabra = palabra.toLowerCase();
        if (palabra == ""){
            alert("Primero inserte un texto para desencriptar!")
        }else{
            for(let x=1;x<=palabra.length;x++){
                palabra = palabra.replace("ober","o")
                palabra = palabra.replace("enter","e")
                palabra = palabra.replace("imes","i")
                palabra = palabra.replace("ai","a")
                palabra = palabra.replace("ufat","u")
            }
            document.getElementById("muneco").style.display = "none";
            document.getElementById("negrita").style.display = "none";
            document.getElementById("normal").style.display = "none";
            document.getElementById("textoencripdesc").innerHTML = palabra;
            document.getElementById("textoencripdesc").style.visibility = "visible";
            document.getElementById("copiar").style.visibility = "visible";
        }
    }
    
    function encriptar(){
        palabra3 = document.getElementById("textencript").value;
        palabra3 = palabra3.toLowerCase();
        if (palabra3 == ""){
            alert("Primero inserte un texto para encriptar!")
        }else{
            palabra3=palabra3.split('')
            var extension = palabra3.length
            for(let x=0;x<palabra3.length;x++){
                if(palabra3[x] == "o"){
                    palabra3[x] = "ober";
                }else if(palabra3[x] == 'e'){
                    palabra3[x] = 'enter'
                }else if(palabra3[x] == 'i'){
                    palabra3[x] = 'imes'
                }else if(palabra3[x] == 'a'){
                    palabra3[x] = 'ai'
                }else if(palabra3[x] == 'u'){
                    palabra3[x] = 'ufat'
                }  
            }
            palabra3 = palabra3.toString();
            for(let x=0;x<extension;x++){
                palabra3 = palabra3.replace(",","")
            }
            document.getElementById("muneco").style.display = "none";
            document.getElementById("negrita").style.display = "none";
            document.getElementById("normal").style.display = "none";
            document.getElementById("textoencripdesc").innerHTML = palabra3;
            document.getElementById("textoencripdesc").style.visibility = "visible";
            document.getElementById("copiar").style.visibility = "visible";
        }
    }

    function copiar(){
        var copy = document.querySelector("#textoencripdesc");
        copy.select();
        document.execCommand("copy");
        alert ("Texto copiado");
    }