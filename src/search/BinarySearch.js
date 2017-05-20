/**
 * @module BinarySearch
 */
/**
 * Searches through a list of primitive items which is arranged in
 * ascending order
 * @param {Array} list array of items [1, 3, 5]
 * @param {Number|String} item item to find in the sorted array
 * @return {Number} pos position of the found item in array
 *
 * @example
 * // returns 0
 * BinarySearch([1, 3, 4, 5, 6, 21, 74, 101, 154, 299], 1)
 *
 * //returns 9
 * BinarySearch(['aa', 'bb', 'cbe', 'dbc', 'efg', 'hij', 'klm', 'nop', 'qrs', 'tuv'], 'tuv')
 */
function BinarySearch(list, item) {
  let start = 0;
  let end = list.length - 1;
  let pos = -1;
  while (start <= end) {
    const midpoint = Math.floor((start + end) / 2);
    const itemAtPos = list[midpoint];
    if (itemAtPos === item) {
      pos = midpoint + 1;
      break;
    } else if (itemAtPos > item) {
      end = midpoint - 1;
    } else {
      start = midpoint + 1;
    }
  }
  return pos;
}
export default BinarySearch;
