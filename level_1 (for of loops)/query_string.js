export default (params) => {
    if (Object.keys(params).length === 0) {
      return '';
    }
    const unsorted = [];
    let sorted = [];
    const preconcated = [];
    const paramsArr = Object.entries(params);
    for (const [key, ] of paramsArr) {
      unsorted.push(key);
    }
    sorted = unsorted.sort();
    for (const key of sorted) {
      preconcated.push(`${key}=${params[key]}`);
    }
    
    const concated = preconcated.join('&');
    return concated;
  }