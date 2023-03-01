
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

    const particle = PIXI.Sprite.from("particle.png");
    
    
    
    particle.x =  Math.floor(Math.random() * canvas.width);
    particle.y =  Math.floor(Math.random() * canvas.height);
    
    particle.height = 3;
    particle.width = 3;

    particle.anchor.set(0.5);
    particle.id = i;
    
    particles.push(particle);
    particleSprites.addChild(particle);

}
 

app.ticker.add(() => {

    particles.forEach(sprites => {
        sprites.x += Math.sin(sprites.direction) * sprites.magnitude;
        sprites.y += Math.cos(sprites.direction) * sprites.magnitude;
    });
    
 
 });
