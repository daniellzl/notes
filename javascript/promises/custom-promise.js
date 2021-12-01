/*
  CustomPromise class that imitates Promise class
*/

class CustomPromise {
  constructor(executor) {
    this.promiseState = "FULFILLED";
    this.thenCallbacks = [];
    this.catchCallbacks = [];
    executor(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(value) {
    this.promiseState = "FULFILLED";
    const recurseThenCallback = (i, value) => {
      if (i >= this.thenCallbacks.length) return;
      // setTimeout to place callback on event queue
      setTimeout(() => {
        const callback = this.thenCallbacks[i];
        const newValue = callback(value);
        recurseThenCallback(i + 1, newValue);
      });
    };
    recurseThenCallback(0, value);
  }

  reject(value) {
    this.state = "REJECTED";
    const recurseCatchCallback = (i, value) => {
      if (i >= this.catchCallbacks.length) return;
      // setTimeout to place callback on event queue
      setTimeout(() => {
        const callback = this.catchCallbacks[i];
        const newValue = callback(value);
        recurseCatchCallback(i + 1, newValue);
      });
    };
    recurseCatchCallback(0, value);
  }

  then(callback) {
    this.thenCallbacks.push(callback);
    return this;
  }

  catch(callback) {
    this.catchCallbacks.push(callback);
    return this;
  }
}

new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
})
  .then((num) => {
    console.log(num);
    return num + 1;
  })
  .then((num) => {
    console.log(num);
    return num + 1;
  })
  .then((num) => {
    console.log(num);
    return num + 1;
  });

console.log("hello");
