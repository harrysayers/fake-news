function Particle(x, y, w, h, c){
  this.c = c;
  this.r;
  this.g;
  this.b;
  this.x = x;
  this.y = y;
  this.mouse = false;
  this.d = dist(mouseX, mouseY, this.w , this.h);
  //console.log(this.velocity.heading())
  //size is controlled through
  this.w = w * 5;
  this.h = h * 5;
  this.border = 0;
  this.position = createVector(x,y);
  this.velocity = p5.Vector.random2D();
  //for(var i = 0; i < cat.length; i++){
  //this.cat[i] = cat[i];
  //this.rate[i] = rate[i];
  //}
//this.m = new PVector;
this.setColour = function(){
  //sets colour of the circle
  if(this.c == 1){//leftwing
    this.r = 309;
    this.g = 95;
    this.b = 100;
  }else if(this.c == 2){//rightwing
    this.r = 173;
    this.g = 95;
    this.b = 100;
  }else{//mainstream
    this.r = 60;
    this.g = 95;
    this.b = 100;
  }
}

this.show = function(){
  this.setColour();
  noStroke();
  fill(this.r, this.g, this.b, 0.5);
  rect(this.position.x, this.position.y, this.w, this.h);
}


this.moveVector = function(){
this.position.add(this.velocity);
//this.velocity.heading(2,1);
//this.position.add(this.acceleration);
if (this.position.x > width - 10) {
      this.position.x = 10;
    }
    else if (this.position.x < 10) {
      this.position.x = width - 10;
    }

    if (this.position.y > height - 10 ) {
      this.position.y = 10;
    }
    else if (this.position.y < 10) {
      this.position.y = height -10;
    }
 }

}
