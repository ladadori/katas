//"Счастливым" называют билет с номером, в котором сумма
//первой половины цифр равна сумме второй половины цифр.
//Номера могут быть произвольной длины, с единственным условием,
//что количество цифр всегда чётно, например: 33 или 2341 и так далее.

export default (ticketNumber) => {
  const ticketNumberToArray = ticketNumber.split("");
  const halfWayIndex = ticketNumberToArray.length / 2;
  let firstHalfSum = 0;
  let secondHalfSum = 0;
  for (let i = 0; i < halfWayIndex; i += 1) {
    const ticketNumber = Number(ticketNumberToArray[i]);
    firstHalfSum += ticketNumber;
  }
  for (let i = halfWayIndex; i < ticketNumberToArray.length; i += 1) {
    const ticketNumber = Number(ticketNumberToArray[i]);
    secondHalfSum += ticketNumber;
  }
  return firstHalfSum === secondHalfSum;
};
