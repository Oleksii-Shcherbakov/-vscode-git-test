// calculator.test.js

import { getSquaredArray, getOddNumbers } from './calculator';
import addNumbers from './calculator';

test('возводит в квадрат все элементы массива', () => {
  const inputArray = [1, 2, 3, 4];
  const expectedOutput = [1, 4, 9, 16];
  expect(getSquaredArray(inputArray)).toEqual(expectedOutput);
});

test('фильтрует нечетные числа', () => {
  const inputArray = [1, 2, 3, 4, 5];
  const expectedOutput = [1, 3, 5];
  expect(getOddNumbers(inputArray)).toEqual(expectedOutput);
});

test('возвращает сумму двух чисел', () => {
  const a = 5;
  const b = 7;
  const expectedSum = a + b;
  expect(addNumbers(a, b)).toBe(expectedSum);
});
