type BallPosition = {
  ballNum: number;
  posX: number;
  posY: number;
};

function generate8BallRackPositions(radius: number) {
  const rows = 5;
  const dx = Math.sqrt(3) * radius; // horizontal distance between rows
  const dy = 2 * radius;            // vertical distance between balls in a row
  let ballCounter = 0;

  const positions: BallPosition[] = [];  // <-- explicitly typed

  for (let row = 1; row <= rows; row++) {
    const ballsInRow = row;

    // Center this row around y = 0
    const rowHeight = (ballsInRow - 1) * dy;
    const startY = -rowHeight / 2;

    for (let ballNum = 0; ballNum < ballsInRow; ballNum++) {
      const x = (row - 1) * dx;             // shift each row right
      const y = startY + ballNum * dy;      // distribute vertically

      ballCounter++;
      positions.push({
        "ballNum": ballCounter,
        "posX": x,
        "posY": y
      })
      
    }
  }
  return positions;
}

console.log(generate8BallRackPositions(10))
