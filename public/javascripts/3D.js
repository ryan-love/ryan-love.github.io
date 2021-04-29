function setup() {
    createCanvas(710, 400, WEBGL);
}

function draw() {
    background(250);
    lights();

    camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);

    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(70, 20);
    pop();


}