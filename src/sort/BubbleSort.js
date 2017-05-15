import 'babel-polyfill';

const swap = (list, pos, nextPos) => {
  const immutableList = Object.assign([], list);
  const temp = immutableList[nextPos];
  immutableList[nextPos] = immutableList[pos];
  immutableList[pos] = temp;
  return immutableList;
};
/**
 * Takes a list of values and returns a sorted list
 * @param {Array} list a collection of Number | String
 */
const BubbleSort = list => {
  let immutableList = Object.assign([], list);
  const length = immutableList.length;
  for (let i = 0; i < length; i += 1) {
    // j stands for the number of comparisins to be done
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
