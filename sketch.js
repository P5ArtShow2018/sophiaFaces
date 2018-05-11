var women1
var women2
var man1
var man2
var women3
var man3
var women4
var women5
//var colors = []

function preload() {
  women1 = loadImage ("Assets/Unknown-1.jpeg")
  women2 = loadImage ("Assets/Unknown.jpeg")
  man1 = loadImage ("Assets/Unknown-4.jpeg")
  man2 = loadImage ("Assets/Unknown-3.jpeg")
  women3 = loadImage ("Assets/Unknown-2.jpeg")
  man3 = loadImage ("Assets/photo1.png")
  women4 = loadImage ("Assets/photo2.png")
  man4 = loadImage ("Assets/photo3.png")
  women5 = loadImage ("Assets/photo4.png")
}
function setup() {
  createCanvas(522,544);
  imageMode(CENTER)
 // colors[0] = random (0,255)
  //colors[1] = random (0,255)
  //colors[2] = random (0,255)
  image(women1,width/2,height/2)
}

function draw() {
 // noStroke()
    //fill(colors[0], colors[1], colors [2]);
    //ellipse(mouseX,mouseY, 20);
    //if (keyIsDown(81) === true) {
    //background(255)
    //if (mouseIsPressed === true) {
      //colors[0] = random (0,255)
  //colors[1] = random (0,255)
  //colors[2] = random (0,255)
    //}
  if (keyIsDown(65) === true) {
    image(women2,width/2,height/2)
  }
  if (keyIsDown(66) === true) {
    image(man1,width/2,height/2)
  }
  if (keyIsDown(67) === true) {
    image(man2,width/2,height/2)
  }
  if (keyIsDown(68) === true) {
    image(women3,width/2,height/2)
  }
  if (keyIsDown(69) === true) {
    image(man3,width/2,height/2)
  }
  if (keyIsDown(70) === true) {
    image(women4,width/2,height/2)
  }
  if (keyIsDown(71) === true) {
    image(man4,width/2,height/2)
  }
  if (keyIsDown(72) === true) {
    image(women5,width/2,height/2)
  }
 // if (keyIsDown(81) === true) {
   // background(255)
  //}
 // }
}
