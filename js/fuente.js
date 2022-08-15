    function mostrar(){
        if(document.getElementById("salida").value!=""){
            document.getElementById("mostrar").style.display="block"
            document.getElementById("copy").style.display="block";    
        }
        if(document.getElementById("salida").value===""){
            document.getElementById("mostrar").style.display="none";
            document.getElementById("copy").style.display="none";  
        }
    }
    function acentos(cadena){
        return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9 ]/g,"");  
    }
    function copiar(){
        navigator.clipboard.writeText(document.getElementById("salida").value); return false;
    }
    let llaves=["e","i","a","o","u","enter","imes","ai","ober","ufat"];
    let salida=document.getElementById("salida");
    let entrada=document.getElementById("entrada");
    entrada.addEventListener("keyup", e=>{
        entrada.value=acentos(entrada.value.toLowerCase());
    });
    let botonEncriptar=document.getElementById("enc");
    let botonDes=document.getElementById("desc");
    let botonCopiar=document.getElementById("copy");

    function encriptar(){
        salida.value=entrada.value;
        for(let x=0;x<5;x++){
            salida.value=salida.value.replaceAll(llaves[x],llaves[x+5]);
        }
        mostrar();
        return false;
    }
    function desencriptar(){
        salida.value=entrada.value;
        for(let x=4;x>=0;x--){
            salida.value=salida.value.replaceAll(llaves[x+5],llaves[x]);
        }
        mostrar(); 
        return false;
    }
    botonEncriptar.onclick=encriptar; 
    botonDes.onclick=desencriptar;
    botonCopiar.onclick=copiar;