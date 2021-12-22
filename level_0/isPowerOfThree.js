//Реализуйте и экспортируйте по умолчанию функцию, которая определяет, является ли переданное число натуральной степенью тройки.

export default (num) => {
  if (num === 0) return false;
  if (num === 1) return true;
  for (let i = 1; i < 10; i += 1) {
    if (Math.pow(3, i) === num) return true;
  }
  return false;
};
