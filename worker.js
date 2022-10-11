onmessage = function (message) {
  let sum = 0;
  for (let index = 0; index < 10000000000000; index++) {
    sum += index;
  }
  ok=
  this.postMessage(sum);
};
