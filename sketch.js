const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var bg;
var log6;
var chain;
var tank;
var c1;
var cannon;
var comets= [];
var score= 0;
function preload(){
bg = loadImage("sprites/bg image.jpg");
}
function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
   
    cannon = new Cannon(100,700,50);
    tank = new Tank(100,750,30,30);
    //c1= new Comet(200,100,20);
  
}

function draw(){
    background(bg);
    Engine.update(engine);
    
   
    ground.display();
    cannon.display();
    tank.display();
    //c1.display();
    if(frameCount%60===0){
      comets.push(new Comet(random(100,900),random(10,50), 10) )
          }
    for (var j = 0; j < comets.length; j++) {
   
          comets[j].display();
          if(detectCollision(cannon,comets[j] )){
              World.remove(world,comets[j]);
          }
          
         // comets[j].explosion();
         /*
          if(detectCollision(cannon,comets[j] )){
             World.remove(world, comets[j].body);
          }
             
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            pop();}
           else{
           
           }
           */
      }

    
  //  line(bird.body.position.x, bird.body.position.y,log6.body.position.x, log6.body.position.y )
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
       tank.body.position.x = tank.body.position.x-10;
    }
    if(keyCode === RIGHT_ARROW){
        tank.body.position.x = tank.body.position.x+10;
     }
     if(keyCode === UP_ARROW){
        Matter.Body.setStatic(cannon.body,false)
        //make the velocity value random
        Matter.Body.setVelocity(cannon.body, {x:10,y:-10})
     }
     
}

function detectCollision(lcannon,lcomet){

  cometBodyPosition=lcomet.body.position
  cannonBodyPosition=lcannon.body.position
  
  var distance=dist(cannonBodyPosition.x, cannonBodyPosition.y, cometBodyPosition.x, cometBodyPosition.y)
 
  	if(distance<=lcomet.r+lcannon.r)
    {
        return true;
      //  World.remove(world,lcomet.body)
       // lcomet.explosion();
  	 // Matter.Body.setStatic(lmang.body,false);
    }

  }

/*
function mouseDragged(){
Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY })
}
function mouseReleased(){
chain.fly();
}
*/