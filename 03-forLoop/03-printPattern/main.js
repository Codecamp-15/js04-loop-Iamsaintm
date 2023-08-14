// let a = "";
// for (let i = 1; i <= 4; i++) {
//   if (i <= 4) {
//     a = a + "*" + " ";
//   }
//   console.log(a);
// }

let a = "";
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4; j++) {
    if (j <= i) {
      a = a + "*" + " ";
    } else {
      a = a + `\n` + `\n`;
      j = 5;
    }
  }
}
console.log(a);
