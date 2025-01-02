const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.value = value;
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

      if(root.value === data) {
        return root;
      }

      data < root.value ? root.left = addComponent(root.left, data) : root.right = addComponent(root.right, data);

      return root;
    }
  }

  has(data) {
    return hasElem(this.head, data);

    function hasElem(root, data) {
      if(root === null) {
        return false;
      }

      if(root.value === data) {
        return true
      }

      return root.value < data ? hasElem(root.left, data) : hasElem(root.right, data);
    }
  }

  find(data) {
    return findData(this.head, data)


    function findData(root, data) {
      if(root === null) {
        return null;
      }

      if(root.value === data) {
        return root;
      }

      if(data < root.value) {
        root.left = findData(root.left, data);

        return root;
      } else if (data > root.value) {
        root.right = findData(root.right, data);

        return root;
      }
    }
  }

  remove(data) {
    return removeData(this.head, data)

    function removeData(root, data) {
      if(root === null) {
        return null
      }

      if(data < root.left) {
        root.left = removeData(root.left, data)

        return root;
      } else if(data > root.right) {
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

        root.value = minFromRight.value;

        root.right = removeData(root.right, minFromRight.value)

        return root
      }

    }
  }

  min() {
      if(this.head === null) {
        return
      }

      let node = this.head;

      while(node.left) {
        node = node.left;
      }

      return node.value;
  }

  max() {
    if(this.head === null) {
      return
    }

    let node = this.head;

    while(node.right) {
      node = node.right;
    }

    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};