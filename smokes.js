class Ball{
	constructor(x, y, width, height){
    this.x = x;
  	this.y = y;
  	this.width = width;
    this.height = height;
  }
  display(){
    fill(255, 12);
    stroke(255);
    strokeWeight(0);
    ellipse(this.x, this.y, this.width, this.height);
  }
  move(){
     this.x += random(-5, 5);
     this.y += random(-5, 5);
}
}