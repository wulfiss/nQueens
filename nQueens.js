const random = (num) => {
  return Math.floor(Math.random() * num);
};

const nQueens = (x = 8, y = 8, xS = random(x), yS = random(y)) => {
  const moves = [
    //all the direction of the move that the queen can do;
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
  ];

  const invalid = new Set(); //set a Set for the invalid squares
  const start = [xS, yS]; //user start or random start
  const queue = [start]; // all the position in the board are queue here
  let positions = []; //all the valid position of the Queen are stacked here

  //generate the board i = X, j = y
  for (let i = 0; i < x; i += 1) {
    for (let j = 0; j < y; j += 1) {
      queue.push([i, j]);
    }
  }

  while (queue.length > 0) {
    let current = queue.shift(); // desqueue the first element

    if (invalid.has(current.toString())) {
      //if is in the invalid set, will jump to the next element.
      continue;
    }
    //if not the element is push to the position arr, and all his movements inside the board are calculates and saved in the invalid set.
    positions.push(current);
    for (const move of moves) {
      let next = current;
      while (next[0] >= 0 && next[0] <= x && next[1] >= 0 && next[1] <= y) {
        invalid.add(next.toString());
        next = [next[0] + move[0], next[1] + move[1]];
      }
    }
  }
  return positions;
};

export { nQueens };
