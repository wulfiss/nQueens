const knightMoves = (start, end) => {
  const moves = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
  ];

  const visited = new Set();
  const queue = [[start]];

  while (queue.length > 0) {
    const path = queue.shift();
    const last = path[path.length - 1];
    if (last[0] === end[0] && last[1] === end[1]) {
      let mgs = `The Knight reached the square in ${path.length - 1} steps. `;
      return { mgs, path };
    }
    if (visited.has(last.toString())) {
      continue;
    }
    visited.add(last.toString());
    for (const move of moves) {
      const next = [last[0] + move[0], last[1] + move[1]];
      if (next[0] >= 0 && next[0] <= 7 && next[1] >= 0 && next[1] <= 7) {
        queue.push(path.concat([next]));
      }
    }
  }
  return null;
};

const random = (num) => {
  return Math.floor(Math.random() * num);
};

const nQueens = (x, y) => {
  const moves = [
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
  ];

  const invalid = new Set();
  const start = [3, 3]; /* [random(x), random(y)]; */

  const queue = [[start]];
  let current = start;
  console.log(current);
  for (const move of moves) {
    let next = start;
    while (next[0] >= 0 && next[0] <= 7 && next[1] >= 0 && next[1] <= 7) {
      invalid.add(next.toString());
      next = [next[0] + move[0], next[1] + move[1]];
    }
  }
  return invalid;
};
export { nQueens };
