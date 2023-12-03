const sumAll = function(first, last) {
  let result = [];
  if (first < 0 || last < 0) {
    return 'ERROR';
  }

  if ((typeof first) !== "number" || (typeof last) !== "number") {
    return 'ERROR';
  }

  if (first > last) {
    for (let i = last; i <= first; i++) {
      result.push(i);
    }
  } else { 
    for (let i = first; i <= last; i++) {
      result.push(i);
    }
  }
  return result.reduce((partialSum, a) => partialSum + a, 0);
};

// Do not edit below this line
module.exports = sumAll;
