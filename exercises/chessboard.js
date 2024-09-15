/*
Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
*/

/*
	[0,0] [0,1] [0,2] [0,3] [0,4] [0,5] [0,6] [0,7]
	[1,0] [1,1] [1,2] [1,3] [1,4] [1,5] [1,6] [1,7]
	[2,0] [2,1] [2,2] [2,3] [2,4] [2,5] [2,6] [2,7]
	[3,0] [3,1] [3,2] [3,3] [3,4] [3,5] [3,6] [3,7]
	[4,0] [4,1] [4,2] [4,3] [4,4] [4,5] [4,6] [4,7]
	[5,0] [5,1] [5,2] [5,3] [5,4] [5,5] [5,6] [5,7]
	[6,0] [6,1] [6,2] [6,3] [6,4] [6,5] [6,6] [6,7]
	[7,0] [7,1] [7,2] [7,3] [7,4] [7,5] [7,6] [7,7]

	Row index + Column index = total index
	0  1  2  3  4  5  6  7
	1  2  3  4  5  6  7  8
	2  3  4  5  6  7  8  9
	3  4  5  6  7  8  9 10
	4  5  6  7  8  9 10 11
	5  6  7  8  9 10 11 12
	6  7  8  9 10 11 12 13
	7  8  9 10 11 12 13 14
*/

for (let row = 0; row < 8; row++) {
	let rowString = "";
  for (let column = 0; column < 8; column++) {
		const isPairRow = row % 2 === 0;
		const isPairColumn = column % 2 === 0;
		const isWhite = isPairRow && isPairColumn || !isPairRow && !isPairColumn;
		rowString += isWhite ? " " : "#";
  }
	console.log(`${rowString}\n`);
}

for (let row = 0; row < 8; row++) {
	let rowString = "";
  for (let column = 0; column < 8; column++) {
		const isWhite = (row + column) % 2 === 0;
		rowString += isWhite ? " " : "#";
  }
	console.log(`${rowString}\n`);
}
