// 1
/*
let amount;
const grivna = 40;

function convert(amount) {
  if (!isFinite(amount)) {
    return "Хибне значення";
  }
  return (amount *= grivna);
}

alert(convert(2));

// 2
function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

alert(reverse("abc"));
*/

// 3
/*
function printStairs(n) {
  let char = "";
  for (let i = 1; i <= n; i++) {
    char += "#".repeat(i) + "\n";
  }
  return char;
}

alert(printStairs(3));
*/

function printStairs(n) {
  let char = "";
  for (let i = 1; i <= n; i++) {
    let line = "#";
    for (let j = 1; j < i; j++) {
      line += "#";
    }
    char += line + "\n";
  }
  return char;
}

alert(printStairs(3));
