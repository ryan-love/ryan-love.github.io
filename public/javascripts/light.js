function Light(x,y,r) {
    let intensity,
        direction,
        frequency,
        polarization,
        watts,
        ip,
        isConnected,
        speed,
        distance,
        network,
        bulb,
        inverseLaw



    this.body = Matter.Bodies.circle(x,y,r=5,{isStatic:true},r*4)
    this.intensity = intensity
    this.inverseLaw = inverseLaw
    this.direction = direction
    this.frequency = frequency
    this.polarization = polarization
    this.watts = watts
    this.ip = ip
    this.isConnected = isConnected
    this.speed = speed
    this.distance = distance
    this.network = network
    this.bulb = bulb
    this.x = x
    this.y = y
    this.r = r


    World.add(world,this.body)

    this.show = ()=>{
        push()
        circle(this.body.position.x,this.body.position.y,this.body.area)
        line(this.body.position.x,this.body.position.y,this.body.vertices[0].x,this.body.vertices[0].y)
        pop()
    }



    this.setNetwork = (IP,con,sp)=>{
        this.network = {
            ip:IP,
            isConnected:con,
            speed:sp
        }
    }

    this.setBulb = (wat,d)=>{
        this.bulb = {
            lumEff:{
                Incan:{
                    min: 12,
                    mid: 15,
                    max: 18
                },
                Halogen:{
                    min: 16,
                    mid: 20,
                    max: 24
                },
                LED:{
                    min: 30,
                    mid: 60,
                    max: 90
                }

            },
            watts: wat,
            ledWatts: 80%wat,
            distance: d,
            /*lumes: {
                Incan: {
                    min: this.bulb.lumEff.Incan.min * wat,
                    mid: this.bulb.lumEff.Incan.mid * wat,
                    max: this.bulb.lumEff.Incan.max * wat
                },
                Halogen: {
                    min: this.bulb.lumEff.Halogen.min * wat,
                    mid: this.bulb.lumEff.Halogen.mid * wat,
                    max: this.bulb.lumEff.Halogen.max * wat
                },
                LED: {
                    min: this.bulb.lumEff.LED.min * wat,
                    mid: this.bulb.lumEff.LED.mid * wat,
                    max: this.bulb.lumEff.LED.max * wat
                }
            }*/
        }
    }

    this.showBulb = ()=>{
        return this.bulb
    }

    this.showIntense =()=>{
        return this.intensity = this.bulb.watts /(Math.pow(this.bulb.distance,2)*4*Math.PI).toFixed(2)
    }

    this.showLightDistance = ()=>{
        return (1 / this.intensity).toFixed(2)
    }

    this.showNetwork = ()=>{
        return this.network
    }
    this.showDistance = ()=>{
        return this.distance = this.intensity * this.showLightDistance()
    }


    this.LightBeams = (pos,angle)=>{
        this.pos = pos;
        this.d = Matter.Vector.rotate(this.pos, angle)
        push();
        translate(this.pos.x, this.pos.y);
        line(0, 0, this.d.x * 10, this.d.y * 10);
        pop();

    }
    this.ray = ()=>{
        this.pos = createVector(width / 2, height / 2);
        this.rays = [];
        for (let a = 0; a < 360; a += 1) {
            this.rays.push(this.LightBeams(this.pos,radians(a)))
        }

    }













}