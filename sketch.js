const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;
var stone, rubber, iron, hammer;

function setup() {
    
    createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,10);
    hammer = new Hammer(10,100)
    iron = new Iron(300,350);
    rubber=new Rubber(900,450,70);
    stone = new Stone(700,320,100,100);
    

}

function draw() {

    background("lightblue");
    Engine.update(engine);
    ground.display();
    stone.display();
    rubber.display();
    iron.display();
    hammer.display();
}