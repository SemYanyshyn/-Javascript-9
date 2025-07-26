// 1. Робота з обʼєктом user
(() => {
  let user = {};
  user.name = "Іван";
  user.surname = "Сміт";
  console.log(user);
  user.name = "Петро";
  console.log(user);
  delete user.name;
  console.log(user);
})();

// 2. isEmpty — варіант 1 (через Object.keys)
(() => {
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
})();

// 2. isEmpty — варіант 2 (через for...in)
(() => {
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
})();

// 3. calcSalary — звичайний обʼєкт
(() => {
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
  };

  function calcSalary(data) {
    let totalSalary = 0;
    for (let key in data) {
      totalSalary += data[key];
    }
    return totalSalary;
  }

  alert(calcSalary(salaries));
})();

// 3 (додаткове). calcSalary — вкладений обʼєкт
(() => {
  let salaries = {
    name: {
      John: 100,
      Ann: 160,
      Pete: 130,
    },
  };

  function calcSalary(data) {
    let totalSalary = 0;
    for (let key in data.name) {
      totalSalary += data.name[key];
    }
    return totalSalary;
  }

  alert(calcSalary(salaries));
})();

// 4. Помножити числові значення в обʼєкті
(() => {
  let menu = { width: 200, height: 300, title: "Моє меню" };

  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "number") {
        obj[key] *= 2;
      }
    }
    return obj;
  }

  alert(JSON.stringify(multiplyNumeric(menu)));
})();
