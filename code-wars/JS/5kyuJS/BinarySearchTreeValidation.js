class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const isBST = node => {
  return isValidBST(node, null, null) || isValidBSTReverse(node, null, null);
};

function isValidBST(node, min, max) {
  if (node === null) {
    return true;
  }

  if ((max !== null && node.val > max) || (min !== null && node.val < min)) {
    return false;
  }

  if (!isValidBST(node.left, min, node.val) || !isValidBST(node.right, node.val, max)) {
    return false;
  }

  return true;
}

function isValidBSTReverse(node, min, max) {
  if (node === null) {
    return true;
  }

  if ((max !== null && node.val > max) || (min !== null && node.val < min)) {
    return false;
  }

  if (!isValidBSTReverse(node.right, min, node.val) || !isValidBSTReverse(node.left, node.val, max)) {
    return false;
  }

  return true;
}