import 'babel-polyfill';
/**
 * creates a mirror of a tree
 * @param  {Object} tree of Type BinaryTree
 * @return {Object} mirrorTree of type BinaryTree
 *
 *
 */
const mirrorTree = tree => {
  const leftChild = tree.getLeftChild();
  const rightChild = tree.getRightChild();

  if (!(rightChild && leftChild)) {
    return null;
  }
  tree.leftChild = rightChild;
  tree.rightChild = leftChild;
  mirrorTree(tree.getLeftChild());
  mirrorTree(tree.getRightChild());
  return tree;
};

export default mirrorTree;
