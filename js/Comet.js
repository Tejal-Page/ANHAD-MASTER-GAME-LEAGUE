class Comet {
    constructor(x, y, r) {
      var options = {
        restitution :0,
        friction :1,
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      
      var rand = Math.round(random(1,4))
      switch(rand){
        case 1: this.image=loadImage("sprites/c1.png");
        break;
        case 2: this.image=loadImage("sprites/c2.png");
        break; 
        case 3: this.image=loadImage("sprites/c3.png");
        break;
        case 4: this.image=loadImage("sprites/c4.png");
        break;
        default: break;
    }
    this.Visiblity= 255;  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS)
     // imageMode(RADIUS);
      //strokeWeight(4);
      //stroke("green");
      //fill(255);
      ellipse(0, 0, this.r, this.r);
     // image(this.image, random(10,900),random(10,50),this.r,this.r)
      //image(this.image, 0,0,this.r*5,this.r*5)
      pop();
    }
    explosion(){
    // World.remove(world, this.body);
    if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
    }
  }