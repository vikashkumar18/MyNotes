/**
 * @module SequentialSearch
 */
/**
 * searches an item among a list of items
 * @param  {Array} alist a list of primitive values
 * @param  {(String|Number)} item to be searched in array
 * @return {Boolean}
 * @example
 * // returns true
 * SequentialSearch([1, 3, 4], 4)
 */
function SequentialSearch(alist, item) {
  let pos = 0;
  let found = false;
  while (pos < alist.length && !found) {
    if (alist[pos] === item) {
      found = true;
    }
    ++pos; // eslint-disable-line no-plusplus
  }
  return found;
}

export default SequentialSearch;
