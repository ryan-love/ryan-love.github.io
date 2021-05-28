function Waypoints(id,x=0,y = 0,r=0,img){
    this.id = id;
    this.body = Matter.Bodies.circle(x, y, r, {isStatic: true}, r * 4)
    let icon = loadImage(img);

    this.render = ()=>{
        push()
        image(icon,x,y,30,30)
        pop()
    }




}