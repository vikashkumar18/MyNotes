import 'babel-polyfill';

const operators = {
  '+': (a, b) => a + b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '-': (a, b) => a - b
};

/**
 * evaluates a binary tree expression
 * @param  {BinaryTree} tree a binary tree expression
 * @return {Number}     thie evaluated final result
 */
const evaluateTree = tree => {
  const rightChild = tree.getRightChild();
  const leftChild = tree.getLeftChild();

  if (rightChild && leftChild) {
    const operator = tree.getRootVal();
    const fn = operators[operator];
    return fn(evaluateTree(rightChild), evaluateTree(leftChild));
  }
  // if there is no child
  return tree.getRootVal();
};

export default evaluateTree;
