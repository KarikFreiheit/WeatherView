var app = new PIXI.Application({ width: window.screen.width, height: window.screen.height });
document.body.appendChild(app.view);
const canvas = document.querySelector('canvas');
let map = PIXI.Sprite.from('Merc.jpg');
map.x = 0;
map.y = 0;
app.stage.addChild(map);
//Default setting values
var count = 10000;
var size = 3;
let width = window.screen.width;
let height = window.screen.height;
map.width = width;
map.height = height;


var vects = [];
//Parse Json into objects, recieves data from data.js loadJSON function
function populateData(objectData){

    let length = objectData.length;
    
    for(let i = 0; i < length; i++){
        let lat = objectData[i].y;
        let long = objectData[i].x;
        //Converts to radians
        let rad = lat*Math.PI/180;
        //Mercator Projection: Flat Map
        let merc = Math.log(Math.tan((Math.PI/4) + (rad/2)));

        let vector = {
            //Converts into x and y from lat and long
            //!!!!Change to convert on server side
            x: (long + 180) * (width/360),
            y: (height/2)-(height*merc/(Math.PI * 2)),
            magnitude: objectData[i].magnitude,
            direction: objectData[i].direction,
            size: 12.5,
            id: i,
            
        };
        vects.push(vector);
    }
    //to2xArray(vects);
    Display(vects);
    
}

function to2xArray(array){

    
    let count = array.length;
    //Number of pixels between each vector 
    let n = Math.sqrt((width * height) / count)
    let yVector = height / n;

    var newVects = [];
    
    //Fill newVects 2d array by pushing yVector number of arrays into newVects
    for(let i = 0; i < array.length; i+=yVector){
        newVects.push(array.slice(i, i+yVector));
    }

    //It either fills the arrays with the wrong values in the x or the wrong values in the y. It should have the same values in the same rows as it shows onscrren otherwise the particle will go in weird directions.
    console.log(vects);
    console.log(newVects[19][5].x + " " + newVects[20][5].x + " " + newVects[21][5].x);
    console.log(newVects[19][6].x + " " + newVects[20][6].x + " " + newVects[21][6].x);
    console.log(newVects[19][7].x + " " + newVects[20][7].x + " " + newVects[21][7].x);
    console.log(newVects[19][5].y + " " + newVects[20][5].y + " " + newVects[21][5].y);
    console.log(newVects[19][6].y + " " + newVects[20][6].y + " " + newVects[21][6].y);
    console.log(newVects[19][7].y + " " + newVects[20][7].y + " " + newVects[21][7].y);
    console.log(newVects);
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

