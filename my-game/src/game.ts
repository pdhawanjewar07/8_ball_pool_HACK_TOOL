// Imports
import Matter from "matter-js";
import { tableWidth, tableHeight, ballRadius, allCushionWallsData, ballsTextureMap } from "./config.ts";
import {generate8BallRackPositions} from "./helper.ts"

// Initialise engine, world, etc.
const { Engine, Render, Runner, Bodies, World, Mouse, MouseConstraint } =
  Matter;
const engine = Engine.create();
const world = engine.world;

// Engine settings
engine.gravity.y = 0;
engine.gravity.x = 0;
// engine.positionIterations = 10;
// engine.velocityIterations = 10;
// engine.constraintIterations = 4;

// Initialise Render and Runner
var render = Render.create({
  element: document.getElementById("game") || undefined,
  engine: engine,
  options: {
    width: tableWidth,
    height: tableHeight,
    wireframes: false,
    background: "#383838ff",
  },
});
Render.run(render);
var runner = Runner.create();
Runner.run(runner, engine);


// --- Add mouse controls ---
const mouse = Mouse.create(render.canvas); // link mouse to render canvas
const mouseConstraint = MouseConstraint.create(engine, {
  mouse,
  constraint: {
    stiffness: 0.2,
    render: {
      visible: false, // hide drag line
    },
  },
});
// Add mouseConstraint to world
World.add(world, mouseConstraint);
// Keep the mouse in sync with the render
render.mouse = mouse;


// Outer table boundary
// const wallOptions = {isStatic: true};
// const topWall    = Bodies.rectangle(tableWidth/2, 0, tableWidth, 0, wallOptions);
// const bottomWall = Bodies.rectangle(tableWidth/2, tableHeight, tableWidth, 0, wallOptions);
// const leftWall   = Bodies.rectangle(0, tableHeight/2, 0, tableHeight, wallOptions);
// const rightWall  = Bodies.rectangle(tableWidth, tableHeight/2, 0, tableHeight, wallOptions);
// World.add(world, [bottomWall, leftWall, rightWall, topWall]);

// Cushion walls
const cushionWallOptions = {
  isStatic: true,
  render: { fillStyle: "#ffffffff" },
};
for (const wallData of Object.values(allCushionWallsData)) {
  const cushionWall = Bodies.fromVertices(
    wallData.center.x,
    wallData.center.y,
    [wallData.vertices], // must wrap in [] because fromVertices expects an array of vertex sets
    cushionWallOptions,
    true
  );

  World.add(world, cushionWall);
}

// Cue Ball
const cueBall = Bodies.circle((1762/4), (971/2), ballRadius, {
  restitution: 1,
  render: {
    sprite: {
      texture: ballsTextureMap[0], // path to your image
      xScale: 48 / 140, // scale relative to your circle radius (48px diameter vs 140px img)
      yScale: 48 / 140,
    },
  },
});
World.add(world, cueBall);

// 8 ball Rack
function addBallsToWorld(world:Matter.World, radius:number, offSetX:number, offSetY:number){
  const positions = generate8BallRackPositions(radius, offSetX, offSetY);

  const balls = Object.entries(positions).map(([ballNum, pos]) => {
    const texture = ballsTextureMap[Number(ballNum)];

    return Bodies.circle(pos.posX, pos.posY, radius, {
      restitution: 0.9,
      friction: 0.01,
      render: {
        sprite: {
          texture: texture,   // 🎱 assign texture here
          xScale: (radius * 2) / 60, // scale relative to your texture size (assuming ~60px img)
          yScale: (radius * 2) / 60,
        },
      },
    });
  });

  World.add(world, balls);
}
addBallsToWorld(world, ballRadius, 1762*0.7, 971/2);

