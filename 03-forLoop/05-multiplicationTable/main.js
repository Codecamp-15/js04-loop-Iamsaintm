// for (let i = 2; i <= 12; i++) {
//   for (let j = 1; j <= 12; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

let ct = "";
for (let i = 2; i <= 12; i++) {
  for (let j = 1; j <= 12; j++) {
    ct = ct + i + " x " + j + " = " + i * j + `\n`;
  }
}

console.log(ct);
