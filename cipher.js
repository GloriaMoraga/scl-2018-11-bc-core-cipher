window.cipher = {
  encode: (textCipher , offset) => {
    let result='';
    for (let i=0; i < textCipher.length; i++){
         let asciiNum = textCipher.charCodeAt(i);
      if (asciiNum >= 32 && asciiNum <= 63) {
        result += String.fromCharCode(asciiNum);}
      else if (asciiNum >= 65 && asciiNum <= 90){
          let textReady = ((asciiNum - 65 + parseInt(offset)) % 26)+ 65;
          result += String.fromCharCode(textReady); 
         }
         else if  (asciiNum >= 97 && asciiNum <= 122 ){
          let textReadym = ((asciiNum - 97 + parseInt(offset)) % 26) + 97;
          result += String.fromCharCode(textReadym); 
         }
        
        }
        return result;
  },
  decode: (textDescipher, offsetDes) => {
    let desResult='';
    
    for (let i=0; i < textDescipher.length; i++){
      
      let asciiNumdes = textDescipher.charCodeAt(i);
      if (asciiNumdes >= 32 && asciiNumdes <= 63) {
        desResult += String.fromCharCode(asciiNumdes);
      }
     
       else if (asciiNumdes >= 65 && asciiNumdes <= 90) {
      let textdesReady = ((asciiNumdes - 90 - parseInt(offsetDes)) % 26) + 90;
      desResult += String.fromCharCode(textdesReady); 
      
    }
    else if  (asciiNumdes >= 97 && asciiNumdes <= 122 ){
      let textdesReadym = ((asciiNumdes - 122 - parseInt(offsetDes)) % 26) + 122;
      desResult += String.fromCharCode(textdesReadym); 
     }
    
  }
  return desResult;
  }
};
