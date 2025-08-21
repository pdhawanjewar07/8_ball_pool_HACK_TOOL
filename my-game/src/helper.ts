type BallPositionMap = {
  [ballNum: number]: {
    posX: number;
    posY: number;
  };
};

export function generate8BallRackPositions(radius: number,offSetX: number,offSetY: number): BallPositionMap {
  const rows = 5;
  const dx = Math.sqrt(3) * radius; // horizontal distance between rows
  const dy = 2 * radius; // vertical distance between balls in a row
  let ballCounter = 0;

  const positions: BallPositionMap = {}; // <-- object instead of array

  for (let row = 1; row <= rows; row++) {
    const ballsInRow = row;

    // Center this row around y = 0
    const rowHeight = (ballsInRow - 1) * dy;
    const startY = -rowHeight / 2;

    for (let ballNum = 0; ballNum < ballsInRow; ballNum++) {
      const x = (row - 1) * dx; // shift each row right
      const y = startY + ballNum * dy; // distribute vertically

      ballCounter++;
      positions[ballCounter] = {
        posX: x + offSetX,
        posY: y + offSetY,
      };
    }
  }
  return positions;
}

console.log(generate8BallRackPositions(24, 0, 0));
