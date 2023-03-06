var app = new PIXI.Application({ width: window.screen.width, height: window.screen.height });
document.body.appendChild(app.view);
const canvas = document.querySelector('canvas');
let map = PIXI.Sprite.from('worldMap.png');
map.x = 0;
map.y = 0;
app.stage.addChild(map);
//Default setting values
var count = 10000;
var size = 3;
/*
let elapsed = 0.0;
app.ticker.add((delta) => {
    elapsed += delta;
    map.width = canvas.width;
    map.height = canvas.height;

});

*/
var vects = [];
//Parse Json into objects, recieves data from data.js loadJSON function
function populateData(objectData){

    let length = objectData.length;
       
    for(let i = 0; i < length; i++){

        let vector = {

            x: objectData[i].x,
            y: objectData[i].y,
            magnitude: objectData[i].magnitude,
            direction: objectData[i].direction,
            size: 12.5,
            id: i,
            
        };

        vects.push(vector);
    }
    Display(vects);
    
}

//!CHANGE THIS TO RENDER SVGS SEPERATE FROM PIXIJS in order to fix scaling issues
function Display(vects){
    let length = vects.length;
    for(let i = 0; i < length; i++){
        let arrow = PIXI.Sprite.from('arrow.png');
        arrow.x = vects[i].x;
        arrow.y = vects[i].y;

        arrow.width = vects[i].size * 2;
        arrow.height = vects[i].size;

        //Set origin to center
        arrow.anchor.set(0.5);

        arrow.rotation = vects[i].direction;
        app.stage.addChild(arrow);

    }
    createParticles();

}

