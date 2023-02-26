let count = 100000;


var particles = [];

for(let i = 0; i < count; i++){
    let particle = {
        position: PIXI.Vector(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)),
        radius: 3,
        velocity: PIXI.Vector(0,0),
        id: i
    }
    particles.push(particle);
}
Display(particles)
 


function Display(particles){

    let length = particles.length;
    for(let i = 0; i < length; i++){
        let particle = PIXI.Sprite.from("particle.png");
        particle.position.x = particles[i].x;
        particle.position.y = particles[i].y;
        particle.width = particles[i].radius;
        particle.height = particles[i].radius;
        particle.anchor.set(0.5);
        app.stage.addChild(particle);
        //console.log("X: " + particles[i].x + " Y: " + particles[i].y)
    }

    console.log("Displayed Particles")
}

app.ticker.add((delta) => {
    
    particles.forEach(function (particle){
        particle.x +=
    });

});