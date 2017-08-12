var data;
var len;
//the below three are instances of the particle object
var right;
var left;
var mainstream;
//holds the category of media
var cat = [];

//stores all the shares from the JSON
var shares = [];
//is the total add values from the array
var shareCount ;

var gui;
//leftwing = 1;
//rightwing = 2;
//mainstream = 3;
var rating = [];
//Truth scale below...
// no factual content = 1
//mostly true = 2
//mixture of true and false = 3
//mostly false = 4
//particle is a test instance
var particle = [];

function preload() {
data = loadJSON("data/fb.JSON");
}

function setup() {
createCanvas(windowWidth, windowHeight);
len = Object.keys(data).length;
decideCat();
decideRate();
for (var i = 0; i < len; i++){
  //var x = rating[i];
  particle[i] = new Particle(random(0,width), random(0,height), rating[i], rating[i], cat[i]);
  gui = new Gui();
  shareCount = Number(data[i].comment_count);


 }
}

function draw(){
  background(10, 10, 10);
  colorMode(HSB);
  for (var i = 0; i < len; i++){
      particle[i].show();
      particle[i].moveVector();
   }
   gui.show();
}


function decideRate(){
  for (var i = 0; i < len; i++){
    //console.log(data[i]);
  if(data[i].Rating == "no factual content"){
    rating[i] = 1;
  }else if (data[i].Rating == "mostly true"){
    rating[i] = 2;
  }else if(data[i].Rating == "mixture of true and false"){
    rating[i] = 3;
  }else{
    rating[i] = 4;
  }



 }

}


function decideCat(){
  for (var i = 0; i < len; i++){
    //console.log(data[i]);
  if(data[i].Category == "left"){
    cat[i] = 1;
  }else if (data[i].Category == "right"){
    cat[i] = 2;
  }else if(data[i].Category == "mainstream"){
    cat[i] = 3;
   }
  }
}
