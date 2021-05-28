let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
    Body = Matter.Body
    Composite = Matter.Composite,
        Composites = Matter.Composites
    Events = Matter.Events,
        SAT = Matter.SAT
let engine = Engine.create();
let world = engine.world
let light
let boxA
let ground
let way
let boxes = []
let osc, playing, freq, amp;
let Points = []
let walls = [];
let point = []
let particle;
let xoff = 0;
let yoff = 10000;
let nR = []




//REMOVE OR SOLVE LATER
/*
function noScroll() {
    window.scrollTo(0, 0);
}

// add listener to disable scroll
window.addEventListener('scroll', noScroll);
*/



    function setup(){



        createCanvas(displayWidth, 800);


        boxes.push(boxA = Bodies.rectangle(400, 200, 10, 10,{isStatic: true}),
            boxB = Bodies.rectangle(100, 200, 80, 80,{
                isStatic: true
            }),
            Bodies.rectangle(300, 200, 80, 80,{
                isStatic: true
            }))

        ground = Bodies.rectangle(200, 610, width, 60, { isStatic: true })

            //User
            walls[0] = new Boundary(boxA.vertices[0].x,boxA.vertices[0].y,boxA.vertices[1].x,boxA.vertices[1].y);
            walls[1] = new Boundary(boxA.vertices[1].x,boxA.vertices[1].y,boxA.vertices[2].x,boxA.vertices[2].y);
            walls[2] = new Boundary(boxA.vertices[2].x,boxA.vertices[2].y,boxA.vertices[3].x,boxA.vertices[3].y);
            walls[3] = new Boundary(boxA.vertices[3].x,boxA.vertices[3].y,boxA.vertices[0].x,boxA.vertices[0].y);
            // Main Box
            walls[4] = new Boundary(100,100,displayWidth-100,100);
            walls[5] = new Boundary(displayWidth-100,100,displayWidth-100,700);
            walls[6] = new Boundary(displayWidth-100,700,100,700);
            walls[7] = new Boundary(100,700,100,100);






        walls.push(new Boundary(-1, -1, width, -1));
        walls.push(new Boundary(width, -1, width, height));
        walls.push(new Boundary(width, height, -1, height));
        walls.push(new Boundary(-1, height, -1, -1));


        pM = new Particle1();
        l1 = new Particle1();
        l2 = new Particle1();
        l3 = new Particle1();
        l4 = new Particle1();
        l5 = new Particle1();
        l6 = new Particle1();
        l7 = new Particle2();
        l8 = new Particle1();




/*
        light = new Light(150,300)
        console.log(light)
        light.setNetwork("192.168.0.1",true,100)
        light.setBulb(75,0.81)
        light.r=light.showIntense()
        console.log(light.showLightDistance())

 */

        way = new Waypoints("Test",random(150,650),random(150,650),40)
          let coffee = point.push(new Waypoints("Coffee",400,350,40,"images/E0C6_color.png"))
        let bacon = point.push(new Waypoints("Bacon",600,500,40,"images/1F953_color.png"))
        let butter= point.push(new Waypoints("Butter",550,250,40,"images/1F9C8_color.png"))
        let bread= point.push(new Waypoints("Bread",350,600,40,"images/1F35E_color.png"))
        let meat= point.push(new Waypoints("Meat",700,500,40,"images/1F969_color.png"))
        let pasta= point.push(new Waypoints("Pasta",300,600,40,"images/1F35D_color.png"))
        let garlic= point.push(new Waypoints("Garlic",700,350,40,"images/1F9C4_color.png"))
        let onion= point.push(new Waypoints("Onion",750,350,40,"images/1F9C5_color.png"))
        let carrot= point.push(new Waypoints("Carrot",800,250,40,"images/1F955_color.png"))
        let herbs= point.push(new Waypoints("Herbs",750,250,40,"images/1F33F_color.png"))
        let milk= point.push(new Waypoints("Milk",400,250,40,"images/1F95B_color.png"))
        let sandwich= point.push(new Waypoints("Sandwich",50,50,40,"images/1F96A_color.png"))
        let veg = point.push(new Waypoints("Green Veg",700,250,40,"images/1F96C_color.png"))



        Engine.run(engine)
        World.add(world,[ground,boxes,way.body])
        for (let i = 0; i < pM.rays.length ; i++) {
            nR.push(Matter.Body.create(pM.rays[i]))
        }


    }
    function mouseDragged () {
        Body.setPosition(boxA,{x:mouseX,y:mouseY})
        if (boxA.vertices){
            walls[0].update(boxA.vertices[0].x,boxA.vertices[0].y,boxA.vertices[1].x,boxA.vertices[1].y)
            walls[1].update(boxA.vertices[1].x,boxA.vertices[1].y,boxA.vertices[2].x,boxA.vertices[2].y)
            walls[2].update(boxA.vertices[2].x,boxA.vertices[2].y,boxA.vertices[3].x,boxA.vertices[3].y)
            walls[3].update(boxA.vertices[3].x,boxA.vertices[3].y,boxA.vertices[0].x,boxA.vertices[0].y)
        }



        //light = new Light([boxA],{ x: 400, y: 200 },{ x: mouseX, y: mouseY })
       // light.eP = {x:mouseX,y:mouseY}
    }



    function sound(){
        //const bias = -((Math.round(700 / 2) - mouseX) / 700) * 2 ;
        const sound = new Howl({ src: ["/javascripts/beep.wav"],volume:0,/*stereo:
            bias,*/ onend: function() {
                console.log('Finished!');
            }});

        var id = sound.play();



        sound.pos(way.body.position.x, way.body.position.y,1,id )
        sound.volume(1, id);
        sound.pannerAttr({
            panningModel: 'HRTF',
            refDistance: 10,
            rolloffFactor: 1,
            distanceModel: 'exponential'
        },id)

        Howler.pos(mouseX,mouseY,1)





    }

    function keyPressed() {
        if (keyCode === ENTER) {
            sound()
        }

        if (keyCode === BACKSPACE){
            // Room 1 Second Floor
            walls[17].update(2000,2000,2000,2000)
            // Room 2 Second Floor
            walls[18].update(2000,2000,2000,2000)
            walls[19].update(2000,2000,2000,2000)
            walls[20].update(2000,2000,2000,2000)
            // Room 3 Second Floor
            walls[21].update(2000,2000,2000,2000)
            walls[22].update(2000,2000,2000,2000)
            walls[23].update(2000,2000,2000,2000)
            // Stairs Second Floor
            walls[24].update(2000,2000,2000,2000)
            walls[25].update(2000,2000,2000,2000)
        }

        if(keyCode === SHIFT){
            // Room 1 First Floor
            walls[8].update(2000,2000,2000,2000)
            walls[9].update(2000,2000,2000,2000)
            walls[10].update(2000,2000,2000,2000)
            // Room 2 First Floor
            walls[11].update(2000,2000,2000,2000)
            walls[12].update(2000,2000,2000,2000)
            walls[13].update(2000,2000,2000,2000)
            // Room 3 First Floor
            walls[14].update(2000,2000,2000,2000)
            walls[15].update(2000,2000,2000,2000)
            walls[16].update(2000,2000,2000,2000)
            // Room 1 Second Floor
            walls[17] = new Boundary(100,400,700,400);
            // Room 2 Second Floor
            walls[18] = new Boundary(100,300,300,300);
            walls[19] = new Boundary(300,300,300,200);
            walls[20] = new Boundary(300,100,300,150);
            // Room 3 Second Floor
            walls[21] = new Boundary(700,400,500,400);
            walls[22] = new Boundary(500,400,500,200);
            walls[23] = new Boundary(500,100,500,150);
            // Stairs Second Floor
            walls[24] = new Boundary(300,300,300,350);
            walls[25] = new Boundary(100,400,450,400);

        }



    }

    function draw(){
        for (let i = 0; i < Points.length; i++) {
            Points[i].render()
        }
        if(keyIsDown(LEFT_ARROW)){
            /*
            if (boxA.vertices){
                walls[0].update(boxA.vertices[0].x,boxA.vertices[0].y,boxA.vertices[1].x,boxA.vertices[1].y)
                walls[1].update(boxA.vertices[1].x,boxA.vertices[1].y,boxA.vertices[2].x,boxA.vertices[2].y)
                walls[2].update(boxA.vertices[2].x,boxA.vertices[2].y,boxA.vertices[3].x,boxA.vertices[3].y)
                walls[3].update(boxA.vertices[3].x,boxA.vertices[3].y,boxA.vertices[0].x,boxA.vertices[0].y)
            }

             */

                Body.setPosition(boxA,{x:boxA.position.x - 10,y:boxA.position.y})


        }
        if(keyIsDown(RIGHT_ARROW)){
            /*
            if (boxA.vertices){
                walls[0].update(boxA.vertices[0].x,boxA.vertices[0].y,boxA.vertices[1].x,boxA.vertices[1].y)
                walls[1].update(boxA.vertices[1].x,boxA.vertices[1].y,boxA.vertices[2].x,boxA.vertices[2].y)
                walls[2].update(boxA.vertices[2].x,boxA.vertices[2].y,boxA.vertices[3].x,boxA.vertices[3].y)
                walls[3].update(boxA.vertices[3].x,boxA.vertices[3].y,boxA.vertices[0].x,boxA.vertices[0].y)
            }

             */

                Body.setPosition(boxA, {x: boxA.position.x + 10, y: boxA.position.y})

        }
        if(keyIsDown(UP_ARROW)){
            /*
            if (boxA.vertices){
                walls[0].update(boxA.vertices[0].x,boxA.vertices[0].y,boxA.vertices[1].x,boxA.vertices[1].y)
                walls[1].update(boxA.vertices[1].x,boxA.vertices[1].y,boxA.vertices[2].x,boxA.vertices[2].y)
                walls[2].update(boxA.vertices[2].x,boxA.vertices[2].y,boxA.vertices[3].x,boxA.vertices[3].y)
                walls[3].update(boxA.vertices[3].x,boxA.vertices[3].y,boxA.vertices[0].x,boxA.vertices[0].y)
            }

             */
            Body.setPosition(boxA,{x:boxA.position.x,y:boxA.position.y - 10})
        }


        if(keyIsDown(DOWN_ARROW)){
            /*if (boxA.vertices){
                walls[0].update(boxA.vertices[0].x,boxA.vertices[0].y,boxA.vertices[1].x,boxA.vertices[1].y)
                walls[1].update(boxA.vertices[1].x,boxA.vertices[1].y,boxA.vertices[2].x,boxA.vertices[2].y)
                walls[2].update(boxA.vertices[2].x,boxA.vertices[2].y,boxA.vertices[3].x,boxA.vertices[3].y)
                walls[3].update(boxA.vertices[3].x,boxA.vertices[3].y,boxA.vertices[0].x,boxA.vertices[0].y)
            }

             */

            Body.setPosition(boxA,{x:boxA.position.x,y:boxA.position.y + 10})
        }


        background(70,71,79);

        for (let wall of walls) {
            wall.show();
        }
        /*

        if (walls[0].a.x < 0 && boxA.vertices[0].x < 0){
            walls[0].a.x  = walls[0].a.x + 50

        }
        if (walls[0].b.x < 0 && boxA.vertices[0].x < 0){
            walls[0].b.x  = walls[0].b.x + 50

        }
        if (walls[1].a.x < 0 && boxA.vertices[1].x < 0){
            walls[1].a.x  = walls[1].a.x + 50

        }
        if (walls[1].b.x < 0 && boxA.vertices[1].x < 0){
            walls[1].b.x  = walls[1].b.x + 50

        }
        if (walls[2].a.x < 0 && boxA.vertices[2].x < 0){
            walls[2].a.x  = walls[2].a.x + 50

        }
        if (walls[2].b.x < 0 && boxA.vertices[2].x < 0){
            walls[2].b.x  = walls[2].b.x + 50

        }
        if (walls[3].a.x < 0 && boxA.vertices[3].x < 0){
            walls[3].a.x  = walls[3].a.x + 50

        }
        if (walls[3].b.x < 0 && boxA.vertices[3].x < 0){
            walls[3].b.x  = walls[3].b.x + 50

        }

         */



       // particle.update(noise(xoff) * width, noise(yoff) * height);

        l8.update(100,100);
        l8.show();
        l8.look(walls)


        /*
        l8.update(190,350);
        l8.show();
        l8.look(walls)
        l1.update(190,200);
        l1.show();
        l1.look(walls)

        l2.update(190,200);
        l2.show();
        l2.look(walls)
        l3.update(590,250);
        l3.show();
        l3.look(walls)
        l4.update(590,250);
        l4.show();
        l4.look(walls)
        l5.update(390,250);
        l5.show();
        l5.look(walls)
        l6.update(390,250);
        l6.show();
        l6.look(walls)
        l7.update(390,550);
        l7.show();
        l7.look(walls)

         */

/*
        pM.update(mouseX,mouseY);
        pM.show();
        pM.look(walls)

 */


        xoff += 0.01;
        yoff += 0.01;


      //  light.show()
        if(SAT.collides(boxA,way.body).collided === true){
            console.log("Hello")
        }


        for(let i = 0; i<boxes.length;i++) {
            let c = color(82,204,165);
            fill(c);
            noStroke()
            let r = rect(boxA.vertices[0].x, boxA.vertices[0].y, 25, 25,10)


        }

        if ( boxA.vertices[0].x < 0){
            boxA.vertices[0].x = boxA.vertices[0].x + 5
        }
        if ( boxA.vertices[0].x > width){
            boxA.vertices[0].x = boxA.vertices[0].x - 5
        }
        if ( boxA.vertices[0].y < 0){
            boxA.vertices[0].y = boxA.vertices[0].y + 5
        }
        if ( boxA.vertices[0].y > height ){
            boxA.vertices[0].y = boxA.vertices[0].y - 5
        }
        if ( boxA.vertices[1].x < 0){
            boxA.vertices[1].x = boxA.vertices[1].x + 5
        }
        if ( boxA.vertices[1].x > width){
            boxA.vertices[1].x = boxA.vertices[1].x - 5
        }
        if ( boxA.vertices[1].y < 0){
            boxA.vertices[1].y = boxA.vertices[1].y + 5
        }
        if ( boxA.vertices[1].y > height ){
            boxA.vertices[1].y = boxA.vertices[1].y - 5
        }
        if ( boxA.vertices[2].x < 0){
            boxA.vertices[2].x = boxA.vertices[2].x + 5
        }
        if ( boxA.vertices[2].x > width){
            boxA.vertices[2].x = boxA.vertices[2].x - 5
        }
        if ( boxA.vertices[2].y < 0){
            boxA.vertices[2].y = boxA.vertices[2].y + 5
        }
        if ( boxA.vertices[2].y > height ){
            boxA.vertices[2].y = boxA.vertices[2].y - 5
        }
        if ( boxA.vertices[3].x < 0){
            boxA.vertices[3].x = boxA.vertices[3].x + 5
        }
        if ( boxA.vertices[3].x > width){
            boxA.vertices[3].x = boxA.vertices[3].x - 5
        }
        if ( boxA.vertices[3].y < 0){
            boxA.vertices[3].y = boxA.vertices[3].y + 5
        }
        if ( boxA.vertices[3].y > height ){
            boxA.vertices[3].y = boxA.vertices[3].y - 5
        }


        for (let i = 0; i < point.length ; i++) {
            point[i].render()
            if (point[0].body.id < point[1].body.id){
                //sound()
            }

        }
        /*
        let c = get(0,0)
        if(c[0]== 255){
            console.log(255)
        }

         */






    }

