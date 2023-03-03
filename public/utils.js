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



function changeCountText(number){
    count = number;
    document.querySelector('.count-textInput').value=count; 
}
function changeCountRange(number){
    count = number;
    document.querySelector('.count-rangeInput').value=count; 
}

function refreshData(){
    destroyParticles();
    loadJSON();
}

function destroyParticles(){
    let i = 0;
    particles.forEach((particle) => {
        particles.splice(i, 1); 
        particleSprites.removeChild(particle);

        i++;
    });
    console.log(i + " Particles Destoyed");


}

window.addEventListener("keydown", function(event){

    if(event.key == "n"){
        map.width /= 2;
        map.height /= 2;
    }
    
    if(event.key == "Enter"){
        refreshData();

    }
});