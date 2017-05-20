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
  getRightChild() {
    return this.rightChild;
  }
  getLeftChild() {
    return this.leftChild;
  }

  getRootVal() {
    return this.key;
  }

  setRootVal(val) {
    this.key = val;
  }
  getParent() {
    return this.parent;
  }
}

export default BinaryTree;

/* eslint-enable no-param-reassign */
