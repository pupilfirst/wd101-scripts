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
  ctx.stroke();
  ctx.fillStyle = fillColor;
  ctx.fill();
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
  // Left eye
  drawCircle(300, 200, radius, 0, 2 * Math.PI, color);

  // Right eye
  drawCircle(200, 200, radius, 0, 2 * Math.PI, color);
};

// Nose
let drawNose = (type) => {
  // Nose type is either "crooked", or "button".
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
  // Expression is either an 'surprise', 'happy' & 'flat'.
  if (expression === "surprise") {
    drawCircle(250, 325, 40, 0, 2 * Math.PI, "transparent");
  } else if (expression === "happy") {
    drawCircle(250, 300, 40, 0, Math.PI, "transparent");
  } else {
    drawLine(200, 325, 300, 325);
  }
};

let getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let drawRandomFace = () => {
  let eyeRadius = getRndInteger(1, 20);
  let eyeColor = ["brown", "blue", "green"][getRndInteger(0, 2)];
  let noseType = ["crooked", "button"][getRndInteger(0, 1)];
  let expression = ["surprise", "happy", "flat"][getRndInteger(0, 2)];

  drawEyes(eyeRadius, eyeColor);
  drawNose(noseType);
  drawMouth(expression);
};

drawRandomFace();
