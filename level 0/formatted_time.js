//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
//количество минут (прошедших с начала суток) и возвращает строку, являющуюся
//временем в формате чч:мм.
//Если количество минут содержит больше 24 часов (1 суток), то функция возвращает
//время, прошедшее с полуночи последних суток.

export default (totalMinuteCount) => {
    const minutesInHour = 60;
    const hoursInDay = 24;
    const minutesInDay = hoursInDay * minutesInHour;
  
    let hoursPassed = Math.floor((totalMinuteCount) / minutesInHour);
    let minutesPassed = totalMinuteCount - (minutesInHour * hoursPassed);
  
    (totalMinuteCount > minutesInDay) ?
    hoursPassed -= hoursInDay
    : hoursPassed;
  
    const hourCountFormatted = (hoursPassed < 10) ?
    `${0}${hoursPassed}`
    : `${hoursPassed}`;
    
    const minuteCountFormatted = minutesPassed < 10 ? `${0}${minutesPassed}` : `${minutesPassed}`;
    return `${hourCountFormatted}:${minuteCountFormatted}`;
  };