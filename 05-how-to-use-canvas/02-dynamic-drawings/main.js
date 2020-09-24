var c = document.getElementById("my-canvas");
var ctx = c.getContext("2d");

let drawCircle = (
  centerX,
  centerY,
  radius,
  startAngle,
  endAngle,
  fillColor
) => {
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.fillStyle = fillColor;
  ctx.fill();
  ctx.stroke();
};

drawCircle(250, 250, 150, 0, 2 * Math.PI, "transparent");

let drawLine = (startX, startY, endX, endY) => {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
};

// Eyes
let drawEyes = (radius, color) => {
  drawCircle(200, 200, radius, 0, 2 * Math.PI, color);
  drawCircle(300, 200, radius, 0, 2 * Math.PI, color);
};

// Nose
let drawNose = (type) => {
  // type is either "crooked", or "button"
  if (type === "crooked") {
    drawLine(250, 225, 200, 275);
    drawLine(200, 275, 250, 275);
  } else {
    drawCircle(250, 250, 20, 0, Math.PI, "transparent");
    drawLine(230, 250, 250, 225);
    drawLine(270, 250, 250, 225);
  }
};

// Mouth
let drawMouth = (expression) => {
  // expression is either an 'surprise', 'flat', 'happy'
  if (expression === "surprise") {
    drawCircle(250, 325, 40, 0, 2 * Math.PI, "transparent");
  } else if (expression === "happy") {
    drawCircle(250, 300, 40, 0, Math.PI, "transparent");
  } else {
    drawLine(200, 325, 300, 325);
  }
};

// drawEyes(10, "brown");
// drawNose("button");
// drawMouth("flat");

let drawFace = (eyeRadius, eyeColor, noseType, expression) => {
  drawEyes(eyeRadius, eyeColor);
  drawNose(noseType);
  drawMouth(expression);
};

let eyeRadius = Math.random() * 20;
let eyeColor = ["brown", "blue", "green"][Math.round(Math.random() * 3)];
let noseType = ["crooked", "button"][Math.round(Math.random())];
let expression = ["surprise", "happy", "flat"][Math.round(Math.random() * 3)];

drawFace(eyeRadius, eyeColor, noseType, expression);
