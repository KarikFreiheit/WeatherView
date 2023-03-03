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



function changeCount(number){
    count = number;
    document.getElementsByClassName('.count-textInput').value=count; 
    document.getElementsByClassName('.count-rangeInput').value=count; 
}

function refreshData(){
    destroyParticles();
    loadJSON();
}

function destroyParticles(){
    let i = 0; 
    for(i = 0; i < particles.length; i++){
    
        app.stage.removeChild(particles[i]);
        particles[i].destroy(true);
        particles.splice(i, 1);

        i++;
    };
    console.log(i + " Particles Destoyed");


}

window.addEventListener("keydown", function(event){

    if(event.key == "n"){
        map.width /= 2;
        map.height /= 2;
    }

    if(event.key == "r"){
        refreshData();

    }
    if(event.key == "Enter"){
        refreshData();
    }
});