const doubleItems = (row) => row.reduce((acc, item) => {
    acc.push(item, item);
    return acc;
  }, []);
  
  export default (array) => doubleItems(array).map((char) => doubleItems(char))