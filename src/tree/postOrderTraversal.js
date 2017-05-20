import 'babel-polyfill';

/**
 * In a postorder traversal, we recursively do a postorder
 *  traversal of the left subtree and the right subtree
 *  followed by a visit to the root node.
 * @function postOrderTraversal
 * @param  {BinaryTree} tree
 * @example
 * // returns
 * 5
 * 3
 * *
 * 2
 * 1
 * -
 * /
 * 4
 * 5
 * *
 * +
 * let parseTree = buildParseTree('( ( ( 5 * 3 ) / ( 2 - 1 ) ) + ( 4 * 5 ) )');
 * postOrderTraversal(parseTree);
 */
const postOrderTraversal = tree => {
  if (tree) {
    postOrderTraversal(tree.getLeftChild());
    postOrderTraversal(tree.getRightChild());
    console.log(tree.getRootVal());
  }
};

export default postOrderTraversal;
