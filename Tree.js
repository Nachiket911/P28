class Vriksh{

    constructor(){

        this.body = Bodies.rectangle(400, 500, 20, 20, {isStatic:false});
        World.add(world, this.body);    
       
    }

display(){

    push();

    fill(20,20,20);
    var plant = rect(73,670,1,20);   
                      
    pop();

}

}
