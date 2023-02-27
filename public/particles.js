
let count = 10000;

const particleSprites = new PIXI.ParticleContainer(count, {
    scale: true,
    position: true,
    rotation: true,
    alpha: true, 
    uvs: true,
});
app.stage.addChild(particleSprites);

var particles = [];

for(let i = 0; i < count; i++){
    let particle = {
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        direction: 1.5,
        magnitude: 1,
        radius: 3,
        id: i
    }
    particles.push(particle);
}
Display(particles)
 


function Display(particles){

    let length = particles.length;
    for(let i = 0; i < length; i++){
        let particle = PIXI.Sprite.from("particle.png");
        particle.x = particles[i].x;
        particle.y = particles[i].y;
        particle.direction = particles[i].direction;
        particle.magnitude = particles[i].magnitude;
        particle.height = particles[i].radius;
        particle.anchor.set(0.5);
        particleSprites.addChild(particle);
        //console.log("X: " + particles[i].x + " Y: " + particles[i].y)
    }

    console.log("Displayed Particles")
}

app.ticker.add(() => {
    

   for(let i = 0; i < particles.length; i++){
        particles[i].x += Math.sin(particles[i].direction) * particles[i].magnitude;
        particles[i].y += Math.cos(particles[i].direction) * particles[i].magnitude;
    }

});