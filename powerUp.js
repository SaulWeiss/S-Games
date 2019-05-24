class powerUp{
	constructor(x, y, r, g){
    this.x = x;
  	this.y = y;
  	this.r = r;
    this.isGood = g;
  }
  display(){
    if(this.isGood == true){
      fill(255, 190, 0);
      ellipse(this.x, this.y, this.r, this.isGood)
  } else fill(244, 30, 10);
      ellipse(this.x, this.y, this.r);
  }
  intersects(other){
    let h = dist(this.x, this.y, other.x, other.y);
    if(h < this.r/2 + other.r/2){
      return true;
    }else return false;
  }
  action(){
    bAI -= 5;
  }
  badAction(){
    paddleLeft.height = 80;
    bAI = 40;
    badAction1 = true;
  }
}