import 'babel-polyfill';

/**
 * In a postorder traversal, we recursively do a postorder
 *  traversal of the left subtree and the right subtree
 *  followed by a visit to the root node.
 * @param  {BinaryTree} tree
 */
const postOrderTraversal = tree => {
  if (tree) {
    postOrderTraversal(tree.getLeftChild());
    postOrderTraversal(tree.getRightChild());
    console.log(tree.getRootVal());
  }
};

export default postOrderTraversal;
