class Paper {
    constructor(x,y,radius){
        var options = {
            restitution : 0.5,
            friction : 0.5,
            density : 1.2

        }
        this.paperball = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.color = rgb(random(100,250),random(100,250),random(150,200));
        World.add(world,this.paperball);
    }

    display(){
       
        push();
        fill(this.color);
        ellipseMode(RADIUS);
        circle(this.paperball.position.x,this.paperball.position.y,this.radius);
        pop();
    }


}