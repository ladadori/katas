### Задание

Реализуйте функцию `getLongestLength()` принимающую на вход строку и возвращающую длину максимальной последовательности из неповторяющихся символов. Подстрока может состоять из одного символа. Например в строке qweqrty, можно выделить следующие подстроки: qwe, weqrty. Самой длинной будет weqrty.

Экспортируйте функцию по умолчанию.

### Пример

```JavaScript
getLongestLength('abcdeef'); // 5
getLongestLength('jabjcdel'); // 7
getLongestLength(''); // 0
```

### Подсказки
чтобы получить индекс элемента в массиве, используйте метод `.indexOf()`

### Решение учителя

```JavaScript
// BEGIN
const getLongestLength = (str) => {
  let sequence = [];
  let maxLength = 0;

  // Проходимся по всем символам переданной строки.
  for (const char of str) {
    // Ищем в сформированной последовательности
    // позицию первого вхождения текущего символа.
    const index = sequence.indexOf(char);
    // Добавляем в последовательность текущий символ.
    sequence.push(char);
    if (index !== -1) {
      // Если символ в последовательности был найден,
      // значит в неё был добавлен повторяющийся символ.
      // Отсекаем все символы включая найденный.
      sequence = sequence.slice(index + 1);
    }
    // Получаем длину последовательности.
    const sequenceLength = sequence.length;
    if (sequenceLength > maxLength) {
      // Если длина последовательности больше чем максимальная,
      // устанавливаем новую максимальную длину.
      maxLength = sequenceLength;
    }
  }

  return maxLength;
};

export default getLongestLength;
// END
```