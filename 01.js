// (1) Сума чисел від відвідувача
(() => {
  let a = +prompt("Введіть перше число", "");
  let b = +prompt("Введіть друге число", "");
  alert(`Ось значення суми чисел: ${a + b}`);
})();

// (2) Як округлити 6.35
(() => {
  let num = 6.35;
  alert(Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(округлене) -> 6.4
})();

// (3) Введення числа з перевіркою
(() => {
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
})();

// (4) Нескінченний цикл — приклад
(() => {
  let i = 0;
  while (i != 10) {
    i += 0.2;
    alert(i); // демонструє проблему з 0.2 у двійковій системі
    if (i > 20) break; // додано, щоб не завис браузер
  }
})();

// (5) Випадкове дійсне число в діапазоні
(() => {
  function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }

  alert(getRandomValue(1, 10));
})();

// (6) Випадкове ціле число в діапазоні
(() => {
  function getRandomValue1(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  alert(getRandomValue1(3.3, 9.7));
})();
