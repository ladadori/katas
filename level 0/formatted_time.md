Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч:мм. Если количество минут содержит больше 24 часов (1 суток), то функция возвращает время, прошедшее с полуночи последних суток.

### Примеры:

```

formattedTime(5); // 00:05
formattedTime(15); // 00:15
formattedTime(60); // 01:00
formattedTime(67); // 01:07
formattedTime(175); // 02:55
formattedTime(600); // 10:00
formattedTime(754); // 12:34
formattedTime(1504); // 01:04
```
### Подсказки:

- Используйте функцию Math.floor(number) для округления до нижней границы.

### Решение учителя:

```
export default (rawMinutes) => {
  const hours = Math.floor((rawMinutes / 60) % 24);
  const formattedHours = hours >= 10 ? hours : `0${hours}`;

  const minutes = rawMinutes % 60;
  const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;

  return `${formattedHours}:${formattedMinutes}`;
};
```
