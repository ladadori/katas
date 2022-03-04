export default (rollLimit, rollDice) => {
    const rolls = [];
    let counter = 0;
    while (counter < rollLimit) {
      rolls.push(rollDice());
      counter += 1;
    }
    const histogram = rolls.reduce((acc, number) => {
      const counter = _.get(acc, number) + 1;
      return acc = { ...acc, [number]: counter };
    }, {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0
    });
    const keys = Object.keys(histogram);
    keys.map((key) => {
      if (histogram[key] === 0) {
        console.log(`${key}|`);
      }
      if (histogram[key] !== 0) {
        console.log(`${key}|${''.padStart(histogram[key], '#')} ${histogram[key]}`);
      }
    });
  };