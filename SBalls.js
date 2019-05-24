class Ball{
	constructor(x, y, width, height){
    this.x = x;
  	this.y = y;
  	this.width = width;
    this.height = height;
    this.color = ("white")
  }
  display(){
    fill(this.color);
    stroke(12, 255, 200);
    ellipse(this.x, this.y, this.width, this.height);
  }
  move(){
     this.x += random(-1, 1);
     this.y += random(-1, 1);
  }
  clicked(){
    let d = dist(mouseX, mouseY, this.x, this.y);
    if(d < this.width/1 && d < this.height/1){
     balls.splice(b, 1);
    } else this.color = "white";
  }
}