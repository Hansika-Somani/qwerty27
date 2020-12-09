const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var rope;
var bobObj;
var roof;


function setup(){
	var canvas = createCanvas(1200,800);
	
    engine = Engine.create();
    world = engine.world;


    roof = new Roof(460,180,370,55);
	bobObj1= new Bob(320,500,70);
	bobObj2= new Bob(390,500,70);
	bobObj3= new Bob(460,500,70);
	bobObj4= new Bob(530,500,70);
	bobObj5= new Bob(600,500,70);

	rope1 = new Rope(bobObj3.body,roof.body,-70*2,0)
	rope2 = new Rope(bobObj2.body,roof.body,-70*2,0)
	rope3 = new Rope(bobObj1.body,roof.body,-70*2,0)
	rope4 = new Rope(bobObj4.body,roof.body,-70*2,0)
	rope5 = new Rope(bobObj5.body,roof.body,-70*2,0)

	Engine.run(engine);
}

function draw(){
	rectMode(CENTER)
	background(230);
	
    Engine.update(engine);
    
	roof.display();
    bobObj1.display();
	bobObj2.display();
	bobObj3.display();
	bobObj4.display();
	bobObj5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

}





