var c = document.getElementById("my-canvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 150);
ctx.lineTo(250, 350);
ctx.stroke();

// Right Arm
ctx.beginPath();
ctx.moveTo(250, 200);
ctx.lineTo(150, 150);
ctx.stroke();

// Left Arm
ctx.beginPath();
ctx.moveTo(250, 200);
ctx.lineTo(350, 150);
ctx.stroke();

// Right Leg
ctx.beginPath();
ctx.moveTo(250, 350);
ctx.lineTo(225, 450);
ctx.stroke();

// Left leg
ctx.beginPath();
ctx.moveTo(250, 350);
ctx.lineTo(275, 450);
ctx.stroke();
