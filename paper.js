class Paper{
    constructor(x,y,r)
    {var options={
     isStatic:false,
     restitution:0.6,
     friction:0.5,
     density:1.2
    }
    this.img=loadImage("paper.png")
    this.x=x
    this.y=y
    this.r=r
    this.body=Bodies.circle(this.x,this.y,this.r/2,options)
    World.add(world,this.body);

     
    }

    
    display(){
     var paperpos = this.body.position
     
     push()
     translate(paperpos.x,paperpos.y);
     imageMode(CENTER)
     image(this.img,0,0,this.r*2)
     pop()

    }
}