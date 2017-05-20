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
 * the new item may move all the way to the front.
 *
 * The classic way to implement a priority queue is using a data structure
 * called a binary heap. A binary heap will allow us both enqueue
 * and dequeue items in O(log n).
 *
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
   * @function doSomething
   * @desc this does something
   * @memberof module:BinaryHeap
   * @instance
   */

  doSomething() {}
}
