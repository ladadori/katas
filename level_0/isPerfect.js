//Создайте функцию isPerfect(), которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.

const isPerfect = (num) => {
  if (num === 0) {
    return false;
  }

  const divisors = [];
  let divisorSum = 0;

  for (let i = 0; i < num; i += 1) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  for (let i = 0; i < divisors.length; i += 1) {
    divisorSum += divisors[i];
  }

  return num === divisorSum;
};
