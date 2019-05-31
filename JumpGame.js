var mainCharacter;
var gravity = 9.8/30.0;
var backgroundImage;
var mainCharacterImage;
var monsterImage
var monsterImage2
var groundOffset = 100
var monsterArray = []
var diffC = [];
var framesSinceHit = 0

class Character {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.ySpeed = 0;
    this.xSpeed = 0;
    this.width = width;
    this.color = "blue"
    this.isMonster = false
    this.health = 10;
  }
  
  update(){
	if(this.y+this.width*0.5 >= (height-groundOffset) && this.ySpeed > 0) 
    {
      this.ySpeed = this.ySpeed*(-0.4)
      this.y = height-this.width*0.5-groundOffset
    }
    this.ySpeed += gravity;
    this.y += this.ySpeed;
    
    if(this.isMonster === false){
     this.xSpeed *= 0.9;
    }

    this.x += this.xSpeed;
    
    for(let i = 0; i < monsterArray.length; i++){
      let d = dist(mainCharacter.x, mainCharacter.y, monsterArray[i].x, monsterArray[i].y);
      if(d < 5 && framesSinceHit > 50){
        framesSinceHit = 0
        mainCharacter.health -= 2;
      }
    }
  }
  
  moveBadGuy(){
    var diffX = mainCharacter.x-this.x
    this.xSpeed += diffX*0.00001*random(2.9);
    if(diffX > 0){
      this.xSpeed += 0.1
    } else{
      this.xSpeed -= 0.1
    }
  }
  
  draw(){
    if(mainCharacter.health >= 2){
      textSize(30);    
      text(mainCharacter.health, 100, 100);
    if(this.isMonster){ image(monsterImage, this.x, this.y, this.width, this.width)  } 
    //else { image(monsterImage2, this.x, this.y, this.with, this.width) }
    else { image(mainCharacterImage, this.x, this.y, this.width, this.width) }    
  }
  if(mainCharacter.health <= 0){
    textSize(40);
    text('Gameover', 100, 300);
  }
    }
}
function setup() {
  createCanvas(800, 500);
  mainCharacter = new Character(200, 200, 60)
  backgroundImage = loadImage("./background.jpg")
  mainCharacterImage = loadImage("./hero.png")
  monsterImage = loadImage("./badguy.png")
  monsterImage2 = loadImage("./badguy-1.png")
  monsterImage3 = loadImage("./badguy-2.png")
  
  var newMonster = new Character(600, 100, 60)
  newMonster.isMonster = true
  monsterArray.push(newMonster)
  
  newMonster = new Character(500, 100, 60)
  newMonster.isMonster = true
  monsterArray.push(newMonster)
  
  newMonster = new Character(550, 100, 60)
  newMonster.isMonster = true
  monsterArray.push(newMonster)
}

function draw() {
  framesSinceHit++
  background(0, 200, 150);
  image(backgroundImage, 0, 0, width, height)
  if(keyIsDown(LEFT_ARROW)){
    //move left
    mainCharacter.xSpeed -= 1.0
  }if(keyIsDown(RIGHT_ARROW)){
    //move left
    mainCharacter.xSpeed += 1.0
  }
  mainCharacter.update();
  mainCharacter.draw()
  for(let i = 0; i < monsterArray.length; i++){
  monsterArray[i].update()
  monsterArray[i].moveBadGuy()
  monsterArray[i].draw()
  }
}
function keyPressed(){
  if(key === "ArrowUp" && mainCharacter.y >= 350){
    //JUMP!
   mainCharacter.ySpeed -= 10.0
  }
}