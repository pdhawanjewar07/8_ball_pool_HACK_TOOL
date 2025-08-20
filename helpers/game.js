var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite,
    Vertices = Matter.Vertices;

var engine = Engine.create();
var world = engine.world;

engine.gravity.y = 1;  // disable vertical gravity
engine.gravity.x = 0;  // disable horizontal gravity


var render = Render.create({
    element: document.getElementById("game"),
    engine: engine,
    options: {
        width: 1762,
        height: 971,
        wireframes: false,
        background: "#2c3e50"
    }
});

Render.run(render);
var runner = Runner.create();
Runner.run(runner, engine);

// === Boundaries ===

// Outer table boundary (approximate rectangle, ignore rx/ry for now)
// Walls around edges
const wallThickness = 10;
const walls = [
  Bodies.rectangle(1762/2, -wallThickness/2, 1762, wallThickness, { isStatic: true }), // top
  Bodies.rectangle(1762/2, 971+wallThickness/2, 1762, wallThickness, { isStatic: true }), // bottom
  Bodies.rectangle(-wallThickness/2, 971/2, wallThickness, 971, { isStatic: true }), // left
  Bodies.rectangle(1762+wallThickness/2, 971/2, wallThickness, 971, { isStatic: true }) // right
];
Composite.add(world, walls);

function addPolylineAsWalls(points, options = {}) {
    const thickness = options.thickness || 20;
    const side = options.side || "left"; // "left" or "right" relative to segment direction
    const wallOptions = Object.assign({ isStatic: true, render: { fillStyle: "white" } }, options);

    for (let i = 0; i < points.length - 1; i++) {
        let p1 = points[i], p2 = points[i + 1];
        let dx = p2.x - p1.x;
        let dy = p2.y - p1.y;
        let length = Math.sqrt(dx * dx + dy * dy);
        let angle = Math.atan2(dy, dx);

        // unit normal (perpendicular)
        let nx = -dy / length;
        let ny = dx / length;

        // choose side
        if (side === "right") {
            nx *= -1;
            ny *= -1;
        }

        // offset outward
        let shiftX = nx * (thickness / 2);
        let shiftY = ny * (thickness / 2);

        let wall = Bodies.rectangle(
            (p1.x + p2.x) / 2 + shiftX,
            (p1.y + p2.y) / 2 + shiftY,
            length,
            thickness,
            Object.assign({ angle: angle }, wallOptions)
        );

        Composite.add(world, wall);
    }
}



const polylines = {
  bottom_left: [
    { x: 114, y: 915 },
    { x: 147, y: 882.5 },
    { x: 836, y: 882.5 },
    { x: 844, y: 915 }
  ],
  bottom_right: [
    { x: 919, y: 915 },
    { x: 927, y: 882.5 },
    { x: 1616, y: 882.5 },
    { x: 1649, y: 915 }
  ],
  top_left: [
    { x: 114, y: 56 },
    { x: 147, y: 88.5 },
    { x: 836, y: 88.5 },
    { x: 844, y: 56 }
  ],
  top_right: [
    { x: 919, y: 56 },
    { x: 927, y: 88.5 },
    { x: 1616, y: 88.5 },
    { x: 1649, y: 56 }
  ],
  left: [
    { x: 56, y: 115 },
    { x: 87.5, y: 147 },
    { x: 87.5, y: 824 },
    { x: 56, y: 856 }
  ],
  right: [
    { x: 1706, y: 115 },
    { x: 1674.5, y: 147 },
    { x: 1674.5, y: 824 },
    { x: 1706, y: 856 }
  ]
};


// Top cushions → thickness pushed outward (upwards from play area)
addPolylineAsWalls(polylines.top_left, { thickness: 10, side: "right" });
addPolylineAsWalls(polylines.top_right, { thickness: 10, side: "right" });

// Bottom cushions → thickness pushed outward (downwards from play area)
addPolylineAsWalls(polylines.bottom_left, { thickness: 10, side: "left" });
addPolylineAsWalls(polylines.bottom_right, { thickness: 10, side: "left" });

// Side cushions
addPolylineAsWalls(polylines.left, { thickness: 10, side: "left" });
addPolylineAsWalls(polylines.right, { thickness: 10, side: "right" });


// create a circle (ball)
const ball = Matter.Bodies.circle(
  (1762/2)+30, // x position (center)
  971/2, // y position (center)
  30,  // radius in pixels
  {
    restitution: 0.95,   // bounciness
    friction: 0,     // surface friction
    render: {
      fillStyle: "red"  // color
    }
  }
);

// add it to the world
Matter.World.add(engine.world, ball);
