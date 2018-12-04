
    const content = document.getElementById('contentResult');
   
    document.getElementById('btnCipher').addEventListener('click',
    (evento) => {evento.preventDefault();

       let textCipher = document.getElementById('CipherText').value;
                        document.getElementById("CipherText").value = "";
       let offset = document.getElementById('desplazamiento').value;
                        document.getElementById('desplazamiento').value= "";
       let resultado = cipher.encode(textCipher, offset);


        //conectando js con div en html
        const contentCipher = document.createElement('div');
        contentCipher.classList.add('contentStyle');
        content.appendChild(contentCipher);

         //crear elementos para visualizar texto cifrado
        const contentCiphP = document.createElement('p');
        contentCiphP.classList.add('texto');
        let cipherReady = document.createTextNode(resultado);
        contentCiphP.appendChild(cipherReady);
        contentCipher.appendChild(contentCiphP);


    });

 //DESCIFRANDO TEXTO CIFRADO
    const contentDes = document.getElementById('contentResult');
    document.getElementById('btnDescipher').addEventListener('click',
    
    (evento) => {
      evento.preventDefault();
      
      let textDescipher = document.getElementById('CipherText').value;
                      document.getElementById("CipherText").value = "";
      let offsetDes = document.getElementById('desplazamiento').value;
                   document.getElementById('desplazamiento').value= "";

      let resultadoDes = cipher.decode(textDescipher, offsetDes);
   

      //conectando js con div en html
        const contentCipher = document.createElement('div');
        contentCipher.classList.add('contentStyle');
        contentDes.appendChild(contentCipher);

    //crear elementos para visualizar texto cifrado
        const contentCiphP = document.createElement('p');
        contentCiphP.classList.add('texto');
        let cipherReady = document.createTextNode(resultadoDes);
        contentCiphP.appendChild(cipherReady);
        contentCipher.appendChild(contentCiphP);
        

    });