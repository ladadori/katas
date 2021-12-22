//Напишите функцию diff(), которая принимает два угла (integer), каждый от 0 до 360, и возвращает разницу между ними (наименьшую).

const diff = (a, b) => {
  const diff = Math.max(a, b) - Math.min(a, b);
  return diff > 180 ? 360 - diff : diff;
};
