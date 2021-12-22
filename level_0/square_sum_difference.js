//Напишите функцию sumSquareDifference(), которая принимает аргумент n
//и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.

const sumSquareDifference = (n) => {
  const square = (n) => n * n;
  let sum = 0;
  let squareSum = 0;
  for (let i = 1; i <= n; i += 1) {
    sum += i;
    squareSum += square(i);
  }
  return square(sum) - squareSum;
};