const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1920,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,720,70,70);
    box2 = new Box(1000,720,70,70);
    pig1 = new pig(900, 720);    
    ground = new Ground(960,height,1920,20)
    log1 = new Log(900, 690, 300, PI / 2);
    box3 = new Box(800, 670, 70, 70);
    box4 = new Box(1000, 670, 70, 70);
    pig2 = new pig(900, 670);
    log2 = new Log(900,650, 300, PI / 2);
    box5 = new Box(900, 600, 70, 70);
    log3 = new Log(820, 620, 150, PI / 7);
    log4 = new Log(980, 620, 150, -PI / 7);
    bird = new Bird(100, 100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}