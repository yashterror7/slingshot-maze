class Chain{

    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:1,
            stiffness:0.04
          }
          this.chain=Constraint.create(options);
          this.pointB=pointB;
    World.add(world,chain);  
}
display(){   
    if(this.chain.bodyA){ strokeWeight(3);
    stroke("white");
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,
        this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }
}
fly(){
    this.chain.bodyA=null;
    }
}