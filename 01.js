// (1) Сума чисел від відвідувача

let a = +prompt("Введіть перше число", "");
let b = +prompt("Введіть друге число", "");

alert(`Ось значення суми чисел: ${a + b}`);

// (2) Як округлити 6.35
let num = 6.35;
alert(Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(округлене) -> 6.4

// 3

function readNumber() {
  let value;

  do {
    value = +prompt("Введи число:", "");
    if (value === null || value === "") return null;
  } while (!isFinite(value));
  return value;
}

let result = readNumber();
alert(result);

// 4
let i = 0;
while (i != 10) {
  i += 0.2; // нескінчений цикл бо дріб 0.2 = 1/5 що у двійковій системі це нескінчений запис
  alert(i);
}

// 5
function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

alert(getRandomValue(1, 10));

// 6
function getRandomValue1(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

alert(getRandomValue1(3.3, 9.7));
