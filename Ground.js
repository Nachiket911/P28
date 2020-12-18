class Stone{

    constructor(){

        this.body = Bodies.circle(400, 700, 20, {isStatic:false});
        World.add(world, this.body);    
       
    }

display(){

    push();

    fill(20,20,20);
    var rock = rect(2,70,4,20);    
                      
    pop();

}

}
