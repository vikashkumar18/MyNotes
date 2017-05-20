import 'babel-polyfill';

const swap = (list, pos, nextPos) => {
  const immutableList = Object.assign([], list);
  const temp = immutableList[nextPos];
  immutableList[nextPos] = immutableList[pos];
  immutableList[pos] = temp;
  return immutableList;
};
/**
 * @module ShortBubbleSort
 */
/**
* In particular, if during a pass there are no exchanges,
* then we know that the list must be sorted.
* A bubble sort can be modified to stop early if it finds that the list has become sorted.
* This means that for lists that require just a few passes,
* a bubble sort may have an advantage in that it will recognize the sorted list and stop.
 * @param {Array} list a collection of Number | String
 * @returns {Array} immutableList a collcetion of sorted Number | String
 */
const ShortBubbleSort = list => {
  let immutableList = Object.assign([], list);
  const length = immutableList.length;
  let exchange = true;
  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length - i - 1; j += 1) {
      if (immutableList[j] > immutableList[j + 1]) {
        exchange = true;
        immutableList = swap(immutableList, j, j + 1);
      }
    }
    if (!exchange) {
      break;
    } else {
      exchange = false;
    }
  }
  return immutableList;
};

export default ShortBubbleSort;
