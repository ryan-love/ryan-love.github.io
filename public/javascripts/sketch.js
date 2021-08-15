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
let t0 , t1
let arr = []
let newArr = []
let id = window.crypto.getRandomValues(new Uint32Array(1))



//REMOVE OR SOLVE LATER
/*
function noScroll() {
    window.scrollTo(0, 0);
}

// add listener to disable scroll
window.addEventListener('scroll', noScroll);
*/



    function setup(){
        



        createCanvas(1600, 800);
        document.getElementById("id").innerHTML = id
        boxes.push(boxA = Bodies.rectangle(400, 200, 10, 10,{isStatic: false}),
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
            walls[4] = new Boundary(100,100,1500,100);
            walls[5] = new Boundary(1500,100,1500,700);
            walls[6] = new Boundary(1500,700,100,700);
            walls[7] = new Boundary(100,700,100,100);

        // Shop Walls
        walls[8] = new Boundary(200,200,600,200);
        walls[9] = new Boundary(800,200,1200,200);
        walls[10] = new Boundary(200,400,600,400);
        walls[11] = new Boundary(800,400,1200,400);
        walls[12] = new Boundary(200,600,600,600);
        walls[13] = new Boundary(800,600,1200,600);




        walls.push(new Boundary(-1, -1, width, -1));
        walls.push(new Boundary(width, -1, width, height));
        walls.push(new Boundary(width, height, -1, height));
        walls.push(new Boundary(-1, height, -1, -1));


        pM = new Particle1();
        l1 = new Particle1();
        l2 = new Particle2();
        l3 = new Particle3();
        l4 = new Particle4();
        l5 = new Particle5();
        l6 = new Particle6();
        l7 = new Particle7();
        l8 = new Particle8();




/*
        light = new Light(150,300)
        console.log(light)
        light.setNetwork("192.168.0.1",true,100)
        light.setBulb(75,0.81)
        light.r=light.showIntense()
        console.log(light.showLightDistance())

 */

          let coffee = point.push(new Waypoints("Coffee",400,350,40,"public/images/E0C6_color.png"))
        let bacon = point.push(new Waypoints("Bacon",850,550,40,"public/images/1F953_color.png"))
        let butter= point.push(new Waypoints("Butter",500,200,40,"public/images/1F9C8_color.png"))
        let bread= point.push(new Waypoints("Bread",300,550,40,"public/images/1F35E_color.png"))
        let meat= point.push(new Waypoints("Meat",1050,425,40,"public/images/1F969_color.png"))
        let pasta= point.push(new Waypoints("Pasta",500,425,40,"public/images/1F35D_color.png"))
        let garlic= point.push(new Waypoints("Garlic",850,350,40,"public/images/1F9C4_color.png"))
        let onion= point.push(new Waypoints("Onion",950,350,40,"public/images/1F9C5_color.png"))
        let carrot= point.push(new Waypoints("Carrot",1050,225,40,"public/images/1F955_color.png"))
        let herbs= point.push(new Waypoints("Herbs",950,225,40,"public/images/1F33F_color.png"))
        let milk= point.push(new Waypoints("Milk",500,350,40,"public/images/1F95B_color.png"))
        let sandwich= point.push(new Waypoints("Sandwich",400,425,40,"public/images/1F96A_color.png"))
        let veg = point.push(new Waypoints("Green Veg",850,225,40,"public/images/1F96C_color.png"))
        let value = point.push(new Waypoints("DONE",20000,30000,40,"public/images/1F96C_color.png"))



        Engine.run(engine)
        World.add(world,[ground,boxes,point])

        
        for (let i = 0; i < pM.rays.length ; i++) {
            nR.push(Matter.Body.create(pM.rays[i]))
        }
        


    }
    // function mouseDragged () {
    //     Body.setPosition(boxA,{x:mouseX,y:mouseY})
    //     if (boxA.vertices){
    //         walls[0].update(boxA.vertices[0].x,boxA.vertices[0].y,boxA.vertices[1].x,boxA.vertices[1].y)
    //         walls[1].update(boxA.vertices[1].x,boxA.vertices[1].y,boxA.vertices[2].x,boxA.vertices[2].y)
    //         walls[2].update(boxA.vertices[2].x,boxA.vertices[2].y,boxA.vertices[3].x,boxA.vertices[3].y)
    //         walls[3].update(boxA.vertices[3].x,boxA.vertices[3].y,boxA.vertices[0].x,boxA.vertices[0].y)
    //     }

    // }



    function sound(){
        //
        const bias = -((Math.round(700 / 2) - point[0].body.position.y) / 700) * 2 ;
        const sound = new Howl({ src: ["/javascripts/beep.wav"],volume:0.1,stereo:
            bias, onend: function() {
                console.log('Finished!');
            }});


        var id = sound.play();

        sound.once("play",()=>{
            sound.pos(point[0].body.position.x, point[0].body.position.y,1,id )
        sound.pannerAttr({
            panningModel: 'HRTF',
            refDistance: 0.3,
        rolloffFactor: 1,
        distanceModel: 'exponential'
        },id)
        })

        

        

       //Howler.pos(point[0].body.position.x, point[0].body.position.y,1,id)





    }

    function keyPressed() {
        if (keyCode === ENTER) {
            sound()
        }

       
        



    }

    function draw(){
        
        if(SAT.collides(boxA,point[0].body).collided){
            point.splice(0,1)
            t0 = Date.now()
            arr.push(t0)
            
            
        } if(SAT.collides(boxA,point[0].body).collided){
            point.splice(0,1)
           
            
        }


        if(SAT.collides(boxA,point[0].body).collided){
            point.splice(0,1)
        
        }if(SAT.collides(boxA,point[0].body).collided){

            point.splice(0,1)
            
        }if(SAT.collides(boxA,point[0].body).collided){
            point.splice(0,1)
            
        }if(SAT.collides(boxA,point[0].body).collided){
            point.splice(0,1)
            
        }if(SAT.collides(boxA,point[0].body).collided){
            point.splice(0,1)
            
        }if(SAT.collides(boxA,point[0].body).collided){
            point.splice(0,1)
           
        }if(SAT.collides(boxA,point[0].body).collided){
            point.splice(0,1)
            
        }if(SAT.collides(boxA,point[0].body).collided){
            point.splice(0,1)
            
        }if(SAT.collides(boxA,point[0].body).collided){
            point.splice(0,1)
            
        }if(SAT.collides(boxA,point[0].body).collided){
            point.splice(0,1)
            
        }if(SAT.collides(boxA,point[0].body).collided){
            point.splice(0,1)
           
        }
        if(point[0].id == "DONE"){
            console.log("DONE")
            t1 = Date.now()
            newArr.push(t1)
            textSize(300);
             textAlign(CENTER, CENTER);
            text(`${new Date(newArr[0])} - ${new Date(arr[0])}`,500,500)
            
        }
        


        
        for (let i = 0; i < Points.length; i++) {
            Points[i].render()
        }
        if(keyIsDown(LEFT_ARROW)){
            
            if (boxA.vertices){
                walls[0].update(boxA.vertices[0].x,boxA.vertices[0].y,boxA.vertices[1].x,boxA.vertices[1].y)
                walls[1].update(boxA.vertices[1].x,boxA.vertices[1].y,boxA.vertices[2].x,boxA.vertices[2].y)
                walls[2].update(boxA.vertices[2].x,boxA.vertices[2].y,boxA.vertices[3].x,boxA.vertices[3].y)
                walls[3].update(boxA.vertices[3].x,boxA.vertices[3].y,boxA.vertices[0].x,boxA.vertices[0].y)
            }

             

                Body.setPosition(boxA,{x:boxA.position.x - 10,y:boxA.position.y})


        }
        if(keyIsDown(RIGHT_ARROW)){
            
            if (boxA.vertices){
                walls[0].update(boxA.vertices[0].x,boxA.vertices[0].y,boxA.vertices[1].x,boxA.vertices[1].y)
                walls[1].update(boxA.vertices[1].x,boxA.vertices[1].y,boxA.vertices[2].x,boxA.vertices[2].y)
                walls[2].update(boxA.vertices[2].x,boxA.vertices[2].y,boxA.vertices[3].x,boxA.vertices[3].y)
                walls[3].update(boxA.vertices[3].x,boxA.vertices[3].y,boxA.vertices[0].x,boxA.vertices[0].y)
            }

             

                Body.setPosition(boxA, {x: boxA.position.x + 10, y: boxA.position.y})

        }
        if(keyIsDown(UP_ARROW)){
            
            if (boxA.vertices){
                walls[0].update(boxA.vertices[0].x,boxA.vertices[0].y,boxA.vertices[1].x,boxA.vertices[1].y)
                walls[1].update(boxA.vertices[1].x,boxA.vertices[1].y,boxA.vertices[2].x,boxA.vertices[2].y)
                walls[2].update(boxA.vertices[2].x,boxA.vertices[2].y,boxA.vertices[3].x,boxA.vertices[3].y)
                walls[3].update(boxA.vertices[3].x,boxA.vertices[3].y,boxA.vertices[0].x,boxA.vertices[0].y)
            }

             
            Body.setPosition(boxA,{x:boxA.position.x,y:boxA.position.y - 10})
        }


        if(keyIsDown(DOWN_ARROW)){
            if (boxA.vertices){
                walls[0].update(boxA.vertices[0].x,boxA.vertices[0].y,boxA.vertices[1].x,boxA.vertices[1].y)
                walls[1].update(boxA.vertices[1].x,boxA.vertices[1].y,boxA.vertices[2].x,boxA.vertices[2].y)
                walls[2].update(boxA.vertices[2].x,boxA.vertices[2].y,boxA.vertices[3].x,boxA.vertices[3].y)
                walls[3].update(boxA.vertices[3].x,boxA.vertices[3].y,boxA.vertices[0].x,boxA.vertices[0].y)
            }

             

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




        l1.update(400,300);
        l1.show();
        l1.look(walls)

        l2.update(700,300);
        l2.show();
        l2.look(walls)
        l3.update(1000,300);
        l3.show();
        l3.look(walls)
        l4.update(1300,300);
        l4.show();
        l4.look(walls)
        l5.update(400,500);
        l5.show();
        l5.look(walls)
        l6.update(700,500);
        l6.show();
        l6.look(walls)
        l7.update(1000,500);
        l7.show();
        l7.look(walls)
        l8.update(1300,500);
        l8.show();
        l8.look(walls)




/*
        pM.update(mouseX,mouseY);
        pM.show();
        pM.look(walls)

 */


        xoff += 0.01;
        yoff += 0.01;


      //  light.show()
        

       

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
            
            

        }
        /*
        let c = get(0,0)
        if(c[0]== 255){
            console.log(255)
        }

         */






    }

