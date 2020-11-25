class Vriksh{

    constructor(){

        this.body = Bodies.rectangle(400, 500, 20, 20, {isStatic:false});
        World.add(world, this.body);    
       
    }

display(){

    push();

    var round = createSprite(73,670,1,20);
    round.shapeColor = rgb(6,1,5);
                      
    pop();

}

}