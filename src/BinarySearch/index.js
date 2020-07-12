function rank(value, array) {
  let lo = 0;
  let hi = array.length - 1;
  while (lo <= hi) {
    const mid = Math.round((lo + hi) / 2);
    if (array[mid] > value) {
      hi = mid - 1;
    } else if (array[mid] < value) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function main(value, array) {
  return rank(value, array);
}

const a = main(3, [1, 2, 3, 5]);
const b = main(1, [2, 3, 5]);
console.log(a, b);
