class Polygon {
    constructor (x,y,width,height) {
        var polygonoptions = {
            isStatic: true,
            friction: 0.1,
            density: 0.2
        }
        this.body = Bodies.rectangle(x,y,width,height,polygonoptions);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("yellow hexagon.png");
        World.add(world,this.body);
    }

    display() {
       
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);

    }
}