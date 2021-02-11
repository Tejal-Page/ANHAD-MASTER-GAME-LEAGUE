class Cannon {
    constructor(x, y, r) {
      var options = {
          isStatic:true,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      //this.image=loadImage("sprites/c1.png");

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(RADIUS);
      strokeWeight(4);
      stroke("green");
      fill(255);
      ellipse(0, 0, this.r, this.r);
      //image(this.image, 0,0,this.r,this.r)
      pop();
    }
  }