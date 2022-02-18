const findAllRanges = (array) => {
    if (array.length < 3) {
      return [];
    }
    const stringify = (range) => {
      const firstElement = range[0];
      const lastElement = range[range.length - 1];
      return `${firstElement}->${lastElement}`;
    }
    let range = [];
    const ranges = [];
    for (let i = 0; i < array.length; i += 1) {
      console.log(`current + 1 is ${array[i] + 1} and next is ${array[i + 1]}`);
      range.push(array[i]);
      if (array[i] + 1 !== array[i + 1]) {
        if (range.length > 1) {
          ranges.push(stringify(range));
        }
        range = [];
      }
    }
    return ranges;
  };
  
  export default findAllRanges;