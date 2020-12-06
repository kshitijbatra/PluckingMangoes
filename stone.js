class Stone{
    constructor(x,y,r){
   var options={
    isStatic:false,
    restitution:0,
    friction:1,
    density:1.2
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Matter.Bodies.circle(this.x,this.y,this.r,options);
    this.image = loadImage("sprites/stone.png");
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