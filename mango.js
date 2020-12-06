class Mango{
    constructor(x,y,r){
   var options={
    isStatic:true,
    restitution:0,
    friction:1,
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Matter.Bodies.circle(this.x,this.y,this.r/2,options);
    this.image = loadImage("sprites/mango.png");
    World.add(world,this.body);

    }
    display(){
        var paperPos=this.body.position;
        push();
        strokeWeight(3);
        fill(255,0,255);
        image(this.image,paperPos.x,paperPos.y,this.r,this.r);
        pop();
    }
}