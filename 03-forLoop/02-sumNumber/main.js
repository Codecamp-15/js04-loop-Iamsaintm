// ให้เขียนโค้ดเพื่อหาผลรวมของจำนวนเต็มตั้งแต่ 1 ถึง 100 ตามเงื่อนไขดังนี้

// - หาผลรวมตัวเลขทุกตัว
// - หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
// - หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)

let sum = 0;
let sumeven = 0;
let sumodd = 0;
let summod2 = 0;
let summod3 = 0;

for (let i = 1; i <= 100; i++) {
  sum = sum + i;
  for (let j = 2; j <= 2; j++) {
    if (i % 2 == 0) {
      sumeven += i;
      summod2 += i ** j;
    } else {
      sumodd += i;
    }
    if (i % 3 == 0) {
      summod3 += i ** j;
    }
  }
}
console.log(sum);
console.log(sumeven);
console.log(sumodd);
console.log(`${summod2 - summod3}`);
