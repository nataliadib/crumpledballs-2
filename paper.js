class paper {
    constructor(x, y,radius) {
        var options = {
            'restitution':0,
            'friction':0.8,
            'density':1.5
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image=loadImage("paper.png");
        World.add(world, this.body);
    }

    display() {
        var pos =this.body.position;
        push()
        translate(pos.x, pos.y);
        strokeWeight(4);
        fill(255)
        imageMode(CENTER);
        image(this.image, 0, 0, 60, 60);
        pop()
    }
};