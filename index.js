import SequentialSearch from './src/search/SequentialSearch';
import BinarySearch from './src/search/BinarySearch';
import BubbleSort from './src/sort/BubbleSort';
import ShortBubbleSort from './src/sort/ShortBubbleSort';

console.log(SequentialSearch([1, 3, 4], 4));
console.log(BinarySearch([1, 3, 4, 5, 6, 21, 74, 101, 154, 299], 1));
console.log(
  BinarySearch(['aa', 'bb', 'cbe', 'dbc', 'efg', 'hij', 'klm', 'nop', 'qrs', 'tuv'], 'tuv')
);
console.log(BubbleSort(['dbc', 'aa', 'hij', 'bb', 'cbe', 'nop', 'efg', 'qrs', 'tuv', 'klm']));
console.log(BubbleSort([30, 5, 21, 1, 3, 7, 89, 99]));
console.log(ShortBubbleSort([30, 5, 21, 1, 3, 7, 89, 99]));
