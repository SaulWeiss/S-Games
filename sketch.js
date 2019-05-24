var paddleLeft;
var paddleRight;
var ball1;
var bSpeedx = 5;
var bSpeedy = 5;
var bAI = 25;
var pUp = [];
var framesSinceHit = 0;
var padLeftsY = 50;
var badAction1 = false;
function setup() {
  createCanvas(600, 500);
  paddleLeft = new Paddle(50,50,10,50);
  paddleRight = new Paddle(550, 50, 10, 50);
  ball1 = new Ball(55, 200, 10);
  for(let i =0; i < 1; i ++){
    pUp.push(new powerUp(random(width), random(height), 50, true));
    pUp.push(new powerUp(random(width), random(height), 50, false));
  }
}
function draw() {
  background(0);
  framesSinceHit++
  for(let i = 0; i < pUp.length; i++){
    pUp[i].display();
  }
  fill(255,0,0);
  paddleLeft.display();
  fill(0,0,255);
  paddleRight.display();
  ball1.display();
  if (keyIsDown(UP_ARROW)){
  	paddleRight.y = paddleRight.y - 5;
  }
  if (keyIsDown(DOWN_ARROW)){
  	paddleRight.y = paddleRight.y + 5;
  }
  if (keyIsDown(87)){
  	paddleLeft.y = paddleLeft.y - 5;
  }
  if (keyIsDown(83)){
  	paddleLeft.y = paddleLeft.y + 5;
  }
  ball1.x = ball1.x + bSpeedx;
  ball1.y = ball1.y + bSpeedy;
  if(ball1.x >= paddleRight.x - 5 && ball1.x <= paddleRight.x + 5 && ball1.y <= paddleRight.y + 50 && ball1.y >= paddleRight.y){
    bSpeedx = bSpeedx * -1;
  }else if(ball1.x <= paddleLeft.x + 5 && ball1.x <= paddleLeft.x + 5 && ball1.y <= paddleLeft.y+padLeftsY && ball1.y >= paddleLeft.y){
  	bSpeedx = bSpeedx * -1;
  }
  if(ball1.y >= height) {
  bSpeedy = bSpeedy * -1;
  }
    if(ball1.y <= 0) {
  bSpeedy = bSpeedy * -1;
  }
  if (ball1.x <= 0-40) {
    bSpeedx = bSpeedx * -1;
  }
  paddleLeft.y = ball1.y - bAI;
  paddleRight.y = mouseY - 25;
  paddleRight.x = mouseX;
//win/lose
  if (ball1.x >= width+40) {
    bSpeedx = bSpeedx * -1;
    bAI += 10;
    print("gain")
    print(bAI)
  }
  if(paddleRight.y == ball1.y - 25){
    bAI -= 5;
    print('hit');
    print(bAI)
  }
  if(bAI <= -6){
    textSize(40);
    text("You Win", 300, 300);
  }
  if(badAction1 == true){
    padLeftsY = 80;
    print('Yes!!');
    if(bAI >= 80){
      textSize(40);
      text("Game Over", 300, 300);
  }}else if(bAI >= 56){
      textSize(40);
      text("Game Over", 300, 300);
  }
  for(let i = 0; i < pUp.length; i++){
    if(ball1.intersects(pUp[i])){
      pUp[i].action();
      pUp.splice(i, 1);
      print("hit10");
      print(bAI)
    }
  }
  if(framesSinceHit > 700){
    pUp.push(new powerUp(random(width), random(height), 50, random()));
    framesSinceHit = 0;
  }
  for(let i = 0; i < pUp.length; i++){
   if(ball1.intersects(pUp[i])){
     pUp[i].badAction();
     pUp.splice(i, 1);
   }
  }
}