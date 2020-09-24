var c = document.getElementById("my-canvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.stroke();

let drawLine = (startX, startY, endX, endY) => {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
};

drawLine(250, 150, 250, 350); // Main body
drawLine(250, 200, 150, 150); // Right Arm
drawLine(250, 200, 350, 150); // Left Arm
drawLine(250, 350, 225, 450); // Right Leg
drawLine(250, 350, 275, 450); // Left Leg
