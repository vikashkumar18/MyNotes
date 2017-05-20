import 'babel-polyfill';

const swap = (list, pos, nextPos) => {
  const immutableList = Object.assign([], list);
  const temp = immutableList[nextPos];
  immutableList[nextPos] = immutableList[pos];
  immutableList[pos] = temp;
  return immutableList;
};
/**
 * @module BubbleSort
 */

/**
 * Takes a list of values and returns a sorted list
 * @param {Array} list a collection of Number | String
 * @return {Array} immutableList sorted collection of Number | String
 *
 * @example
 * // returns [ 'aa', 'bb', 'cbe', 'dbc', 'efg', 'hij', 'klm', 'nop', 'qrs', 'tuv' ]
 * BubbleSort(['dbc', 'aa', 'hij', 'bb', 'cbe', 'nop', 'efg', 'qrs', 'tuv', 'klm']
 *
 * //returns [ 1, 3, 5, 7, 21, 30, 89, 99 ]
 * BubbleSort([30, 5, 21, 1, 3, 7, 89, 99]
 */
const BubbleSort = list => {
  let immutableList = Object.assign([], list);
  const length = immutableList.length;
  for (let i = 0; i < length; i += 1) {
    // j stands for the number of comparisons to be done
    // 1. in the first pass there are n items so (n-1) no of comparisons
    // will be done
    // 2. in the second pass the last item is already in place so n-1 items
    // are left to be sorted so (n-2) no of comparisons has to be done
    for (let j = 0; j < length - i - 1; j += 1) {
      if (immutableList[j] > immutableList[j + 1]) {
        immutableList = swap(immutableList, j, j + 1);
      }
    }
  }
  return immutableList;
};

export default BubbleSort;
