let app = new PIXI.Application({ width: window.screen.width, height: window.screen.height });
document.body.appendChild(app.view);
let sprite = PIXI.Sprite.from('worldMap.png');
sprite.x = 0;
sprite.y = 0;
app.stage.addChild(sprite);
let elapsed = 0.0;
app.ticker.add((delta) => {
    elapsed += delta;
});


var vects = [];
//Parse Json into objects, recieves data from data.js loadJSON function
function populateData(objectData){
    console.log("Vector Objects Populated");

    let length = objectData.length;
       
    for(let i = 0; i < length; i++){

        let vector = {

            x: objectData[i].x,
            y: objectData[i].y,
            rot: objectData[i].direction,
            size: 12.5,
            id: i,
            
        };

        vects.push(vector);
            
    }
    Display(vects);
    
}

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

        arrow.rotation = vects[i].rot;
        app.stage.addChild(arrow);

    }
    console.log("Displayed Vectors");


}