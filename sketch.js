const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundImg;
var engine,world;
var snow = []

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  
}
function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

 engine = Engine.create();
 world = engine.world;

}

function draw() {
  background(backgroundImg);  
  
  Engine.update(engine);

  if(frameCount%5 === 0){
     snow.push(new Snow(random(0,800),30,30 ));
  }

  for(var j=0; j<snow.length; j++){
snow[j].display();
  }
 // drawSprites();
}