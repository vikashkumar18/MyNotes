import 'babel-polyfill';

/**
 * In a preorder traversal, we visit the root node first,
 * then recursively do a preorder traversal of the left subtree,
 * followed by a recursive preorder traversal of the right subtree.
 * @param  {BinaryTree} tree Expression tree
 */
const preOrderTraversal = tree => {
  if (tree) {
    console.log(tree.getRootVal());
    preOrderTraversal(tree.getLeftChild());
    preOrderTraversal(tree.getRightChild());
  }
};

export default preOrderTraversal;
