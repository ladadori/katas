//Реализуйте и экспортируйте по умолчанию функцию, которая переворачивает цифры в переданном числе и возвращает новое число.

export default (number) => {
  const digits = number.toString().split("");
  const reverseDigits = [];
  let reverseIndex = 0;
  let digitsIndex = digits.length - 1;
  let loopLimit = 0;

  if (number < 0) {
    reverseDigits[reverseIndex] = "-";
    reverseIndex += 1;
    loopLimit = 1;
  }
  while (digitsIndex >= loopLimit) {
    reverseDigits[reverseIndex] = digits[digitsIndex];
    reverseIndex += 1;
    digitsIndex -= 1;
  }
  return Number(reverseDigits.join(""));
};
