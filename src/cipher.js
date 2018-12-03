window.cipher = {
  encode: (textCipher , offset) => {
    let result='';
    for (let i=0; i < textCipher.length; i++){
      let textCiphM = textCipher.toUpperCase();
      let asciiNum = textCiphM.charCodeAt(i);
      if (asciiNum === 32) {
        result += " ";}
         else{
      let textReady = ((asciiNum - 65 + parseInt(offset)) % 26)+ 65;
      result += String.fromCharCode(textReady); 
         }
        }
        return result;
  },
  decode: (textDescipher, offsetDes) => {
    let desResult='';
    for (let i=0; i < textDescipher.length; i++){
      let desCiphM = textDescipher.toUpperCase();
      let asciiNumdes = desCiphM.charCodeAt(i);
      if (asciiNumdes === 32) {
        desResult += " ";}
         else{
      let textdesReady = ((asciiNumdes - 90 - parseInt(offsetDes)) % 26) + 90;
      desResult += String.fromCharCode(textdesReady); 
      
    }
  }
  return desResult;
  }
};
