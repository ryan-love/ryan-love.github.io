class Ray {
    constructor(p, a) {
        this.pos = p;
        this.d = p5.Vector.fromAngle(a)

    }


    show() {
        stroke(255);
        push();
        //TRANSLATE CONTROLS THE RAYS POSITION
        translate(this.pos.x, this.pos.y);
        line(0, 0, this.d.x * 10, this.d.y * 10);
        pop();

    }





    cast(b) {
        const x1 = b.a.x;
        const y1 = b.a.y;
        const x2 = b.b.x;
        const y2 = b.b.y;

        const x3 = this.pos.x;
        const y3 = this.pos.y;
        const x4 = this.pos.x + this.d.x;
        const y4 = this.pos.y + this.d.y;

        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        den == 0 ? undefined:"ERROR";
       /* let MatrixProd = (A, B) =>
            A.map((row, i) =>
                B[0].map((_, j) =>
                    row.reduce((acc, _, n) =>
                        acc + A[i][n] * B[n][j], 0

                    )
                )
            )
            */


        let te = [[x1 - x3],[y3 - y4]]
        let tee = [[(y1 - y3)],[(x3 - x4)]]

        //console.log(MatrixProd(te,tee));

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
        if (t > 0 && t < 1 && u > 0) {

            const pt = {x:x1 + t * (x2 - x1),y:y1 + t * (y2 - y1),collided:true};
            if (pt.collided === true){

            }
            return pt;
        } else {
            return false
        }
    }

}
