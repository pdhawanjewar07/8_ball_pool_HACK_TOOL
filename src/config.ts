// imports
import ball_cue from "./assets/Hud_White_Ball.png";
import ball_1 from "./assets/Hud_Solid_Ball_1.png";
import ball_2 from "./assets/Hud_Solid_Ball_2.png";
import ball_3 from "./assets/Hud_Solid_Ball_3.png";
import ball_4 from "./assets/Hud_Solid_Ball_4.png";
import ball_5 from "./assets/Hud_Solid_Ball_5.png";
import ball_6 from "./assets/Hud_Solid_Ball_6.png";
import ball_7 from "./assets/Hud_Solid_Ball_7.png";
import ball_8 from "./assets/Hud_Solid_Ball_8.png";
import ball_9 from "./assets/Hud_Stripe_Ball_9.png";
import ball_10 from "./assets/Hud_Stripe_Ball_10.png";
import ball_11 from "./assets/Hud_Stripe_Ball_11.png";
import ball_12 from "./assets/Hud_Stripe_Ball_12.png";
import ball_13 from "./assets/Hud_Stripe_Ball_13.png";
import ball_14 from "./assets/Hud_Stripe_Ball_14.png";
import ball_15 from "./assets/Hud_Stripe_Ball_15.png";

// config
export const tableWidth = 1762;
export const tableHeight = 971;
export const ballRadius = 24;

// Cushion walls Vertices
export const allCushionWallsData = {
  topLeftCushionWallData: {
    center: { x: 479, y: 72.25 },
    vertices: [
      { x: 114, y: 56 },
      { x: 147, y: 88.5 },
      { x: 836, y: 88.5 },
      { x: 844, y: 56 },
    ],
  },
  topRightCushionWallData: {
    center: { x: 1284, y: 72.25 },
    vertices: [
      { x: 919, y: 56 },
      { x: 927, y: 88.5 },
      { x: 1616, y: 88.5 },
      { x: 1649, y: 56 },
    ],
  },
  bottomLeftCushionWallData: {
    center: { x: 479, y: 898.75 },
    vertices: [
      { x: 114, y: 915 },
      { x: 147, y: 882.5 },
      { x: 836, y: 882.5 },
      { x: 844, y: 915 },
    ],
  },
  bottomRightCushionWallData: {
    center: { x: 1284, y: 898.75 },
    vertices: [
      { x: 919, y: 915 },
      { x: 927, y: 882.5 },
      { x: 1616, y: 882.5 },
      { x: 1649, y: 915 },
    ],
  },
  leftCushionWallData: {
    center: { x: 71.75, y: 485.5 },
    vertices: [
      { x: 56, y: 115 },
      { x: 87.5, y: 147 },
      { x: 87.5, y: 824 },
      { x: 56, y: 856 },
    ],
  },
  RightCushionWallData: {
    center: { x: 1690.25, y: 485.5 },
    vertices: [
      { x: 1706, y: 115 },
      { x: 1674.5, y: 147 },
      { x: 1674.5, y: 824 },
      { x: 1706, y: 856 },
    ],
  },
};

// Balls Textures Map
export const ballsTextureMap: { [key: number]: string } = {
  0: ball_cue,
  1: ball_1,
  2: ball_2,
  3: ball_3,
  4: ball_4,
  5: ball_5,
  6: ball_6,
  7: ball_7,
  8: ball_8,
  9: ball_9,
  10: ball_10,
  11: ball_11,
  12: ball_12,
  13: ball_13,
  14: ball_14,
  15: ball_15,
};
