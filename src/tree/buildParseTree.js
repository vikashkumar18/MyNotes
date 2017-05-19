import 'babel-polyfill';
import BinaryTree from './BinaryTree';

const buildParseTree = expr => {
  // expression should have single space
  const exprList = expr.split(' ');
  const parseTree = new BinaryTree();
  let currentNode = parseTree;
  /* eslint-disable consistent-return */
  exprList.forEach(char => {
    if (char === '(') {
      currentNode.insertLeft();
      currentNode = currentNode.getLeftChild();
    } else if (Number(char)) {
      const number = Number(char);
      currentNode.setRootVal(number);
      currentNode = currentNode.getParent();
    } else if (['/', '+', '*', '-'].indexOf(char) > -1) {
      currentNode.setRootVal(char);
      currentNode.insertRight();
      currentNode = currentNode.getRightChild();
    } else if ([')'].indexOf(char) > -1) {
      currentNode = currentNode.getParent();
    } else {
      return new Error('Error in value');
    }
  });
  /* eslint-enable consistent-return */
  return parseTree;
};

export default buildParseTree;
