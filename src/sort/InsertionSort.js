import 'babel-polyfill';

/**
 * @module InsertionSort
 */

/**
 * Takes a list of values and returns a sorted list.
 * It always maintains a sorted sublist in the lower positions of the list. Each new item is then
 * “inserted” back into the previous sublist such that the sorted sublist is one item larger.
 * @param {Array} list a collection of Number | String
 * @return {Array} immutableList sorted collection of Number | String
 *
 * @example
 * // returns [ 'aa', 'bb', 'cbe', 'dbc', 'efg', 'hij', 'klm', 'nop', 'qrs', 'tuv' ]
 * InsertionSort(['dbc', 'aa', 'hij', 'bb', 'cbe', 'nop', 'efg', 'qrs', 'tuv', 'klm']
 *
 * //returns [ 1, 3, 5, 7, 21, 30, 89, 99 ]
 * InsertionSort([30, 5, 21, 1, 3, 7, 89, 99]
 */
const InsertionSort = list => {
  const listCopy = Object.assign([], list);
  for (let i = 0; i < listCopy.length; ++i) {
    const value = listCopy[i];
    let position = i;

    while (position > 0 && listCopy[position - 1] > value) {
      listCopy[position] = listCopy[position - 1];
      position -= 1;
    }
    listCopy[position] = value;
  }
  return listCopy;
};

export default InsertionSort;
