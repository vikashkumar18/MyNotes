import 'babel-polyfill';

/**
 * In an inorder traversal, we recursively do an inorder traversal on the
 * left subtree, visit the root node, and finally do a recursive inorder
 * traversal of the right subtree.
 * @param  {BinaryTree} tree
 */

const inOrderTraversal = tree => {
  let value = '';
  if (tree) {
    value = `( ${inOrderTraversal(tree.getLeftChild())}`;
    value = `${value} ${tree.getRootVal()}`;
    value = `${value} ${inOrderTraversal(tree.getRightChild())} )`;
  }
  return value;
};

export default inOrderTraversal;
