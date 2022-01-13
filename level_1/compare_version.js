export default (versionOne, versionTwo) => {
    const [majorOne, minorOne] = versionOne.split('.');
    const [majorTwo, minorTwo] = versionTwo.split('.');
    if (Math.sign(majorOne - majorTwo) === 0) {
      return Math.sign(minorOne - minorTwo);
    }
    return Math.sign(majorOne - majorTwo);
  };