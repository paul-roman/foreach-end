function promisify(array, elementCallback, thisArg) {
  return new Promise((resolve) => {
    if (!array.length) {
      resolve();
      return;
    }

    let counter = 0;
    const done = () => {
      counter++;
      if (counter === array.length)
        resolve();
    };
    array.forEach((value, index, array) => {
      elementCallback(value, done, index, array);
    }, thisArg);
  });
}

Object.assign(Array.prototype, {
  forEachEnd(elementCallback, endCallback, thisArg) {
    if (typeof endCallback !== 'function')
      return promisify(this, elementCallback, endCallback);

    if (!this.length) {
      endCallback();
      return;
    }

    let counter = 0;
    const done = () => {
      counter++;
      if (counter === this.length)
        endCallback();
    };
    this.forEach((value, index, array) => {
      elementCallback(value, done, index, array);
    }, thisArg);
  }
});
