// (1) Переведіть перший символ у верхній регістр
(() => {
  function ucFirst(str) {
    if (!str) {
      //alert("Пусто");
      throw new Error("Incorrect string"); // Як тільки інтерпретатор
      //доходить до throw,виконання функції припиняється.
    } else {
      return str[0].toUpperCase() + str.slice(1);
    }
  }

  let str = prompt("Введи ім’я з великої:", "");
  let result = ucFirst(str);
  alert(result);
})();

// (2) Перевірка на спам
(() => {
  function checkSpam(str) {
    const formattedStr = str.toLowerCase();
    return formattedStr.includes("viagra") || formattedStr.includes("xxx");
  }

  let str = prompt("Введіть запит", "");

  if (checkSpam(str)) {
    alert("Спам !");
  } else {
    alert("Це не спам, Ура!");
  }
})();

// (3) Обрізання рядка до maxlength
(() => {
  function truncate(str, maxlength) {
    if (str.length > maxlength) {
      const truncated = str.slice(0, maxlength) + "...";
      return truncated;
    } else {
      return str;
    }
  }

  let str = prompt("Напишіть текст:", "");
  let maxlength = 10;
  let result = truncate(str, maxlength);
  alert(result);
})();

// (4) Витяг значення валюти
(() => {
  let str = "$120";

  function extractCurrencyValue(str) {
    Number(str.slice(1));
  }

  let result = extractCurrencyValue(str);
  alert(result);
  alert(extractCurrencyValue("$120") === 120);
})();
