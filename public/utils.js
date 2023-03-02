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


var count = document.querySelector("particle-count").value;

function changeCount(number){
    count = number;
}

function refreshData(){
    loadJSON();
}

indow.addEventListener("keydown", function(event){

    if(event.key == "n"){
        map.width /= 2;
        map.height /= 2;
    }

    if(event.key == "r"){
        refreshData();
    }
});