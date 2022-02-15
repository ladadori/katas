### Задание

Реализуйте и экспортируйте по умолчанию функцию, которая находит в массиве непрерывные возрастающие последовательности чисел и возвращает массив с их перечислением.

### Пример

```JavaScript
summaryRanges([]);
// []

summaryRanges([1]);
// []

summaryRanges([1, 2, 3]);
// ['1->3']

summaryRanges([0, 1, 2, 4, 5, 7]);
// ['0->2', '4->5']

summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5]);
// ['110->112', '-5->-4']

```
### Решение учителя

```JavaScript

const getRangeOfSequence = (sequence) => {
  const first = sequence[0];
  const last = sequence[sequence.length - 1];
  return `${first}->${last}`;
};

const summaryRanges = (numbers) => {
  const ranges = [];
  let sequence = [];

  for (let index = 0; index < numbers.length; index += 1) {
    const current = numbers[index];
    const next = numbers[index + 1];
    sequence.push(current);
    if (current + 1 !== next) {
      if (sequence.length > 1) {
        const range = getRangeOfSequence(sequence);
        ranges.push(range);
      }
      sequence = [];
    }
  }

  return ranges;
};

export default summaryRanges;

```