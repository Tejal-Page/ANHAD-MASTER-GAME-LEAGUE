class Chain{
    constructor(bA,pB){
    var coptions = {
        lenght:200,
        stiffness:0.04,
        bodyA:bA,
        pointB:pB
        
    }
    this.body= Constraint.create(coptions);
    World.add(world,this.body);
    }
    display(){
        if(this.body.bodyA){
        var posA= this.body.bodyA.position
        //x n y
        var pntB= this.body.pointB
        line(posA.x,posA.y,pntB.x, pntB.y);
        }
    }

    fly(){
        this.body.bodyA=null;
    }
}
/*
//CONNECTING 2 BODIES
class Chain{
    constructor(bA,bB){
    var coptions = {
        lenght:200,
        stiffness:0.04,
        bodyA:bA,
        bodyB:bB
    }
    this.body= Constraint.create(coptions);
    World.add(world,this.body);
    }
    display(){
        
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.bodyB.position.x,this.body.bodyB.position.y)
    }
}
*/