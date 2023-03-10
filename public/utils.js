const menu = document.querySelector('.options');
const settingsButton = document.querySelector('.option-button');
var toggled = true;

function toggleMenu(){

    if(toggled == true){
        document.querySelector('.options').style.display = 'none';
        document.querySelector('.hide-button').style.display = 'block';
        toggled = false;
    }else{
        document.querySelector('.options').style.display = 'block';
        document.querySelector('.hide-button').style.display = 'none';
        toggled = true;
    }
}


//Particle Count
function changeCountText(number){
    count = number;
    document.querySelector('.count-textInput').value=count; 
}
function changeCountRange(number){
    count = number;
    document.querySelector('.count-rangeInput').value=count; 
}
//Particle Size
function changeSizeText(number){
    size = number;
    document.querySelector('.size-textInput').value=size; 
}
function changeSizeRange(number){
    size = number;
    document.querySelector('.size-rangeInput').value=size; 
}


function refreshData(){
    destroyParticles();
    loadJSON();
}

function destroyParticles(){
    
    particleSprites.removeChildren();
    particles = [];

}

//Hotkeys
window.addEventListener("keydown", function(event){

    if(event.key == "n"){
        map.width /= 2;
        map.height /= 2;
    }
    
    if(event.key == "Enter"){
        refreshData();

    }
});