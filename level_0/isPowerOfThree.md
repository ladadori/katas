Реализуйте и экспортируйте по умолчанию функцию, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 1 – это нулевая степень (считаем ноль натуральным числом): 3^0, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

### Примеры:

```
isPowerOfThree(1); // true (3^0)
isPowerOfThree(2); // false
isPowerOfThree(9); // true (3^2)
```

### Решение учителя:

```
export default (num) => {
  let current = 1;
  while (current < num) {
    current *= 3;
  }

  return current === num;
};
```
### Решение id0ntmind

```
const isPowerOfThree = (num) => {
  if (num === 1) return true;
  if (num < 1) return false;
  const newNum = num/3;
  return isPowerOfThree(newNum);
}
export default isPowerOfThree;
```