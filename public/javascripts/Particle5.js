

class Particle5 {
    constructor() {
        this.ip = "192.168.0.5"
        this.pos = createVector(width / 2, height / 2)
        this.rays = [];
        for (let a = 0; a < 360; a += 2.5) {
            this.rays.push(new Ray(this.pos, radians(a)));
        }


    }

    update(x, y) {
        this.pos.set(x, y);

    }

    look(walls) {
        var src = document.getElementById("color5");
        document.getElementById("ip5").innerHTML = this.ip
        var ip = document.getElementById("ip");
        let int = 98000 / Math.hypot(this.pos.x - boxA.position.x, this.pos.y - boxA.position.y)
        let kel =  Math.hypot(this.pos.x - boxA.position.x, this.pos.y - boxA.position.y)

        for (let i = 0; i < this.rays.length; i++) {
            const ray = this.rays[i];
            let closest = null;
            let record =Infinity;
            for (let wall of walls) {
                const pt = ray.cast(wall);
                if (pt) {
                    const d = Math.hypot(this.pos.x - pt.x, this.pos.y - pt.y);
                    if (d < record) {
                        record = d;
                        closest = pt;

                    }
                }
            }
            if (closest) {

                stroke(248,249,252, 100);
                if (kel < 199){
                    src.children.item(1).setAttribute("fill","#FCEA2B")
                    textSize(10)
                    text(this.ip,boxA.position.x - 30,boxA.position.y-10)
                    stroke(0, 100);
                    //line(this.pos.x, this.pos.y,  boxA.position.x,  boxA.position.y);
                }
                if (kel > 200){
                    src.children.item(1).setAttribute("fill","#fcf5a4")
                    textSize(10)
                    text(this.ip,boxA.position.x - 30,boxA.position.y-10)
                    stroke(100, 100);
                   // line(this.pos.x, this.pos.y,  boxA.position.x,  boxA.position.y);

                }
                if (kel > 500){
                    src.children.item(1).setAttribute("fill","#f7f5df")
                    textSize(10)
                    text(this.ip,boxA.position.x - 30,boxA.position.y-10)
                    stroke(200, 100);
                    //line(this.pos.x, this.pos.y,  boxA.position.x,  boxA.position.y);
                }

                //line(this.pos.x, this.pos.y,  closest.x, closest.y);




            }
        }
    }





    show() {
        fill(255);
        ellipse(this.pos.x, this.pos.y,4 );
        for (let ray of this.rays) {
            ray.show();
        }
    }


}
