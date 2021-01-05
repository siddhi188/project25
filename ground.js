class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      var position =this.body.position;
      rectMode(CENTER);
      strokeWeight(4)
      stroke("green")
      fill("green");
      rect(position.x,position.y, this.width, this.height);
    }
  };