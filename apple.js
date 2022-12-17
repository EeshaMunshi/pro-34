class apple {
    constructor(x,y,r){
        var options={
        
            friction:0.4,
            density:0.5,
           restitution:0.2,
        }
        this.x=x;
        this.y=y;
        this.r=r;

        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
    }
}