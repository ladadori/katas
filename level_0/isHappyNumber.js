//Реализуйте и экспортируйте по умолчанию функцию, которая должна вернуть true,
//если число счастливое, и false, если нет.
//Количество итераций процесса поиска необходимо ограничить числом 10.
//Назовем счастливыми числами те, которые в результате ряда преобразований
//вида "сумма квадратов цифр" превратятся в единицу.

const sumOfSquareDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

// BEGIN (write your solution here)
const isHappyNumber = (num) => {
  let newNum = num;
  for (let i = 0; i <= 10; i += 1) {
    if (newNum === 1) return true;
    newNum = sumOfSquareDigits(newNum);
  }
  return false;
};

export default isHappyNumber;
// END
