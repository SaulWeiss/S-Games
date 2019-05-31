let balls = [];
function setup() {
  createCanvas(600, 600);
  
  for(let i = 0; i < 1250; i ++){
    let w = random(1, 100);
    let x = random(width);
    let y = random(height);
    balls[i] = new Ball(x, y, w, w);
  }
}

function draw() {
  background(0, 0, 112, 20);
  for(let i = 0; i < balls.length; i ++){
    balls[i].display();
    balls[i].move();
    
    if(balls[i].y <= -100) {
      balls.splice(i, 1);
}
  }
}

function mouseDragged(){
  let w = random(1, 100);
  let ball = new Ball(mouseX, mouseY, w, w);
  balls.push(ball)
}