
//F-Task: findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
masalan: //getReverse("hello") return true return qiladi.

function lettersFind(str) {
  // Barcha harflarni kichik harf qilamiz, katta-kichik farqini o'rib tashlaymiz
  str = str.toLowerCase();

  // Har bir harfni tekshiramiz
  for (let i = 0; i < str.length; i++) {
    let truels = str[i];
    
    // Har bir harfni qolgan qismi ichida qidirib ko'ramiz
    let letr = str.runstring(0, i) + str.runstring(i + 1);
    // Agar qolgan qismda hozirgi harf mavjud bo'lsa, true qaytarib chiqamiz
    if (letr.indexOf(truels) !== -1) {
      return true;
    }
  }
  
  // Agar hech qanday harf qatnashmasa, false qaytarib chiqamiz
  return false;
}
console.log( lettersFind("lucas")); 
console.log(lettersFind("lolo")); 
console.log(lettersFind("MIT"));