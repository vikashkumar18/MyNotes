import 'babel-polyfill';

const operators = {
  '+': (a, b) => a + b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '-': (a, b) => a - b
};

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
