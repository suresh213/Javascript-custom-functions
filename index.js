Array.prototype.mymap = function (callBack) {
  let resultArray = [];
  for (let i = 0; i < this.length; ++i) {
    let value = callBack(this[i]);
    resultArray.push(value);
  }
  return resultArray;
};

Array.prototype.myfilter = function (callBack) {
  let resultArray = [];
  for (let i = 0; i < this.length; ++i) {
    if (callBack(this[i])) {
      resultArray.push(this[i]);
    }
  }
  return resultArray;
};

Array.prototype.myforEach = function (callBack) {
  for (let i = 0; i < this.length; ++i) {
    callBack(this[i]);
  }
};

Array.prototype.myreduce = function (callBack, initialValue) {
  if (this.length == 0) {
    throw new Error('Array is empty');
  }

  let value = this[0],
    i = 1;

  if (initialValue) {
    value = initialValue;
    i = 0;
  }

  for (; i < this.length; i++) {
    value = callBack(value, this[i]);
  }
  return value;
};

let arr = [1, 2, 3, 4, 5];

const map = arr.mymap((i) => i * i);
console.log('Output for map : ', map);

console.log('Output for forEach : ');
arr.myforEach((i) => console.log(i));

const filter = arr.myfilter((i) => i != 4);
console.log('Output for filter : ', filter);

const reduce = arr.myreduce((initialValue, currentValue) =>
  Math.max(initialValue, currentValue)
);
console.log('Output for reduce : ', reduce);
