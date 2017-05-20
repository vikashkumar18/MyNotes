import 'babel-polyfill';

/**
 * In an inorder traversal, we recursively do an inorder traversal on the
 * left subtree, visit the root node, and finally do a recursive inorder
 * traversal of the right subtree.
 * @param  {BinaryTree} tree
 * @example
 * // returns
 * ( ( ( (  5  ) * (  3  ) ) / ( (  2  ) - (  1  ) ) ) + ( (  4  ) * (  5  ) ) )
 * let parseTree = buildParseTree('( ( ( 5 * 3 ) / ( 2 - 1 ) ) + ( 4 * 5 ) )');
 * inOrderTraversal(parseTree)
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
