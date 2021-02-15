class Bob {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      
      World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
      rectMode(CENTER);
      strokeWeight(4)
      stroke("blue")
      fill(155);
      ellipse(0, 0, this.radius)
      pop();
    }
  };
  