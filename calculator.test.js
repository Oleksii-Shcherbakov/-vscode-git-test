// calculator.test.js

import { calc } from './calculator';

test('проверка операции сложения', () => {
  expect(calc('2 + 3')).toBe(5);
});

test('проверка операции вычитания', () => {
  expect(calc('5 - 3')).toBe(2);
});

test('проверка операции умножения', () => {
  expect(calc('4 * 3')).toBe(12);
});

test('проверка операции деления', () => {
  expect(calc('10 / 2')).toBe(5);
});

test('обработка некорректной строки', () => {
  expect(calc('abc')).toBe('Ошибка вычисления');
});

test('обработка передачи не строки', () => {
  expect(calc(123)).toBe('Ошибка вычисления');
});

