let balls = [];
var t = 1;
function setup() {
  createCanvas(800, 500);
  
  for(let i = 0; i < 4000; i ++){
    let w = random(75, 100);
    let x = random(width);
    let y = random(height);
    balls[i] = new Ball(x, y, w, w);
  }
}

function draw() {
  background(0, 0, 112);
  for(let i = 0; i < balls.length; i ++){
    balls[i].display();
    balls[i].move();
    
    if(balls[i].y <= -100) {
      balls.splice(i, 1);}}}
function mouseDragged(){
  for(b = 0; b < balls.length; b++){
    balls[b].clicked()
  }
  //let w = random(1, 100);
  //let ball = new Ball(mouseX, mouseY, w, w);
  //balls.push(ball)
}