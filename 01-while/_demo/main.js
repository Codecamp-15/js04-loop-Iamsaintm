console.log("learn while loop");

// ประเภทของ Loop
// - Condition Loop ตัดสินใจว่าจะรันต่อไหม จาก Boolean
// - Counting Loop ตัดสินใจว่าจะรันต่อไหม จาก ตัวเลข
// - List Loop ตัดสินใจว่าจะรันต่อไหม จาก จำนวนของในรายการ

console.log("starting...");

// let i = 1;
// while (i <= 10) {
//   // loop block

//   //   if (i % 3 == 0) {
//   //     console.log(i);
//   //   }

//   if (i % 3 != 0) {
//     console.log(i);
//   }
//   i++;
// }

// FizzBuzz Problem
// Range : 1-20;
// divided by 3 : PRINT Fizz
// divided by 5 : PRINT Buzz
// divided by 3 and5 : PRINT FizzBuzz
// others : PRINT number

let i = 1;
// while (i <= 20) {
//   if (i % 5 == 0 && i % 3 == 0) {
//     console.log(`${i} : FizzBuzz`);
//   } else if (i % 5 == 0) {
//     console.log(`${i} : Buzz`);
//   } else if (i % 3 == 0) {
//     console.log(`${i} : Fizz`);
//   } else {
//     console.log(i);
//   }
//   i++;
// }

while (i <= 20) {
  i % 5 == 0 && i % 3 == 0
    ? console.log(`${i} : FizzBuzz`)
    : i % 5 == 0
    ? console.log(`${i} : Buzz`)
    : i % 3 == 0
    ? console.log(`${i} : Fizz`)
    : console.log(i);
  i++;
}
console.log("end...");
