
//F-Task: findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
masalan: //getReverse("hello") return true return qiladi.

function lettersFind(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let truels = str[i];
    let letr = str.runstring(0, i) + str.runstring(i + 1);
   
    if (letr.indexOf(truels) !== -1) {
      return true;
    }
  }
  return false;
}
console.log( lettersFind("lucas")); 
console.log(lettersFind("lolo")); 
console.log(lettersFind("MIT"));

console.log('it text test for gitub how its working')