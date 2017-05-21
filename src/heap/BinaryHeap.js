import 'babel-polyfill';

/**
 * @module BinaryHeap
 */
/**
 * @class BinaryHeap
 * @classdesc One important variation of a queue is called a priority queue.
 * A priority queue acts like a queue in that you dequeue an item by removing
 * it from the front. However, in a priority queue the logical
 * order of items inside a queue is determined by their priority.
 * The highest priority items are at the front of the queue and the
 * lowest priority items are at the back.
 * Thus when you enqueue an item on a priority queue,
 * the new item may move all the way to the front.<br/>
 *<br/>
 * The classic way to implement a priority queue is using a data structure
 * called a binary heap. A binary heap will allow us both enqueue
 * and dequeue items in O(log n).
 *<br/>
 *
 * In our heap implementation we keep the tree balanced by creating a complete binary tree<br/>
 * Another interesting property of a complete tree is that we can represent it
 * using a single list. We
 * do not need to use nodes and references or even lists of lists. Because the tree is complete, the
 * left child of a parent (at position p) is the node that is found in position 2p in the list.
 * Similarly, the right child of the parent is at position 2p+1 in the list. To find the parent
 * of any node in the tree, we can simply use Javascript’s integer division. Given that a node is at
 * position nn in the list, the parent is at position n/2.
 * <br/>
 * <br/>
 * The binary heap has two common variations: the min heap,
 * in which the smallest key is always at the front,
 * and the max heap, in which the largest key value is always at the front.<br/>
 * BinaryHeap() creates a new, empty, binary heap.<br/>
 * insert(k) adds a new item to the heap.<br/>
 * findMin() returns the item with the minimum key value,
 * leaving item in the heap.<br/>
 * delMin() returns the item with the minimum key value, removing
 * the item from the heap.<br/>
 * isEmpty() returns true if the heap is empty, false otherwise.<br/>
 * size() returns the number of items in the heap.<br/>
 * buildHeap(list) builds a new heap from a list of keys.
 */

/**
 * method, which percolates a new item as far up in the tree as it needs to go to maintain the heap
 * property. Here is where our wasted element in heapList is important. Notice that we can compute
 * the parent of any node by using simple integer division.
 * @param  {Array} list prority queue
 * @param  {Number} posOfLastInsert position of last insert in the queue
 * @return {Array}  returns new array with element arranged according to priority
 */
const moveUp = (list, posOfLastInsert) => {
  let pos = posOfLastInsert;
  const copyList = Object.assign([], list);
  while (pos > 1) {
    const parentPos = Math.floor(pos / 2);
    const parent = copyList[parentPos];
    const child = copyList[pos];
    if (child < parent) {
      copyList[parentPos] = child;
      copyList[pos] = parent;
    }
    pos = Math.floor(pos / 2);
  }
  return copyList;
};

/**
 * this finds the minimum child between left and right node of a parent
 * and returns its position
 * @param  {Array} list heap list
 * @param  {Number} size size of the list not including 0
 * @param  {Number} pos  position of the parent node
 * @return {Number}      position of the child
 */
const minChildPos = (list, size, pos) => {
  /* eslint-disable no-mixed-operators */
  if (pos * 2 + 1 > size) {
    return pos * 2;
  }
  if (list[pos * 2] < list[pos * 2 + 1]) {
    return pos * 2;
  }
  return pos * 2 + 1;

  /* eslint-enable no-mixed-operators */
};

/**
 * Whenever an item is removed from the heap list the last priority item is moved
 * all the way to the top. The last empty item in the list is popped out and heap
 * size is decreased by 1.<br />
 * <br/>
 * Then the list is passed to this function which moves the last priroty option that is
 * at the front of the list to its correct position.
 * @param  {Array} list the binary heap list
 * @param  {Number} size size of the list
 * @param  {Number} pos  position where the least priority item is moved to
 * @return {Array}      a copy of the list
 */
const moveDown = (list, size, pos) => {
  let posOfInsert = pos;
  const copyList = Object.assign([], list);
  // the node has atleast one children
  while (posOfInsert * 2 <= size) {
    const mcPos = minChildPos(copyList, size, posOfInsert);
    if (copyList[posOfInsert] > copyList[mcPos]) {
      const temp = copyList[mcPos];
      copyList[mcPos] = copyList[posOfInsert];
      copyList[posOfInsert] = temp;
    }
    posOfInsert = mcPos;
  }
  return copyList;
};

class BinaryHeap {
  /**
   *  @function constructor
   *  @desc You will notice that an empty binary heap has a single zero as the
   *  first element of heapList and that this zero is not used, but is
   *  there so that simple integer division can be used in later methods
   *  @memberof module:BinaryHeap
   */
  constructor() {
    this.heapList = [0];
    this.currentSize = 0;
  }
  /**
   * @function insert
   * @desc inserts a new element to the queue and reshuffles the queue
   * to arrange it according to the priority
   * @memberof module:BinaryHeap
   * @instance
   */
  insert(elem) {
    this.heapList.push(elem);
    this.currentSize += 1;
    this.heapList = moveUp(this.heapList, this.currentSize);
  }
  /**
   * @function delMin
   * @desc returns the item with the minimum key value, removing
   * the item from the heap
   * @return {Number} value
   * @memberof module:BinaryHeap
   * @instance
   */
  delMin() {
    const value = this.heapList[1];
    this.heapList[1] = this.heapList[this.currentSize];
    this.currentSize -= 1;
    this.heapList.pop();
    this.heapList = moveDown(this.heapList, this.currentSize, 1);
    return value;
  }
  /**
   * @function buildHeap
   * @desc To finish our discussion of binary heaps, we will look at a method to build an entire
   * heap from a list of keys. The first method you might think of may be like the following. Given
   * a list of keys, you could easily build a heap by inserting each key one at a time. Since you
   * are starting with a list of one item, the list is sorted and you could use binary search to
   * find the right position to insert the next key at a cost of approximately O(log n)
   * operations. However, remember that inserting an item in the middle of the list may require
   * O(n) operations to shift the rest of the list over to make room for the new key. Therefore,
   * to insert n keys into the heap would require a total of O(n log n) operations. However,
   * if we start with an entire list then we can build the whole heap in O(n) operations.
   */
  buildHeap(list) {
    let i = Math.floor(list.length / 2);
    this.currentSize = list.length;
    this.heapList = [0].concat(list);
    while (i > 0) {
      this.heapList = moveDown(this.heapList, this.currentSize, i);
      i -= 1;
    }
    return this.heapList;
  }
}

export default BinaryHeap;
