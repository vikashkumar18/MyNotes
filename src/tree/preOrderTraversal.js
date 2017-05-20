import 'babel-polyfill';

/**
 * In a preorder traversal, we visit the root node first,
 * then recursively do a preorder traversal of the left subtree,
 * followed by a recursive preorder traversal of the right subtree.
 * @function preOrderTraversal
 * @param  {BinaryTree} tree Expression tree
 * @example
 * // returns
 * +
 * /
 * *
 * 5
 * 3
 * -
 * 2
 * 1
 * *
 * 4
 * 5
 * let parseTree = buildParseTree('( ( ( 5 * 3 ) / ( 2 - 1 ) ) + ( 4 * 5 ) )');
 * preOrderTraversal(parseTree);
 */
const preOrderTraversal = tree => {
  if (tree) {
    console.log(tree.getRootVal());
    preOrderTraversal(tree.getLeftChild());
    preOrderTraversal(tree.getRightChild());
  }
};

export default preOrderTraversal;
