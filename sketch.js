const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball;
var ground, left_side, right_side;
var radius = 40;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options = {
		isStatic:false,
        restitution:0.3,
		friction:0,
		density:1.2
	}

    ball = Bodies.circle(260,100,radius/20,ball_options);
    World.add(world, ball);

	ground = new Ground(width/2, 670, width, 20);
	left_side = new Ground(1100, 600, 20, 120);
	right_side = new Ground(1350,600, 20, 120);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius);
  ground.show();
  left_side.show();
  right_side.show();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x:85, y:-85});
	}
}