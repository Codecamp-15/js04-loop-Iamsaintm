console.log("learn counting loop");

console.log("starting...");
// () = parenthesis = วงเล็บ
// {} = bracket = ปีกกา
// [] = square bracket = ก้ามปู

// for (let i = 0; i <= 20; i = i + 2) {
//   //   if (i % 2 == 0) console.log(i);
//   console.log(i);
// }

// EX2: FizzBuzz
// for (let i = 1; i <= 20; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// EX3: Skip Fizz
// for (let i = 1; i <= 20; i++) {
//   if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
//   else if (i % 3 == 0) continue;
//   else if (i % 5 == 0) console.log("Buzz");
//   else console.log(i);
// }

// EX3B:
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) console.log(i);
//   else continue; // update ค่า และเรื่มรัน loop รอบถัดไป
//   console.log("even");
// }

// EX4 : Concat String

// let str = "";

// for (let i = 1; i <= 10; i++) {
//   // Guard
//   if (i % 3 == 0) continue;

//   str += i;
//   // "" + i => "1"
//   // "1" + 2 => "12"
// }
// console.log(str);

// EX5 : remove vowel (a,e,i,o,u)

// let src = "codecamp";
// let res = ""; // cdcmp

// // src.length ==> 0
// // src[0] ===> c
// // src[1] ===> o

// for (let i = 0; i < src.length; i++) {
//   if (
//     src[i] != "a" &&
//     src[i] != "e" &&
//     src[i] != "i" &&
//     src[i] != "o" &&
//     src[i] != "u"
//   )
//     res = res + src[i];
//   else continue;
// }

// console.log(res);

// Advance : Nested Loop
// Multiplication table
for (let i = 2; i <= 12; i++) {
  for (let j = 1; j <= 12; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("\n");
}

console.log("end...");
