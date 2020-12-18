class Earth{

    constructor(){

        this.body = Bodies.rectangle(400, 100, 20, 20, {isStatic:false});
        World.add(world, this.body);    
       
    } 

display(){

    push();

    fill(20,20,20);
    var ground = rect(width/2,670,width,20);    
    
    pop();

}

}
