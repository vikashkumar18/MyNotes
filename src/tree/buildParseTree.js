import 'babel-polyfill';
import BinaryTree from './BinaryTree';
/**
* builds a parse tree for a given expression using the following rules
* If the current token is a '(', add a new node as the left child of the
* current node, and descend   * to the left child.
* If the current token is in the list ['+','-','/','*'], set the root value
* of the current node to
* the operator represented by the current token. Add a new node as the
*  right child of the current
* node and descend to the right child.
* If the current token is a number, set the root value of the current
*  node to the number and return
* to the parent.
* If the current token is a ')', go to the parent of the current node.
* @param  {String} expr expression string must be <space> delimited
* @return {BinaryTree}  parsed binary tree
*/
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
