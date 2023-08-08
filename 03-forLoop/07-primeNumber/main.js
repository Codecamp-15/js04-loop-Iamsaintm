// let num = 0;
// for (let i = 2; i <= 10; i++) {
//   for (let j = 2; j <= 10; j++) {
//     if (i >= j && i / j == 1) {
//       console.log(i);
//     }
//   }
// }

for (let i = 2; i <= 100; i++) {
  let count = 0;
  for (let j = 2; j <= 100; j++) {
    if (i % j == 0) {
      count = count + 1;
    }
  }
  if (count > 1) {
    continue;
  } else {
    console.log(i);
  }
}
