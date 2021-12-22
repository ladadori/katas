Напишите функцию diff(), которая принимает два угла (integer), каждый от 0 до 360, и возвращает разницу между ними.

Угол между лучами измеряется двумя способами:

![alt text](https://cdn2.hexlet.io/derivations/image/original/eyJpZCI6IjY4NDgxNTg0OTk0ZjQ1OWQ2MTY3ZGVhZTZjMzNhMGM4LnBuZyIsInN0b3JhZ2UiOiJjYWNoZSJ9?signature=94815362b0c31986f729c3cc3853f7ae7070ed31f06ce0eac5dc45a9ec7f0781)

Функция должна вернуть наименьшее значение.

### Примеры:

```
diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
diff(0, 180) === 180;
diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
diff(120, 280) === 160;
```

### Решение учителя:

```
const diff = (a, b) => {
  const angle = Math.abs(a - b);
  return Math.min(angle, 360 - angle);
};
```