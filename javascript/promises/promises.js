/*
  Promises

    Wrapper for async code that can chain callback functions after async code finishes.

    Callbacks are place on job queue, whose functions get called before functions on event queue.

      Promise.then(cb1).then(cb2).then(cb3)

      jobQueue = [cb1]
        executes cb1
        places cb2 on job queue
      jobQueue = [cb2]
        executes cb2
        places cb2 on job queue
      jobQueue = [cb3]
        executes cb3
*/

const executor = (resolve, reject) => {
  // do async stuff here (ex. setTimeout, API call, etc.)
  setTimeout(() => {
    // when async stuff finishes, call resolve() or reject()
    resolve(1);
  }, 1000);
};

new Promise(executor)
  .then((value) => {
    // callback is placed on job queue if promise resolved
    console.log(value);
    return value + 1;
  })
  .then((value) => {
    // callback is placed on job queue if promise resolved
    console.log(value);
    return value + 1;
  })
  .catch((value) => {
    // callback is placed on job queue if promise rejected
  });
