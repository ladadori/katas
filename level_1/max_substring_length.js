/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
export default (string) => {
    if (string === '') {
      return 0;
    }
    const array = string.split('');
    let substring = [];
    const allSubstrings = [];
    for (let i = 0; i < array.length; i += 1) {
      for (let j = 0 + i; j < array.length; j += 1) {
        const curr = array[j];
        if (substring.indexOf(curr) === -1) { //&& curr !== prev
          substring.push(curr)
        } else {
          allSubstrings.push(substring.join(''));
          substring = [];
          break;
        }
      }
    }
    let substringLengthColl = [];
    for (const substring of allSubstrings) {
      substringLengthColl.push(substring.length);
    }
    const sortNums = (a, b) => a - b;
    const result = substringLengthColl.sort(sortNums);
    console.log(result);
    return result[result.length - 1];
  }
  // END