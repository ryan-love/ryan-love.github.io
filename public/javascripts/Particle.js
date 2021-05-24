// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/145-2d-ray-casting.html
// https://youtu.be/TOEi6T2mtHo

// 2D Ray Casting

class Particle {
    constructor() {
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

        let int = (Math.pow(100,2)*4*Math.PI).toFixed(2)/10

        for (let i = 0; i < this.rays.length; i++) {
            const ray = this.rays[i];
            let closest = null;
            let record = int;
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
                line(this.pos.x, this.pos.y, closest.x, closest.y);



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
