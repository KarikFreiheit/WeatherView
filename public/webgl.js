var canvas = document.getElementById("canvas")
var gl = canvas.getContext("webgl2")

if(!gl){
    alert("Your browser does not support webgl")
}

gl.clearColor(.5, .5, 1, 1)
gl.clear(gl.COLOR_BUFFER_BIT)