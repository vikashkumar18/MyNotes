import SequentialSearch from './src/search/SequentialSearch';
import BinarySearch from './src/search/BinarySearch';
import BubbleSort from './src/sort/BubbleSort';
import ShortBubbleSort from './src/sort/ShortBubbleSort';
import BinaryTree from './src/tree/BinaryTree';
import buildParseTree from './src/tree/buildParseTree';
import mirrorTree from './src/tree/mirrorTree';
import evaluateTree from './src/tree/evaluateTree';
import preOrderTraversal from './src/tree/preOrderTraversal';
import inOrderTraversal from './src/tree/inOrderTraversal';
import postOrderTraversal from './src/tree/postOrderTraversal';
import BinaryHeap from './src/heap/BinaryHeap';

console.log('/***Sequential Search***/');
console.log(SequentialSearch([1, 3, 4], 4));
console.log('/***Sequential Search***/');
console.log('/***Binary Search***/');
console.log(BinarySearch([1, 3, 4, 5, 6, 21, 74, 101, 154, 299], 1));
console.log(
  BinarySearch(['aa', 'bb', 'cbe', 'dbc', 'efg', 'hij', 'klm', 'nop', 'qrs', 'tuv'], 'tuv')
);
console.log('/***Binary Search***/');
console.log('/***Bubble Sort***/');
console.log(BubbleSort(['dbc', 'aa', 'hij', 'bb', 'cbe', 'nop', 'efg', 'qrs', 'tuv', 'klm']));
console.log(BubbleSort([30, 5, 21, 1, 3, 7, 89, 99]));
console.log('/***Bubble Sort***/');
console.log('/***Short Bubble Sort***/');
console.log(ShortBubbleSort([30, 5, 21, 1, 3, 7, 89, 99]));
console.log('/***Short Bubble Sort***/');

console.log('/***Binary Tree***/');

const r = new BinaryTree('a');
console.log(r.getRootVal());
console.log(r.getLeftChild());
r.insertLeft('b');
console.log(r.getLeftChild());
console.log(r.getLeftChild().getRootVal());
r.insertRight('c');
console.log(r.getRightChild());
console.log(r.getRightChild().getRootVal());
r.getRightChild().setRootVal('hello');
console.log(r.getRightChild().getRootVal());
console.log('/***Binary Tree***/');

console.log('/***Build Parse Tree***/');
let parseTree = buildParseTree('( ( 5 * 3 ) + ( 4 * 5 ) )');
console.log(parseTree);
console.log('/***Build Parse Tree***/');

console.log('/***Build Mirror Tree***/');
console.log(mirrorTree(parseTree));
console.log('/***Build Mirror Tree***/');

console.log('/***Evaluate Tree***/');
console.log(evaluateTree(parseTree));
console.log('/***Evaluate Tree***/');

parseTree = buildParseTree('( ( ( 5 * 3 ) / ( 2 - 1 ) ) + ( 4 * 5 ) )');

console.log('/***Pre-Order traversal tree***/');
preOrderTraversal(parseTree);
console.log('/***Pre-Order traversal tree***/');

console.log('/***In-Order traversal tree***/');
console.log(inOrderTraversal(parseTree));
console.log('/***In-Order traversal tree***/');

console.log('/***Post-Order traversal tree***/');
postOrderTraversal(parseTree);
console.log('/***Post-Order traversal tree***/');

console.log('/***Priority queue Binary Heap***/');
const heap = new BinaryHeap();
console.log(heap.buildHeap([10, 4, 6, 1, 2, 9, 3, 8, 7]));
console.log(heap.delMin());
console.log(heap.delMin());
heap.insert(1);
console.log(heap.heapList);
console.log(heap.delMin());
console.log(heap.delMin());
console.log(heap.delMin());
console.log(heap.delMin());
console.log(heap.delMin());
console.log(heap.delMin());
console.log(heap.delMin());
console.log(heap.delMin());
console.log(heap.delMin());
console.log(heap.delMin());
console.log('/***Priority queue Binary Heap***/');
