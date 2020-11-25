
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, stone, ground;

function preload(){


	
}

function setup() {

	createCanvas(1000,700);

	engine = Engine.create();
	world = engine.world;

	tree = new Vriksh();
	stone = new Stone();
	ground = new Earth();

	Engine.run(engine);
  
}

function draw() {
	
	rectMode(CENTER);

	background(0);
  
	tree.display();
	stone.display();
	ground.display();

	drawSprites();
 
}