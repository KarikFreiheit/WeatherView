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
function createParticles(){
    for(let i = 0; i < count; i++){


        const particle = PIXI.Sprite.from("particle.png");
    
        particle.x =  Math.floor(Math.random() * canvas.width);
        particle.y =  Math.floor(Math.random() * canvas.height);
    
        particle.direction = vects[0].direction;
        particle.magnitude = vects[0].magnitude;

        particle.height = size;
        particle.width = size;

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
        //Moves particles to other side of map if going offscreen
        if(particle.x > window.screen.width){
            particle.x = 0;
        }else if(particle.x < 0){
            particle.x = window.screen.width;
        }
        if(particle.y > window.screen.height){
            particle.y = 0;
        }else if(particle.y < 0){
            particle.y = window.screen.height;
        }
    });
   
 });

