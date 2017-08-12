function Gui(){


this.show = function(){

//key info background
  fill(255);
  rect(30,0,width/5, 320);

 //leftwing
  fill(309, 95, 100, 0.7);
  rect(40, 120, 30, 30);

  //rightwing
  fill(173,95,100, 0.7);
  rect(40, 160, 30, 30);

  //mainstream
  fill(60,95,100, 0.7);
  rect(40, 200, 30, 30);


  fill(65);
  textFont('Roboto Slab');
  textSize(24);
  text("Fake News on Facebook",40, 60);
  textFont('Roboto');
  textSize(16);
  text("Colour-Key:",40, 100);
  textSize(20);
  text("Leftwing",75, 142);
  text("Rightwing",75, 182);
  text("Mainstream",75, 220);
  text("Total Shares: 24499",40, 260);
  text("Total Comments: 1375",40, 300);
}

this.move = function(){

}

}
