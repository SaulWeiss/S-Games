class Ball{
	constructor(x, y, r){
    this.x = x;
  	this.y = y;
    this.r = r;
  }
  display(){
    fill(255);
    ellipse(this.x, this.y, this.r);
  }
  intersects(other){
    let h = dist(this.x, this.y, other.x, other.y);
    if(h < this.r/2 + other.r/2){
      return true;
    }else {
    return false;
  }
  }
}