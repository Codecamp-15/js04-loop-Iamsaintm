let n = Number(prompt("Enter number"));
let count = 0;
if (n < 0) {
  n = -n;
}
while (n >= 1) {
  count++;
  n = n / 10;
}
console.log(count);
