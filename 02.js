// (1) Переведіть перший символ у верхній регістр
/*
function ucFirst(str) {
  if (str == null || str == "") {
    alert("Пусто");
    return;
  } else {
    return str[0].toUpperCase() + str.slice(1); // str.slice(1) все після 1 символу
  }
}

let str = prompt("Введи імя з великої:", "");
let result = ucFirst(str);
alert(result);

// 2
function checkSpam(str) {
  str = str.toLowerCase();
  return str.includes("viagra") || str.includes("xxx");
}

let str = prompt("Введіть запит", "");

if (checkSpam(str)) {
  alert("Спам !");
} else {
  alert("Це не спам, Ура!");
}

// 3
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return (str = str.slice(0, 10) + "...");
  } else {
    return str;
  }
}

let str = prompt("Напишіть текст:", "");
let maxlength = 10;

let result = truncate(str, maxlength);
alert(result);

// 4
let str = "$120";

function extractCurrencyValue(str) {
  return (str = +"" + Number(str.slice(1)));
}

let result = extractCurrencyValue(str);
alert(result);
alert(extractCurrencyValue("$120") === 120);
*/
