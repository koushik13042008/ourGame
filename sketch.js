var score =0;
var backgroundImage, bg;
var car1, car1_img;
var car2, car2_img;
var database, gameState;
var canvas;
var cars = [];
var blastImage;
var fuelImage, fuels;  
var bgstart;





function preload(){
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  lifeImage = loadImage("./assets/life.png");
  blastImage = loadImage("./assets/blast.png");

}

function setup(){
 canvas =  createCanvas(windowWidth,windowHeight);
 database = firebase.database();
 game = new Game();
 game.getStart();
 game.start();
 bg = bgstart;

 
}

function draw() {
  background(bgstart);

 

}

 function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
 }
