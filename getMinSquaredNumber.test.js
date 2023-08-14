// getMinSquaredNumber.test.js

import getMinSquaredNumber from './getMinSquaredNumber';

test('возвращает квадрат минимального по модулю числа', () => {
  const inputArray = [-777, 3, -2, 6, 45, -20];
  const expectedOutput = 4;
  expect(getMinSquaredNumber(inputArray)).toBe(expectedOutput);
});

test('вернуть null для пустого массива', () => {
  const inputArray = [];
  const expectedOutput = null;
  expect(getMinSquaredNumber(inputArray)).toBe(expectedOutput);
});

test('вернуть null для неправильного входного значения (строка)', () => {
  const inputArray = 'test';
  const expectedOutput = null;
  expect(getMinSquaredNumber(inputArray)).toBe(expectedOutput);
});
