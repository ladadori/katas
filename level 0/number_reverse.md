Реализуйте и экспортируйте по умолчанию функцию, которая переворачивает цифры в переданном числе и возвращает новое число.
Примеры:

```
reverseInt(13); // 31
reverseInt(-123); // -321
reverseInt(8900); // 98
```

Решение учителя:

```
const reverseInt = (num) => {
  const numAsStr = String(Math.abs(num));
  let reversedStr = '';

  for (let i = numAsStr.length - 1; i >= 0; i -= 1) {
    reversedStr += numAsStr[i];
  }
  const reversedModule = Number(reversedStr);

  return num < 0 ? -reversedModule : reversedModule;
};

export default reverseInt;
```
