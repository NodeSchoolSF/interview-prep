function canFinish(numCourses, prerequisites) {
  // Build graph representation of courses/prerequisites
  const graph = prerequisites.reduce((obj, prereq) => {
    const [c1, c2] = prereq;
    obj[c1] = obj[c1] || [];
    obj[c1].push(c2);
    return obj;
  }, {});

  // Depth first search to find a cycle.
  function hasCycle(node, visited) {
    if (visited[node]) {
      return true;
    }
    // Add to current path
    visited[node] = true;

    // Recursively search neighbors for a cycle.
    const neighbors = graph[node] || [];
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      // If some subgraph has a cycle, then this whole graph
      // has a cycle.
      if (hasCycle(neighbor, visited)) {
        return true;
      }
    }

    // Remove from path (handles diamond situation)
    visited[node] = false;

    // No cycles found.
    return false;
  }

  for (let course = 0; course < numCourses; course += 1) {
    if (hasCycle(course, {})) {
      return false;
    }
  }
  // None of the courses have cyclic prerequisites.
  return true;
}

const testCases = [
  [2, [[0, 1]]],
  [2, [[0,1], [1,0]]],
  [3, [[0,1], [0,2], [1,2]]]
];

testCases.forEach((testCase) => {
  console.log(testCase, canFinish(...testCase));
});
