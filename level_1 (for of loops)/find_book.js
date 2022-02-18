export default (shelf, keywords) => {
    const keywordsArr = Object.entries(keywords);
    for (const book of shelf) {
      let flag = true;
      for (const [key, value] of keywordsArr) {
        if (book[key] !== value) {
          flag = false;
        }
      }
      if (flag === true) {
        return book;
      }
    }
    return null;
  }