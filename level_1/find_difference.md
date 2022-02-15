Иногда в программировании возникает задача поиска разницы между двумя наборами данных, такими как объекты. Например, при поиске различий в json файлах. Для этого даже существуют специальные сервисы, например, http://www.jsondiff.com/ (попробуйте нажать на ссылку sample data и затем кнопку Compare).

### Задача

Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает два объекта и возвращает результат сравнения в виде объекта. Ключами результирующего объекта будут все ключи из двух входящих объектов, а значением строка с описанием отличий: added, deleted, changed или unchanged.

**Возможные значения:**

added — ключ отсутствовал в первом объекте, но был добавлен во второй
deleted — ключ был в первом объекте, но отсутствует во втором
changed — ключ присутствовал и в первом и во втором объектах, но значения отличаются
unchanged — ключ присутствовал и в первом и во втором объектах с одинаковыми значениями
import genDiff from './diffGenerator.js';
 
```JavaScript
genDiff(
  { one: 'eon', two: 'two', four: true },
  { two: 'own', zero: 4, four: true },
);
// {
//   one: 'deleted',
//   two: 'changed',
//   four: 'unchanged',
//   zero: 'added',
// }
```

### Подсказки

Фрагмент этой задачи разбирается в докладе "Ментальное программирование" (15:30) https://www.youtube.com/watch?v=vkUTX1hruF8

### Решение учителя

```JavaScript
const genDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2); // https://youtu.be/vkUTX1hruF8?t=929

  const result = {};
  for (const key of keys) {
    if (!Object.hasOwn(data1, key)) {
      result[key] = 'added';
    } else if (!Object.hasOwn(data2, key)) {
      result[key] = 'deleted';
    } else if (data1[key] !== data2[key]) {
      result[key] = 'changed';
    } else {
      result[key] = 'unchanged';
    }
  }

  return result;
};

export default genDiff;
```