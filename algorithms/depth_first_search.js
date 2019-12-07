// node depth_first_search.js

const testGraph = {
  1: [2, 3],
  2: [4],
  4: [1, 6],
  6: [],
}

function dfs(graph, node, targetNode, visitedNodes) {
  if (node == null) {
    return false;
  }

  // Don't revisit a node that has already been visited
  if (visitedNodes.includes(node)) {
    return false;
  }

  // Mark node as visited
  visitedNodes.push(node);

  // Check if targetNode is found
  if (node === targetNode) {
    return true;
  }

  // Get the neighbors of the node
  const neighbors = graph[node] || [];

  // Recursively do depth-first search on each of the node's neighbors.
  // If any of the neighbors finds the node, then return true (using .some)
  for (let i = 0; i < neighbors.length; i++) {
    const found = dfs(graph, neighbors[i], targetNode, visitedNodes);
    if (found) {
      return true;
    }
  }
  return false;
}

const targets = [2, 6, 100];

targets.forEach((target) => {
  const visited = [];
  const found = dfs(testGraph, 1, target, visited);
  console.log({
    target,
    found,
    visited
  });
});
