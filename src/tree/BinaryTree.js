import 'babel-polyfill';
/* eslint-disable no-param-reassign */
/**
 * TBD: add notes
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
