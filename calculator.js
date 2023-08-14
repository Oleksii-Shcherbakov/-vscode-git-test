//calculator.js

// Функция, возводящая в квадрат все элементы входящего массива чисел
export function getSquaredArray(arr) {
  return arr.map(num => num ** 2);
}

// Функция, фильтрующая нечетные числа во входящем массиве
export function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}

// Функция, возвращающая сумму двух чисел
export default function addNumbers(a, b) {
  return a + b;
}