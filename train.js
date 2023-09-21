

//📌  D-Task: 

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.

// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
    this.lastActionTime = new Date();
  }

  qoldiq() {
    const currentTime = new Date();
    const timeDiff = (currentTime - this.lastActionTime) / 60000; // millisekundlarni daqiqaga aylantiramiz
    const hours = Math.floor(timeDiff / 60);
    const minutes = Math.floor(timeDiff % 60);
    return `hozir ${hours}:${minutes}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`;
  }

  sotish(product, quantity) {
    if (this[product] >= quantity) {
      this[product] -= quantity;
      this.lastActionTime = new Date();
      return `Sizga ${quantity} ${product} sotildi!`;
    } else {
      return `Tovar yetarli emas yoki tayyor emas!`;
    }
  }

  qabul(product, quantity) {
    this[product] += quantity;
    this.lastActionTime = new Date();
    return `${quantity} ${product} qabul qilindi!`;
  }
}

const shop = new Shop(4, 5, 2);
console.log(shop.qoldiq()); // Hozir 0:0da 4ta non, 5ta lagmon va 2ta cola mavjud!
console.log(shop.sotish('non', 3)); // Sizga 3 non sotildi!
console.log(shop.qabul('cola', 4)); // 4 cola qabul qilindi!
console.log(shop.qoldiq()); // Hozir 0:10da 1ta non, 5ta lagmon va 6ta cola mavjud!
