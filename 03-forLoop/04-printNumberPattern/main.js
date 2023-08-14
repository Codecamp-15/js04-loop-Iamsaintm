// let a = "";
// for (let i = 1; i <= 8; i++) {
//   a = a + i + " ";
//   console.log(a);
// }

let a = "";
for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8; j++) {
    if (j <= i) {
      a = a + j + " ";
    } else {
      a = a + `\n` + `\n`;
      j = 9;
    }
  }
}
console.log(a);
