let count = 100000;
const gr = new PIXI.Graphics();

var particles = [];

for(let i = 0; i < count; i++){
    let particle = {
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        radius: 2,
        velocity: 0,
        id: i
    }
    particles.push(particle);
}
Display(particles)
 


function Display(particles){

    let length = particles.length;
    for(let i = 0; i < length; i++){
        gr.beginFill();
        gr.drawCircle(particles[i].x, particles[i].y, particles[i].radius);
        gr.endFill();
        //console.log("X: " + particles[i].x + " Y: " + particles[i].y)
    }
    app.stage.addChild(gr);

    console.log("Displayed Particles")
}