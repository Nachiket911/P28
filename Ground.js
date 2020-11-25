class Earth{

    constructor(){

        this.body = Bodies.rectangle(400, 100, 20, 20, {isStatic:false});
        World.add(world, this.body);    
       
    } 

display(){

    push();

    var boxSprite1 = createSprite(width/2,670,width,20);
    boxSprite1.shapeColor = rgb(255,255,255);
                      
    pop();

}

}