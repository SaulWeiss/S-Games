//eplepic waring
var x = 100
var col = 0
var col2 = 0
var col3 = 0
var x1 = 100
var y1 = 100


function setup() {
  createCanvas(625, 555);
  background(120,210,10);
}

function face(mouseX, mouseY) {
	col = map(mouseX, 0, 625, 0, 255);
  col2 = map(mouseX, 0, 625, 255, 0);
  col3 = map(mouseY, 0, 555, 0, 255);
  fill(col, col2, col3);
	ellipse(mouseX,mouseY,10,10);
	ellipse(mouseX-20,mouseY-10,10,10);
	ellipse(mouseX+20,mouseY-10,10,10);
	quad(mouseX-30, mouseY+10, mouseX-30, mouseY+15, mouseX+30, mouseY+15, mouseX+30, mouseY+10);
}

function draw() {
	face(mouseX, mouseY);
  fill(random(255), random(255), random(255));
  quad(mouseX, mouseY, x+1, x-1, mouseX+100, mouseY+100, 0, 0);
	ellipse(random(600), random(600), random(100), random(100));
	x1 = map( mouseX, 0, 625, 300, 500);
  y1 = map( mouseY, 0, 555, 300, 500);
  quad(x1, y1, random(600),random(100),random(600),random(600),random(600),random(600));
}

function mouseIsPressed() {
  background(col);
}