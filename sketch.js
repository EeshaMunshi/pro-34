
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var engine, world;
var boy;
var boyImg, boyCry;

function preload() {
  boyImg = loadImage("boy1.png")
  boyCry = loadImage("boycry.png")
}

function setup() {
  createCanvas(400, 600);

  engine = Engine.create();
  world = engine.world;
  var options = { isStatic: true }
  ground = Bodies.rectangle(200, 590, 400, 20, options)
  boy = createSprite(200, 500, 50, 80)
  boy.addImage("boy", boyImg)
  boy.addImage("cry", boyCry)
  boy.changeImage("boy")
  boy.scale = 0.4;
  World.add(world, ground);
}


function draw() {
  background(51);
  fill("red");
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 20)
  drawSprites();
}

