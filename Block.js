class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("block.png")
      World.add(world, this.body);
      this.Visibility=225
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      if(this.body.speed<5){
      rect(pos.x,pos.y,this.width, this.height);
    
      imageMode(CENTER)
      image(this.image,pos.x,pos.y,30,40)
      }
      else{
        World.remove(world,this.body)
        push()
        this.Visibility=this.Visibility-8
        tint(225,this.Visibility)
        imageMode(CENTER)
      image(this.image,pos.x,pos.y,30,40)
      pop();
      }
    }
}