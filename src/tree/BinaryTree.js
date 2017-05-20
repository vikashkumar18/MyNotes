import 'babel-polyfill';
/* eslint-disable no-param-reassign */
/**
* @module BinaryTree
*/
/**
* @class BinaryTree
* @classdesc A tree consists of a set of nodes and a set of edges that connect pairs of nodes.
* A tree has the following properties:
*
* One node of the tree is designated as the root node.
* Every node n, except the root node,
* is connected by an edge from exactly one other node p,
* where p is the parent of n.
* A unique path traverses from the root to each node.
* If each node in the tree has a maximum of two children, we say that the tree is a Binary tree.
*/
class BinaryTree {
  constructor(root) {
    this.key = root;
    this.leftChild = null;
    this.rightChild = null;
    this.parent = null;
  }
  /**
  * @function insertLeft
  * @desc inserts a left child to the binary tree.
  * If the node is not an instance of BinaryTree then the node is first converted
  * into a binary tree node.
  * @param {(Object|String|Number|BinaryTree)} node
  * @memberof module:BinaryTree
  * @instance
  */
  insertLeft(node) {
    if (!(node instanceof BinaryTree)) {
      node = new BinaryTree(node);
    }
    if (this.leftChild) {
      node.leftChild = this.leftChild;
      this.leftChild.parent = node;
      this.leftChild = node;
    } else {
      this.leftChild = node;
    }
    node.parent = this;
  }
  /**
  * @function insertRight
  * @desc inserts a right child to the binary tree.
  * If the node is not an instance of BinaryTree then the node is first converted
  * into a binary tree node.
  * @param {(Object|String|Number|BinaryTree)} node
  * @memberof module:BinaryTree
  * @instance
  */
  insertRight(node) {
    if (!(node instanceof BinaryTree)) {
      node = new BinaryTree(node);
    }
    if (this.rightChild) {
      node.rightChild = this.rightChild;
      this.rightChild.parent = node;
      this.rightChild = node;
    } else {
      this.rightChild = node;
    }
    node.parent = this;
  }
  /**
  * @function getRightChild
  * @desc gets the right child of the binary tree.
  * @return {BinaryTree} node
  * @memberof module:BinaryTree
  * @instance
  */
  getRightChild() {
    return this.rightChild;
  }
  /**
  * @function getLeftChild
  * @desc gets the left child of the binary tree.
  * @return {BinaryTree} node
  * @memberof module:BinaryTree
  * @instance
  */
  getLeftChild() {
    return this.leftChild;
  }
  /**
  * @function getRootVal
  * @desc returns the value stored in the node.
  * @return {(Object|Number|String)} node
  * @memberof module:BinaryTree
  * @instance
  */
  getRootVal() {
    return this.key;
  }
  /**
  * @function setRootVal
  * @desc sets the value to the Binarytree node.
  * @return {(Object|Number|String)} val
  * @memberof module:BinaryTree
  * @instance
  */
  setRootVal(val) {
    this.key = val;
  }
  /**
  * @function getParent
  * @desc return the parent node.
  * @return {BinaryTree} parent
  * @memberof module:BinaryTree
  * @instance
  */
  getParent() {
    return this.parent;
  }
}

export default BinaryTree;

/* eslint-enable no-param-reassign */
