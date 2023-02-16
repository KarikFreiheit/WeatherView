const menu = document.querySelector('.options');
const settingsButton = document.querySelector('.option-button');
var toggled = true;

function toggleMenu(){

    if(toggled == true){
        console.log("hide");
        document.querySelector('.options').style.display = 'none';
        document.querySelector('.option-button').style.display = 'block';
        toggled = false;
    }else{
        console.log("show");

        document.querySelector('.options').style.display = 'block';
        document.querySelector('.option-button').style.display = 'none';

        toggled = true;
    }
}