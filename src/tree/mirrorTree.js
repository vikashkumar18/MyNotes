import 'babel-polyfill';
/**
 * creates a mirror of a tree
 * @function mirrorTree
 * @param  {Object} tree of Type BinaryTree
 * @return {Object} mirrorTree of type BinaryTree
 *
 * @example
 * // returns
 * BinaryTree {
 *  key: '+',
 *  leftChild: BinaryTree {
 *    key: '*',
 *    leftChild: BinaryTree {
 *                key: 5,
 *                leftChild: null,
 *                rightChild: null,
 *                parent: [Circular] },
 *    rightChild: BinaryTree {
 *                 key: 4,
 *                 leftChild: null,
 *                 rightChild: null,
 *                 parent: [Circular] },
 *    parent: [Circular] },
 *    rightChild: BinaryTree {
 *                  key: '*',
 *                  leftChild: BinaryTree {
 *                              key: 3,
 *                              leftChild: null,
 *                              rightChild: null,
 *                              parent: [Circular] },
 *                  rightChild: BinaryTree {
 *                              key: 5,
 *                              leftChild: null,
 *                              rightChild: null,
 *                              parent: [Circular] },
 *                 parent: [Circular] },
 *  parent: null }
 *
 * let parseTree = buildParseTree('( ( 5 * 3 ) + ( 4 * 5 ) )');
 * mirrorTree(parseTree)
 *
 */
const mirrorTree = tree => {
  const leftChild = tree.getLeftChild();
  const rightChild = tree.getRightChild();

  if (!(rightChild && leftChild)) {
    return null;
  }
  /* eslint-disable no-param-reassign */
  tree.leftChild = rightChild;
  tree.rightChild = leftChild;
  /* eslint-enable no-param-reassign */
  mirrorTree(tree.getLeftChild());
  mirrorTree(tree.getRightChild());
  return tree;
};

export default mirrorTree;
