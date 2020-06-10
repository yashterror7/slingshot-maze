class Box {
    constructor(x,y,width,height){
        var options={
    
                    restitution:1.0,
                    friction:1.0,
                    density:0.4
                }
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
World.add(world,this.body);
    display (){
      var pos = this.body.position;
      fill("white");
      rectMode(CENTRE);
      rect(pos.x,pos.y,this,height,this.width);
      var angle=this.body.angle;
 angleMode(RADIANS);
 push();
 translate(pos.x,pos.y);
 rotate(angle);
rectMode(CENTER);
 rect(0,0, this.width,this.height);
 pop();
    }
}