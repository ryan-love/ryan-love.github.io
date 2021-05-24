function Wall() {

    let walls = [];
//User
    walls[0] = new Boundary(boxA.vertices[0].x, boxA.vertices[0].y, boxA.vertices[1].x, boxA.vertices[1].y);
    walls[1] = new Boundary(boxA.vertices[1].x, boxA.vertices[1].y, boxA.vertices[2].x, boxA.vertices[2].y);
    walls[2] = new Boundary(boxA.vertices[2].x, boxA.vertices[2].y, boxA.vertices[3].x, boxA.vertices[3].y);
    walls[3] = new Boundary(boxA.vertices[3].x, boxA.vertices[3].y, boxA.vertices[0].x, boxA.vertices[0].y);
// Main Box
    walls[4] = new Boundary(100, 100, 700, 100);
    walls[5] = new Boundary(700, 100, 700, 700);
    walls[6] = new Boundary(700, 700, 100, 700);
    walls[7] = new Boundary(100, 700, 100, 100);
// Room 1 First Floor
    walls[8] = new Boundary(100, 300, 300, 300);
    walls[9] = new Boundary(300, 300, 300, 200);
    walls[10] = new Boundary(300, 100, 300, 150);
// Room 2 First Floor
    walls[11] = new Boundary(700, 400, 500, 400);
    walls[12] = new Boundary(500, 400, 500, 200);
    walls[13] = new Boundary(500, 100, 500, 150);
// Room 3 First Floor
    walls[14] = new Boundary(100, 400, 450, 400);
// Stairs First Floor
    walls[15] = new Boundary(300, 300, 300, 350);
    walls[16] = new Boundary(100, 400, 450, 400);
// Room 1 Second Floor
    walls[17] = new Boundary(100, 400, 700, 400);
// Room 2 Second Floor
    walls[18] = new Boundary(100, 300, 300, 300);
    walls[19] = new Boundary(300, 300, 300, 200);
    walls[20] = new Boundary(300, 100, 300, 150);
// Room 3 Second Floor
    walls[21] = new Boundary(700, 400, 500, 400);
    walls[22] = new Boundary(500, 400, 500, 200);
    walls[23] = new Boundary(500, 100, 500, 150);
// Stairs Second Floor
    walls[24] = new Boundary(300, 300, 300, 350);
    walls[25] = new Boundary(100, 400, 450, 400);


    walls.push(new Boundary(-1, -1, width, -1));
    walls.push(new Boundary(width, -1, width, height));
    walls.push(new Boundary(width, height, -1, height));
    walls.push(new Boundary(-1, height, -1, -1));

}