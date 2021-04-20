// name spacing 

const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;


var engine, world, ground, ball;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world=engine.world ;
  // ground body 
var object_options={
isStatic:true

}
ground= Bodies.rectangle(201,391,400,50,object_options);
World.add(world,ground);
console.log(ground);

var ball_options = {
  restitution:1,
  density:.04
}


ball = Bodies.circle(200,70,20,ball_options);
World.add(world,ball);
console.log(ball);

 
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
 
}