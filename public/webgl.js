var canvas = document.getElementById("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var gl = canvas.getContext("webgl2")


if(!gl){
    alert("Your browser does not support webgl")
}

//Sets background of canvas
gl.clearColor(.5, .5, 1, 1)
gl.clear(gl.COLOR_BUFFER_BIT)