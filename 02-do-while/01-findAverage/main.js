let number = "";
let isEmpty;
let isNan;
let notInteger;
sum = 0;
ct = 0;
avg = 0;
do {
  number = prompt("Please your number") || "";
  isEmpty = number.trim() === "";
  isNan = isNaN(number);
  notInteger = Number(number) < 1;
  if (!(isEmpty || isNan || notInteger)) {
    sum += Number(number);
    ct += 1;
  }
  avg = +sum / +ct;
} while (!(isEmpty || isNan || notInteger));

alert(`sum is ${sum} : avg is ${avg}`);
