// node maximum_depth_of_binary_tree.js
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

function maxDepth(node) {
  // Base case
  if (!node) {
    return 0;
  }

  // Use recursion - call the same function on the two child nodes.
  // Recursion will eventually end because we're calling on successively smaller inputs.
  const leftDepth = maxDepth(node.left);
  const rightDepth = maxDepth(node.right);

  return Math.max(leftDepth, rightDepth) + 1;  // Add 1 to the max child depth
}

// This is the definition of a tree node as specified by Leetcode
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// Build a tree from an array of values, e.g. [3, 9, 20, null, null, 15, 7]
function buildTree(values) {
  if (values.length === 0) {
    return null;
  }

  const nodes = [];

  // Initialize all TreeNodes, but don't create edges yet
  for (let i = 0; i < values.length; i++) {
    if (values[i] != null) {
      nodes[i] = new TreeNode(values[i]);
    }
  }

  // Set children for each node
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node && i * 2 + 1 < nodes.length) {
      node.left = nodes[i * 2 + 1];
      node.right = nodes[i * 2 + 2];
    }
  }
  return nodes[0]; // Root
}

// Print tree (using pre-order traversal)
function printTree(node) {
  if (!node) {
    return;
  }
  console.log(node.val);
  printTree(node.left);
  printTree(node.right);
}

const testCases = [
  [],
  [1],
  [3, 9, 20, null, null, 15, 7],
  [1, 2, null, 3, null, null, null, 4],
];

testCases.forEach((testCase) => {
  const tree = buildTree(testCase);
  console.log({
    input: testCase,
    depth: maxDepth(tree)
  });
});
