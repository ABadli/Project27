class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX,y:this.offsetY},
          
        }
        
       
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    

    display(){
       
       
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
           
          // console.log("PointA: "+ pointA.x+" "+pointA.y);
          //  console.log("PointB: "+ pointB.x+" "+pointB.y);
         //   console.log(this.offsetX);
         //   console.log(this.offsetY);
            stroke("black");
            strokeWeight(3);
            
            line(pointA.x, pointA.y, pointB.x+this.offsetX,pointB.y+this.offsetY);
           /* if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }*/
           
            
         
    
    }
    
}