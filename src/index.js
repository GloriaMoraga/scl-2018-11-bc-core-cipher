
let content = document.getElementById('contentResult');

   
    document.getElementById('btnCipher').addEventListener('click',
    (evento) => {evento.preventDefault();
       let textCipher = document.getElementById('CipherText').value;
                        document.getElementById("CipherText").value = "";
       let offset = document.getElementById('desplazamiento').value;                
       let resultado = cipher.encode(textCipher, offset); 
        const CipherTextDes = document.createElement('p');
        CipherTextDes.classList.add('texto');
        let cipherReadyDes = document.createTextNode(resultado);
        CipherTextDes.appendChild(cipherReadyDes);
        content.appendChild(cipherReadyDes);
      
       
        
        


    });

 //DESCIFRANDO TEXTO CIFRADO
    let contentDes = document.getElementById('contentResult');
    document.getElementById('btnDescipher').addEventListener('click',
     (evento) => {evento.preventDefault();
       
      
      let textDescipher = document.getElementById('CipherText').value;
                      document.getElementById("CipherText").value = "";
      let offsetDes = document.getElementById('desplazamiento').value;
                   document.getElementById('desplazamiento').value= "";

      let resultadoDes = cipher.decode(textDescipher, offsetDes);
   

      //crear elementos para visualizar texto cifrado
        const contentCiphP = document.createElement('p');
        contentCiphP.classList.add('textodes');
        let cipherReady = document.createTextNode(resultadoDes);
        contentCiphP.appendChild(cipherReady);
        contentDes.appendChild(contentCiphP);
        
        
        

    });


 //boton para copiar el mensaje de resultado
  document.getElementById("btnCopy").addEventListener('click',() => {
    
    let selectMessage = document.getElementById("contentResult");
    let range = document.createRange();
    let select = window.getSelection();
     select.removeAllRanges();
    range.selectNodeContents(selectMessage);
    select.addRange(range);
    document.execCommand("copy"); 

  });

 //boton para clearel mensaje de resultado
  document.getElementById("btnClear").addEventListener('click',() => {

 document.getElementById("contentResult").innerHTML = "";


});