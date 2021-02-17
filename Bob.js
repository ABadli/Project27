class Bob {
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 1,
            friction : 0,
            density : 0.8
        }
        this.x = x;
        this.y = y;
        console.log("Bob" +this.x);
        this.body =Bodies.circle(this.x,this.y,50,options);
        World.add(world,this.body)
    }

    display(){

       // console.log("Bob display");
        var pos = this.body.position;
       // console.log(this.body);
       // console.log("Bob: " +pos.x+" "+pos.y);
        push();
    
        translate(pos.x, pos.y);
       // rotate(this.body.angle);
        rectMode(CENTER);
    
        fill("yellow");
        ellipse(0, 0, 100, 100);
        pop();
        
    }

}