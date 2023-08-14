// calculator.js

export function calc(expression) {
  try {
    return eval(expression);
  } catch (error) {
    return 'Ошибка вычисления';
  }
}
