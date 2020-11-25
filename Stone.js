class Stone{

    constructor(){

        this.body = Bodies.circle(400, 700, 20, {isStatic:false});
        World.add(world, this.body);    
       
    }

display(){

    push();

    var round = createSprite(width/2,670,width,20);
    round.shapeColor = rgb(2,21,22);
                      
    pop();

}

}