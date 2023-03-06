const particleSprites = new PIXI.ParticleContainer(1000000, {
    autoResize: true,
    maxSize: 1000000,
    scale: true,
    position: true,
    rotation: true,
    alpha: true, 
    uvs: true,
});
app.stage.addChild(particleSprites);

var particles = [];
count = 10000;
function createParticles(){
    for(let i = 0; i < count; i++){


        const particle = PIXI.Sprite.from("particle.png");
    
        particle.x =  Math.floor(Math.random() * canvas.width);
        particle.y =  Math.floor(Math.random() * canvas.height);
    
        particle.direction = vects[0].direction;
        particle.magnitude = vects[0].magnitude;

        particle.height = 3;
        particle.width = 3;

        particle.anchor.set(0.5);
        particle.id = i;
    
        particles.push(particle);

        particleSprites.addChild(particle);

       

}
    
    
}   

app.ticker.add(() => {

    particles.forEach((particle) => {
        particle.x += Math.sin(particle.direction) * particle.magnitude;
        particle.y += Math.cos(particle.direction) * particle.magnitude;
    });
   
 });

