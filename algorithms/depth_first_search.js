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
  
  // Recursively do depth-first search on each of the node's neighbors.
  // If any of the neighbors finds the node, then return true (using .some)
  const neighbors = graph[node] || [];
  return neighbors.some((neighbor) => {
    return dfs(graph, neighbor, targetNode, visitedNodes);
  });
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
