var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var cw = canvas.width;
var ch = canvas.height;
var r = 50;
var x= r;
var y= ch/2;
var h= 15;

ctx.beginPath();
ctx.arc(cw/2,ch-r,r,0,2*Math.PI);
ctx.stroke();

ctx.moveTo(cw/2-r, ch-r);
ctx.lineTo(cw/2+r, ch-r);
ctx.stroke();

ctx.moveTo(cw/2, ch-2*r);
ctx.lineTo(cw/2, ch);
ctx.stroke();

for (i=1; i<=5; i++){
	ctx.beginPath();
	ctx.fillStyle="hsl(" +h+ ", 100%, 50%)";
	ctx.arc(x, y,r,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
	x= x+2*r+r/2;
	h= h+r;
}