function Waypoints(x=0,y = 0,r=0){

    this.body = Matter.Bodies.circle(x, y, r, {isStatic: true}, r * 4)


    this.render = ()=>{
        push()
        fill(200)
        ellipse(this.body.position.x,this.body.position.y,r)
        pop()
    }




}