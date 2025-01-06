const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    this.head = addComponent(this.head, data)

    function addComponent (root, data) {
      if(root === null) {
        return new Node(data);
      }

      data < root.data ? root.left = addComponent(root.left, data) : root.right = addComponent(root.right, data);

      return root;
    }
  }

  has(data) {
    return hasElem(this.head, data);

    function hasElem(root, data) {
      if(root === null) {
        return false;
      }

      if(root.data === data) {
        return true
      }

      return data < root.data ? hasElem(root.left, data) : hasElem(root.right, data);
    }
  }

  find(data) {
    return findData(this.head, data)


    function findData(root, data) {
      if(root === null) {
        return null;
      }

      if(root.data === data) {
        return root;
      }

      return data < root.data ? findData(root.left, data) : findData(root.right, data);
    }
  }

  remove(data) {
    return removeData(this.head, data)

    function removeData(root, data) {
      if(root === null) {
        return null;
      }

      if(data < root.data) {
        root.left = removeData(root.left, data)
        return root;
      } else if(data > root.data) {
        root.right = removeData(root.right, data)

        return root;
      } else {
        if(!root.left && !root.right) {
          return null;
        }

        if(!root.left) {
          return root.right;
        }

        if(!root.right) {
          return root.left;
        }

        let minFromRight = root.right;

        while(minFromRight.left) {
          minFromRight = minFromRight.left
        }

        root.data = minFromRight.data;

        root.right = removeData(root.right, minFromRight.data)

        return root
      }

    }
  }

  min() {
      if(this.head === null) {
        return null;
      }

      let node = this.head;

      while(node.left) {
        node = node.left;
      }

      return node.data;
  }

  max() {
    if(this.head === null) {
      return null
    }

    let node = this.head;

    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};