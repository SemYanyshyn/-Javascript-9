// 1. Конвертація валют
(() => {
  let amount;
  const grivna = 40;

  function convert(amount) {
    if (!isFinite(amount)) {
      return "Хибне значення";
    }
    return (amount *= grivna);
  }

  alert(convert(2));
})();

// 2. Реверс рядка
(() => {
  function reverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }

  alert(reverse("abc"));
})();

// 3. Сходи
(() => {
  function printStairs(n) {
    let line = "";
    for (let i = 1; i <= n; i++) {
      let char = "";
      for (let j = 0; j < i; j++) {
        char += "#";
      }
      line += char + "\n";
    }
    return line;
  }

  alert(printStairs(3));
})();

// 4. Сума діапазону
(() => {
  function sumRange(start, end) {
    let sum = 0;
    while (start <= end) {
      sum += start;
      start += 1;
    }
    return sum;
  }

  alert(sumRange(2, 4));
  alert(sumRange(-1, 3));
})();

// 5. Мінімум з трьох чисел — 2 способи
(() => {
  function min(a, b, c) {
    let sum = {
      first: a,
      second: b,
      third: c,
    };
    const key = Object.values(sum);
    let min = key[0];
    for (let num of key) {
      if (num < min) {
        min = num;
      }
    }
    return min;
  }

  alert(min(10, 5, 11));
  alert(min(3, 8, 4));
})();

(() => {
  function min(a, b, c) {
    let arr = [a, b, c];
    let min = arr[0];
    for (let num of arr) {
      if (num < min) {
        min = num;
      }
    }
    return min;
  }

  alert(min(10, 5, 11));
  alert(min(3, 8, 4));
})();

// 6. Перша й остання буква у верхньому регістрі
(() => {
  function firstAndLastToUpper(str) {
    if (str.length < 2) return str.toUpperCase();
    return (
      str[0].toUpperCase() +
      str.slice(1, -1) +
      str[str.length - 1].toUpperCase()
    );
  }

  alert(firstAndLastToUpper("abc"));
})();

// 7. Перевірка на ключові слова
(() => {
  function dfrontendCheck(str) {
    str = str.toLowerCase();
    return (
      str.includes("church") || str.includes("dfrontend") || str.includes("kek")
    );
  }

  alert(`Результат перевірки: ${dfrontendCheck("Hello DFrontend")}`);
  alert(`Результат перевірки: ${dfrontendCheck("lolkek")}`);
  alert(`Результат перевірки: ${dfrontendCheck("Hello")}`);
})();

// 8. Видалення повторюваних букв, зберігаючи регістр
(() => {
  function removeDuplicationLetters(str) {
    let newStr = [];
    let seen = [];
    let original = str;
    original = original.split("");
    str = str.toLowerCase();
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
      let LowerChar = str[i];
      let originalChar = original[i];
      if (!seen.includes(LowerChar)) {
        seen.push(LowerChar);
        newStr.push(originalChar);
      } else if (LowerChar == " ") {
        newStr.push(originalChar);
      }
    }
    return newStr.join("");
  }

  alert(removeDuplicationLetters("Hello I am Iron Man"));
})();
