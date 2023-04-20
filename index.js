import { nQueens } from './nQueens.js';

// nQueens(x, y, xS, yS)

/* x & y are the size of the board, their default value is 8.  */
/* xS & yS are the position of the first Queen in the board,
 their default value will be generated randomly. */

console.log(nQueens(8, 10));
/* [
  [ 1, 5 ], [ 0, 0 ],
  [ 2, 1 ], [ 3, 4 ],
  [ 4, 6 ], [ 5, 3 ],
  [ 6, 9 ], [ 7, 2 ]
] */

console.log(nQueens(20, 32, 10, 30));
/* [
  [ 10, 30 ], [ 0, 0 ],   [ 1, 2 ],
  [ 2, 4 ],   [ 3, 1 ],   [ 4, 3 ],
  [ 5, 8 ],   [ 6, 10 ],  [ 7, 12 ],
  [ 8, 14 ],  [ 9, 5 ],   [ 11, 6 ],
  [ 12, 9 ],  [ 13, 7 ],  [ 14, 21 ],
  [ 15, 23 ], [ 16, 25 ], [ 17, 27 ],
  [ 18, 11 ], [ 19, 31 ]
] */
