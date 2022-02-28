Реализуйте и экспортируйте по умолчанию функцию, которая принимает изображение в виде двумерного массива и возвращает массив, увеличенный в два раза.

### Решение учителя:

```JavaScript
// BEGIN
const duplicateValues = (items) => items.flatMap((item) => [item, item]);

const enlargeArrayImage = (items) => {
  const horizontallyStretched = items.map(duplicateValues);
  return duplicateValues(horizontallyStretched);
};

export default enlargeArrayImage;
// END
```

### Примеры

```JavaScript
const arr = [
  ['*', '*', '*', '*'],
  ['*', ' ', ' ', '*'],
  ['*', ' ', ' ', '*'],
  ['*', '*', '*', '*'],
];
// ****
// *  *
// *  *
// ****
 
enlargeArrayImage(arr);
// ********
// ********
// **    **
// **    **
// **    **
// **    **
// ********
// ********

test('solution', () => {
  const arr1 = [
    ['*', '*', '*', '*'],
    ['*', ' ', ' ', '*'],
    ['*', ' ', ' ', '*'],
    ['*', '*', '*', '*'],
  ];

  const arr1Enlarged = [
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
    ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
    ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
    ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
  ];

  const arr2 = [
    [' ', ' ', '*', ' ', ' '],
    [' ', '*', ' ', '*', ' '],
    [' ', '*', ' ', '*', ' '],
    ['*', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', '*'],
    [' ', '*', ' ', '*', ' '],
    [' ', '*', ' ', '*', ' '],
    [' ', ' ', '*', ' ', ' '],
  ];

  const arr2Enlarged = [
    [' ', ' ', ' ', ' ', '*', '*', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '*', '*', ' ', ' ', ' ', ' '],
    [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
    [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
    [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
    [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
    ['*', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*', '*'],
    ['*', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*', '*'],
    ['*', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*', '*'],
    ['*', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*', '*'],
    [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
    [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
    [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
    [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
    [' ', ' ', ' ', ' ', '*', '*', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '*', '*', ' ', ' ', ' ', ' '],
  ];

  const arr3 = [
    ['@', '@'],
    ['@', '|'],
    ['—', '|'],
    ['@', '|'],
    ['@', '@'],
  ];

  const arr3Enlarged = [
    ['@', '@', '@', '@'],
    ['@', '@', '@', '@'],
    ['@', '@', '|', '|'],
    ['@', '@', '|', '|'],
    ['—', '—', '|', '|'],
    ['—', '—', '|', '|'],
    ['@', '@', '|', '|'],
    ['@', '@', '|', '|'],
    ['@', '@', '@', '@'],
    ['@', '@', '@', '@'],
  ];

  const arr4 = [
    ['x'],
  ];

  const arr4Enlarged = [
    ['x', 'x'],
    ['x', 'x'],
  ];
  ```