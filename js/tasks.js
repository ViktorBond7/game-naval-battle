// Напиши функцію, яка приймає рядок і повертає його у зворотному порядку.
const reverseString = str => console.log(str.split('').reverse().join(''));
// reverseString('hello'); // "olleh"

// task 2
// Напиши функцію, яка перевіряє, чи є слово паліндромом.
const isPalindrome = (str = '') => {
  str = str.toLowerCase().trim();
  const newStr = str.split('').reverse().join('');
  console.log(str === newStr);
};

// isPalindrome('Level'); // true
// isPalindrome('test'); // false
/////////////////////////////////////////////////////////////////////////////
// task 3
// Унікальні значення в масиві
// З масиву чисел прибрати всі дублікати.
const unique = arr => console.log(Array.from(new Set(arr)));

// unique([1, 2, 2, 3, 4, 4, 5]); // [1,2,3,4,5]
////////////////////////////////////////////////////////////////////////////////
// task 4
// Анаграми
// Напиши функцію, яка перевіряє, чи є два рядки анаграмами.
const isAnagram = (str1, str2) => {
  const normalize = str => str.toLowerCase().split('').sort().join('');

  const newStr1 = normalize(str1);
  const newStr2 = normalize(str2);

  // console.log(newStr2 === newStr1);
};

isAnagram('listen', 'silent'); // true
isAnagram('hello', 'world'); // false
/////////////////////////////////////////////////////////////////////////////////
// task 5
// Перетвори багатовимірний масив у звичайний (без рекурсії можна через reduce).
const flatten1 = arr =>
  arr.reduce((acc, el) => acc.concat(Array.isArray(el) ? flatten(el) : el), []);
// flatten([1, [2, [3, 4]], 5]); // [1,2,3,4,5]

const flatten = arr => {
  let newArr = [];

  for (const el of arr) {
    console.log(el);

    if (Array.isArray(el)) {
      newArr.push(...flatten(el));
    } else {
      newArr.push(el);
    }
  }
  return newArr;
};
// console.log(flatten([1, [2, [3, 4]], 5]));

// Напиши функцію, яка приймає рядок і повертає об’єкт із підрахунком кількості кожної букви

const countLetters = str => {
  obj = {};
  for (const el of str) {
    obj[el] = (obj[el] || 0) + 1;
  }
  return obj;
};

// console.log(countLetters('hello'));
// { h:1, e:1, l:2, o:1 }

const people = [
  { name: 'Anna', age: 17 },
  { name: 'Oleh', age: 22 },
  { name: 'Marta', age: 19 },
];

const d = people.filter(item => item.age >= 18);
// console.log(d);

// результат: [{ name: "Oleh", age: 22 }, { name: "Marta", age: 19 }]

const isBalanced = str => {
  let balance = 0;

  for (const el of str) {
    if (el === '(') {
      balance++;
    } else if (el === ')') {
      balance--;
    }

    // якщо закрили більше, ніж відкрили — одразу false
    if (balance < 0) return false;
  }

  // якщо після проходу все зійшлося — true
  return balance === 0;
};

// console.log(isBalanced(')(()')); // true
// console.log(isBalanced('(()')); // false
// console.log(isBalanced('(()())()')); // true
// console.log(isBalanced('())(')); // false

const cleanArray = arr => arr.filter(el => el);

console.log(cleanArray([0, 1, false, 2, '', 3, null, 'hello']));

// [1,2,3,"hello"]
////////////////////////////////////////////////////////
// function debounce(fn, delay) {
//   let timeout;

//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => fn.apply(this, args), delay);
//   };
// }

// const log = debounce(() => console.log('Виконано'), 1000);

// log();
// log();
// log(); // буде тільки 1 виклик через 1 сек.

// function throttle(fn, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     const now = Date.now();
//     if (now - lastCall >= delay) {
//       lastCall = now;
//       fn.apply(this, args);
//     }
//   };
// }

// const logThrottle = throttle(() => console.log('Throttle!'), 1000);

// window.addEventListener('scroll', logThrottle);
///////////////////////////////////////////////////////////////////////

// Напиши функцію, яка розвертає порядок слів у реченні.

const reverseWords = str => {
  const d = str.split(' ').slice(-1, 0);
};

reverseWords('I love JavaScript');
// "JavaScript love I"
////////////////////////////////////////////////

// Видалити дублікати слів із рядка
const removeDuplicates = str => {
  str = str.split(' ');
  let arr = [];

  for (const el of str) {
    console.log(el);

    if (!arr.includes(el)) {
      arr.push(el);
    }
  }
  return arr.join(' ');
};

// console.log(removeDuplicates('this is is a test test string'));

// "this is a test string"

//////////////////////////////////////////
// Знайди елемент, який зустрічається найчастіше.
// const mostFrequent = arr => {
//   const obj = {};

//   for (const el of arr) {
//     obj[el] = (obj[el] || 0) + 1;
//   }
//   const val = Object.keys(obj);

//   const red = val.reduce(
//     (acc, el) => (obj[el] > acc ? obj[el] : acc),
//     [obj[0]]
//   );

//   console.log(red);
// };

const mostFrequent = arr => {
  const obj = {};

  for (const el of arr) {
    obj[el] = (obj[el] || 0) + 1;
  }
  const val = Object.keys(obj);

  const red = val.reduce(
    (acc, el) => (obj[el] > obj[acc] ? el : acc),
    [val[0]]
  );

  // console.log(red);
};

// console.log(mostFrequent([1, 2, 4, 2, 3, 3, 3, 4]));
// 3

// return obj[key] > obj[acc] ? key : acc;
// }, keys[0]);

////////////////////////////////////////////////////////
// Перетворення об’єкта в масив пар

const toPairs = obj => {
  return Object.entries(obj);
};

// console.log(toPairs({ a: 1, b: 2, c: 3 }));
// [["a",1], ["b",2], ["c",3]]

///////////////////////
// Перетворення масиву пар у об’єкт

// const fromPairs = arr => {
//   return Object.fromEntries(arr);
// };

// console.log(
//   fromPairs([
//     ['a', 1],
//     ['b', 2],
//     ['c', 3],
//   ])
// );

///////////////////////////////

// Перевірка унікальності символів у рядку
const isUnique = str => {
  console.log(new Set(str).length);

  return new Set(str).size === str.length;
};

// console.log(isUnique('abcde'));
// console.log(isUnique('aabc'));

// isUnique('abcde'); // true
// isUnique('aabc'); // false

///////////////////////////////
// Напиши функцію, яка розбиває масив на групи по n елементів.

const chunk = (arr, num) => {
  const newArr = [];

  for (let i = 0; i <= arr.length; i += num) {
    newArr.push(arr.slice(i, i + num));
  }
  return newArr;
};

// console.log(chunk([1, 2, 3, 4, 5], 2));
// [[1,2],[3,4],[5]]
///////////////////////////////////////////
// Напиши функцію, яка створює глибоку копію об’єкта (без structuredClone та lodash).

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  const copy = {};
  for (let key in obj) {
    copy[key] = deepClone(obj[key]);
  }
  return copy;
}

// const obj = { a: 1, b: { c: 2 } };
// const copy = deepClone(obj);
// copy.b.c = 99;
// console.log(obj.b.c); // 2

// const obja = { a: 1, b: { c: 2 } };
// const copys = deepClone(obja);
// copys.b.c = 99;
// console.log(obj.b.c); // 2

//////////////////////////////////////
// Знайди слово, яке зустрічається найчастіше у рядку.

const mostFrequentWord = str => {
  const arr = str.split(' ');
  const obj = {};
  for (const el of arr) {
    obj[el] = (obj[el] || 0) + 1;
  }
  const arrFromArr = Object.keys(obj);

  return arrFromArr.reduce(
    (acc, el) => (obj[el] > obj[acc] ? el : acc),
    arrFromArr[0]
  );
};

// console.log(mostFrequentWord('a this is a test this is only test a test a'));

// "this"
///////////////////////////////
// Напиши функцію для обчислення n-го числа Фібоначчі двома способами.
const fibonacci = num => {
  if (num === 0) return num;
  if (num === 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
};

// console.log(fibonacci(6));

// 8

/////////////////////////////////////
// Зроби функцію-лічильник, яка при кожному виклику збільшує значення на 1.

const createCounter = () => {
  let counter = 0;
  return function () {
    return (counter += 1);
  };
};

const counter = createCounter();
const counter1 = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// console.log(counter1());

// counter() // 1
// counter() // 2
/////////////////////////////////

// Зроби функцію, яка міняє місцями ключі та значення в об’єкті.
const invert = obj => {
  const objK = Object.keys(obj);
  const newObj = {};

  for (const el of objK) {
    newObj[obj[el]] = el;
  }
  return newObj;
};
// invert({ a: 1, b: 2, c: 3 });
// console.log(invert({ a: 1, b: 2, c: 3 }));

// {1: "a", 2: "b", 3: "c"}

///////////////////////////////////////
// Є масив функцій, які повертають Promise. Напиши функцію, яка виконує їх
// послідовно, а не паралельно.

///////////////////////////////////////
// Реалізуй функцію debounce(fn, delay), яка виконує fn тільки
// якщо між викликами пройшло не менше delay мс.
const debounce1 = (fn, delay) => {
  let time;

  return function (...args) {
    clearTimeout(time);

    return (time = setTimeout(() => fn.apply(this, args), delay));
  };
};

const fff = debounce1(() => console.log('hhhjhj'), 1000);

// console.log(fff());
// console.log(fff());
// console.log(fff());

function reverseStringManual(str) {
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    const el = str[i];
    result += el;
  }
  return result;
}

// console.log(reverseStringManual('hello')); // "olleh"
//////////////////////////////
async function runSequentially(tasks) {
  const results = [];
  for (let task of tasks) {
    results.push(await task());
  }

  return results;
}

// приклад:
// const tasks = [
//   () => new Promise(res => setTimeout(() => res(1), 500)),
//   () => new Promise(res => setTimeout(() => res(2), 300)),
//   () => new Promise(res => setTimeout(() => res(3), 100)),
// ];

// console.log(runSequentially(tasks).then(console.log));

// runSequentially(tasks).then(console.log);
// [1, 2, 3] (послідовно, а не паралельно)

// ........................................
// 1. FizzBuzz

// Напиши функцію, яка для чисел від 1 до n:

// виводить "Fizz", якщо число ділиться на 3,

// "Buzz", якщо на 5,

// "FizzBuzz", якщо на 3 і 5,

// інакше саме число.
const fizzBuzz = n => {
  if (n % 5 === 0 && n % 3 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
};

// console.log(fizzBuzz(15));
////////////////////////////////
// Дано об’єкт з довільною вкладеністю. Знайди максимальну глибину.

function maxDepth(obj) {
  if (typeof obj !== 'object' || obj === null) return 0;
  let depth = 0;
  for (let key in obj) {
    depth = Math.max(depth, maxDepth(obj[key]));
  }
  return depth + 1;
}

// console.log(maxDepth({ a: 1, b: { c: { d: 2 } } })); // 3

function firstUniqueChar(str) {
  let count = {};
  for (let ch of str) {
    count[ch] = (count[ch] || 0) + 1;
  }
  for (let ch of str) {
    if (count[ch] === 1) return ch;
  }
  return null;
}

// console.log(firstUniqueChar('swiss')); // "w"

// ....................
function sum(a) {
  let current = a;

  function inner(b) {
    if (b === undefined) return current;
    current += b;
    return inner;
  }

  return inner;
}

// console.log(sum(1)(2)(3)()); // 6

///////////////////////////////////////
// Порахувати кількість голосних у рядку
const countVowels = str => {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (const el of str) {
    if (vowels.includes(el)) {
      count++;
    }
  }
  return count;
};

// console.log(countVowels('Hello World'));

// countVowels('Hello World'); // 3
///////////////////////////////
// Напиши функцію, яка перевіряє, чи є число простим.
const isPrime = num => {
  if (num <= 1) return false; // 0, 1 і від’ємні не прості
  if (num === 2) return true; // 2 — просте
  console.log('Math.sqrt(num)', Math.sqrt(num));

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // знайшли дільник
    }
  }

  return true; // якщо нікого не знайшли — просте
};

// console.log(isPrime(2)); // true
// console.log(isPrime(11)); // true
// console.log(isPrime(15)); // false
// console.log(isPrime(1)); // false

const foo = async tasks => {
  const arr = [];
  for (const el of tasks) {
    const resalt = await el();
    arr.push(resalt);
  }
  return arr;
};

// const tasks = [
//   () => new Promise(resolve => setTimeout(() => resolve(1), 1000)),
//   () => new Promise(resolve => setTimeout(() => resolve(2), 5000)),
//   () => new Promise(resolve => setTimeout(() => resolve(3), 3000)),
// ];

// foo(tasks).then(ret => console.log(ret));

// const foo = async tasks => {
//   const arr = [];
//   for (const task of tasks) {
//     const result = await task(); // чекаємо завершення кожної обіцянки
//     arr.push(result);
//   }
//   return arr;
// };

// const tasks = [
//   () => new Promise(resolve => setTimeout(() => resolve(1), 500)),
//   () => new Promise(resolve => setTimeout(() => resolve(2), 300)),
//   () => new Promise(resolve => setTimeout(() => resolve(3), 100)),
// ];

// foo(tasks).then(ret => console.log(ret));
// // [1, 2, 3] — виконання ПО ЧЕРЗІ

const runTasks = async (
  tasks,
  { sequential = false, concurrency = Infinity } = {}
) => {
  // if (sequential) {
  //   // 🔹 Повністю послідовне виконання
  //   const results = [];
  //   for (const task of tasks) {
  //     results.push(await task());
  //   }
  //   return results;
  // }

  // if (concurrency === Infinity) {
  //   // 🔹 Повністю паралельне виконання
  //   return Promise.all(tasks.map(task => task()));
  // }

  // 🔹 Виконання з обмеженням паралельності
  // const results = [];
  // let currentIndex = 0;

  // // робітник (worker)
  // const worker = async () => {
  //   while (currentIndex < tasks.length) {
  //     const idx = currentIndex++;
  //     results[idx] = await tasks[idx]();
  //   }
  // };

  // // запускаємо воркерів = concurrency
  // const workers = Array.from(
  //   { length: Math.min(concurrency, tasks.length) },
  //   worker
  // );

  // console.log('workers', workers);

  // await Promise.all(workers);

  // return results;

  const results = [];
  let currentIndex = 0;

  const worker = async id => {
    while (currentIndex < tasks.length) {
      const idx = currentIndex++;
      console.log(`worker ${id} picked ${idx}`);
      try {
        const value = await tasks[idx]();
        console.log(`worker ${id} finished ${idx} -> ${value}`);
        results[idx] = value;
      } catch (err) {
        console.log(`worker ${id} failed ${idx}`, err);
        throw err; // або обробляємо помилку по-іншому
      }
    }
    console.log(`worker ${id} exiting`);
  };

  const workerCount = Math.min(concurrency, tasks.length);
  const workers = Array.from({ length: workerCount }, (_, i) => worker(i));
  console.log('workers (promises):', workers);
  await Promise.all(workers);
  return results;
};

// 👇 Тести
const tasks = [
  () => new Promise(resolve => setTimeout(() => resolve(1), 1000)),
  () => new Promise(resolve => setTimeout(() => resolve(2), 5000)),
  () => new Promise(resolve => setTimeout(() => resolve(3), 3000)),
  () => new Promise(resolve => setTimeout(() => resolve(4), 2000)),
  () => new Promise(resolve => setTimeout(() => resolve(5), 1500)),
];

// // 🔹 Послідовно
// runTasks(tasks, { sequential: true }).then(res =>
//   console.log('Sequential:', res)
// );

// // 🔹 Паралельно
// runTasks(tasks).then(res => console.log('Parallel:', res));

// 🔹 Обмеження паралельності = 2
// runTasks(tasks, { concurrency: 2 }).then(res =>
//   console.log('Concurrency=2:', res)
// );

// document.querySelectorAll('*').forEach(el => {
//   const listeners = getEventListeners(el);
//   if (Object.keys(listeners).length > 0) {
//     console.log(el, listeners);
//   }
// });
