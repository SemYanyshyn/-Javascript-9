// 1
/*
let user = {}; // дужки об'єкта — це лише для оголошення властивостей,
// а не для виконання інструкцій (типу console.log, delete, чи переприсвоєння).
// console.log(user) виконується після всіх змін
user.name = "Іван";
user.surname = "Сміт";
console.log(user);
user.name = "Петро";
console.log(user);
delete user.name;
console.log(user);


// 2
// 1 варіант
function isEmpty(object1) {
  const keys1 = Object.keys(object1);
  if (keys1.length === 0) {
    return true;
  } else {
    return false;
  }
}

const obj1 = {
  name: "Феодор",
  age: 28,
};

alert(isEmpty(obj1));

// 2 варіант
function isEmpty(object1) {
  for (let key in object1) {
    return false;
  }
  return true;
}

const obj = {
  name: "Феодор",
  age: 28,
};

alert(isEmpty(obj));

// 3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function calcSalary(sum) {
  let sum1 = 0;
  const keys = Object.keys(sum);
  if (keys.length === 0) {
    sum1 = 0;
  }
  for (let key in sum) { //key буде спочатку "John", потім "Ann", потім "Pete".
    sum1 += sum[key]; // sum[key] — це доступ до значення по цьому ключу (тобто зарплата).
  }
  return sum1;
}

alert(calcSalary(salaries));

// додаткове
let salaries = {
  name: { John: 100, Ann: 160, Pete: 130 },
};

function calcSalary(sum) {
  let sum1 = 0;
  const keys = Object.keys(sum);
  if (keys.length === 0) {
    sum1 = 0;
  }
  for (let key in sum.name) {
    sum1 += sum.name[key];
  }
  return sum1;
}

alert(calcSalary(salaries));
*/
