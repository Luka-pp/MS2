const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2D");

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.arc(240, 160,20, 0, Math.PI*2, false)
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();
