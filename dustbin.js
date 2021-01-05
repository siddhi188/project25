class Dustbin{
    constructor(x,y,width,height){
     var options={
     isStatic : true
     }
     this.img=loadImage("dustbingreen.png")
     this.body=Bodies.rectangle(x,y,width,height,options)
     this.width=width;
     this.height=height;
     World.add(world,this.body)
}
display(){
    var position=this.body.position;
    push();
    translate(position.x, position.y);
    imageMode(CENTER)
    image(this.img,0,0,this.width,this.height*8)
    pop();
    
}


}