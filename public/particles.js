
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
function createParticles(){

    for(let i = 0; i < count; i++){


        const particle = PIXI.Sprite.from("particle.png");
    
        particle.x =  Math.floor(Math.random() * canvas.width);
        particle.y =  Math.floor(Math.random() * canvas.height);
    
        particle.direction = vects[i].direction;
        particle.magnitude = vects[i].magnitude;

        particle.height = 3;
        particle.width = 3;

        particle.anchor.set(0.5);
        particle.id = i;
    
        particles.push(particle);

        particleSprites.addChild(particle);

        const particleTicker = new PIXI.Ticker;

        particleTicker.add(() => {

            particle.x += Math.sin(particle.direction) * particle.magnitude;
            particle.y += Math.cos(particle.direction) * particle.magnitude;
           
         });
        particleTicker.start();

    }
    
    
}   
 

