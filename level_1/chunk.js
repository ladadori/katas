const makeChunks = (array, chunkLimit) => {
    const remainder = array.length % chunkLimit;
    const result = [];
    let chunk = [];
    for (let i = 0; i < array.length; i += 1) {
      if (chunk.length !== chunkLimit) {
        chunk.push(array[i]);
      }
      if (chunk.length === chunkLimit) {
        result.push(chunk);
        chunk = [];
      }
    }
    if (remainder !== 0) {
      const arrayTale = array.slice(-remainder);
      result.push(arrayTale);
    }
    console.log(result);
    return result;
  };
  
  export default makeChunks;