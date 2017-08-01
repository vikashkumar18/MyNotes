import 'babel-polyfill';
/* eslint-disable no-param-reassign */
/**
 * @module Quick Sort
 */

const swap = (list, pos, nextPos) => {
  const temp = list[nextPos];
  list[nextPos] = list[pos];
  list[pos] = temp;
};

/* eslint-disable no-unused-vars */
/**
 * The key process in quickSort is partition(). Target of partitions is, given an array and an
 * element x of array as pivot, put x at its correct position in sorted array and put all smaller
 * elements (smaller than x) before x, and put all greater elements (greater than x) after x. All
 * this should be done in linear time.
 *
 * The logic is simple, we start from the leftmost element and keep track of index of smaller (or
 * equal to) elements as i. While traversing, if we find a smaller element, we swap current element
 * with arr[i]. Otherwise we ignore current element.
 * @function lomutoPartitioning
 * @param  {Array} list
 * @param  {Number} low
 * @param  {Number} high
 * @return {Array}
 */
const lomutoPartitioning = (list, low, high) => {
  let pos = low - 1;
  const pivot = list[high];
  for (let j = low; j <= high - 1; j++) {
    // its like starting at -1 and
    // placing all elements smaller than pivot at
    // beginning of the array
    if (list[j] <= pivot) {
      pos++;
      swap(list, pos, j);
    }
  }
  swap(list, pos + 1, high);
  return pos + 1;
};
/* eslint-enable no-unused-vars */

/**
 * Hoare’s Partition Scheme works by initializing two indexes that start at two ends, the two
 * indexes move toward each other until an inversion is (A smaller value on left side and greater
 * value on right side) found.
 * Hoare’s scheme is more efficient than Lomuto’s partition scheme because it does three times fewer
 * swaps on average, and it creates efficient partitions even when all values are equal.
 * @function hoarePartition
 * @param  {Array} list
 * @param  {Number} low
 * @param  {Number} high
 * @return {Array}
 */
const hoarePartition = (list, low, high) => {
  const pivot = list[high];
  let i = low;
  let j = high;
  while (true) {
    while (list[i] < pivot) {
      i++;
    }
    while (list[j] > pivot) {
      j--;
    }
    if (i >= j) {
      return j;
    }
    swap(list, i, j);
  }
};

/**
 *
 * @function quickSortHelper
 * @param  {Array} list
 * @param  {Number} low
 * @param  {Number} high
 * @return {Array}     sorted array
 */
const quickSortHelper = (list, low, high) => {
  if (low < high) {
    const splitPoint = hoarePartition(list, low, high);
    quickSortHelper(list, low, splitPoint - 1);
    quickSortHelper(list, splitPoint + 1, high);
  }
  return list;
};

/**
 * QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the
 * given array around the picked pivot.
 * @param {Array} list
 */
const QuickSort = list => {
  const newList = Object.assign([], list);
  return quickSortHelper(newList, 0, newList.length - 1);
};
/* eslint-enable no-param-reassign */
export default QuickSort;
