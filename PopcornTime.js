let balls=[];
let numBalls=1200;
let g = 9.8;
function setup() {
  createCanvas(500, 550);
  for (let i = 0; i < numBalls; i++) {
    balls[i] = new PopcornBall (
    random(width),
    random(height) 
);
}
}
function draw() {
  background(155);
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].bounce();
    balls[i].move();
    balls[i].pOp();
    balls[i].move2();
  }
}
class PopcornBall {
  constructor(x, y, r) { // we could add radius or r to the constructor
    this.x = x;
    this.y = y;
    this.xspeed = random(2, 4);
    this.yspeed = -3;
    this.r = 15;

}
move() {
  this.x += this.xspeed;
  this.y += this.yspeed;
  this.yspeed += 0.3;
  this.xspeed += 0.01;
}
bounce() {
  if(this.x >= width) {
  this.xspeed = this.xspeed * -1;
  this.yspeed = this.yspeed * -1;
  }
  if(this.y >= height) {
  this.yspeed = this.yspeed * -1;
  this.xspeed = this.xspeed * -1;
  }
  if(this.x <= 0) {
  this.xspeed = this.xspeed * -1;
  }
}
  
pOp(){
  if(this.y >= 549){
    this.r += 50;
}
  if(this.r >= 200){
    this.r = 10;
  }
}
move2(){
  if(mouseIsPressed){
    this.x = mouseX
    this.y = mouseY
  }
}
display() {
  fill(255, 255, 200); 
  ellipse(this.x, this.y, this.r, this.r);
}
}