// 1. Масиви: копія по посиланню
(() => {
  let fruits = ["Apples", "Pear", "Orange"];
  let shoppingCart = fruits;
  shoppingCart.push("Banana");
  alert(fruits.length); // 4
})();

// 2. Масив styles
(() => {
  let styles = ["Jazz", "Blues"];
  alert(styles.join(", "));
  styles.push("Rock-n-Roll");
  alert(styles.join(", "));
  styles[1] = "classics";
  alert(styles.join(", "));
  styles.shift();
  alert(styles.join(", "));
  styles.unshift("Rap", "Reggae");
  alert(styles.join(", "));
})();

// 3. this в методі масиву
(() => {
  let arr = ["a", "b"];
  arr.push(function () {
    alert(this);
  });
  arr[2](); // this → сам масив
})();

// 4. Ввід чисел та підсумок
(() => {
  function sumInput() {
    let arr = [];
    while (true) {
      let value = prompt("Введіть число:", "");
      if (value === null || value.trim() === "") {
        break;
      } else if (isFinite(value)) {
        arr.push(Number(value));
      }
    }
    let sum = 0;
    for (let value of arr) {
      sum += value;
    }
    return sum;
  }

  let result = sumInput();
  alert(`Сума чисел масиву: ${result}`);
})();

// 5. Максимальна сума підмасиву (алгоритм Кадане)
(() => {
  function getMaxSumArr(arr) {
    let currSum = 0;
    let maxSum = 0;

    for (let value of arr) {
      currSum += value;
      if (currSum > maxSum) {
        maxSum = currSum;
      } else if (currSum < 0) {
        currSum = 0;
      }
    }

    return maxSum;
  }

  let testCases = [
    [-1, 2, 3, -9],
    [2, -1, 2, 3, -9],
    [-1, 2, 3, -9, 11],
    [-2, -1, 1, 2],
    [100, -9, 2, -3, 5],
    [1, 2, 3],
    [-1, -2, -3],
  ];

  for (let arr of testCases) {
    let result = getMaxSumArr(arr);
    alert(`Масив: [${arr}] → max сума: ${result}`);
  }
})();
