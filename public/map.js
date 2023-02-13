var canvas = document.getElementById("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var gl = canvas.getContext("webgl2")
if(!gl){
    alert("Your browser does not support webgl.\n" + "Go to https://get.webgl.org/ to find out more.")
}

main()


function main(){
    console.log("main")
    render('worldMap.png')

    var image = new Image()
    Image.src = 'worldMap.png'
    Image.onload = function() {
        console.log("load")

    }

}

//https://webglfundamentals.org/webgl/lessons/webgl-image-processing.html
function render(image){
    console.log("render")
    
    const vShader = `
    attribute vec4 position;
    attribute  vec2 a_textcoord;
    
    uniform mat4 matrix;
    
    varying vec2 v_textcoord;
    
    void main(){
        gl_Position = matrix * position;
    
        v_textcoord = a_textcoord;
        
    }
    `
    
    const fShader = `
    
    precision mediump float;
    
    varying vec2 v_textcoord;
    
    uniform sampler2D u_texture;
    
    void main(){
        gl_FragColor = texture2D(u_texture, v_textcoord);
    }
    `

    var program = gl.createProgram();
    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    gl.linkProgram(program);

    var texCoordLocation = gl.getAttribLocation(program, "a_textcoord")
    var textCoordBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, textCoordBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        0.0, 0.0, 
        1.0, 0.0, 
        1.0,  0.0,
        0.0,  1.0,
        0.0,  1.0,
        1.0,  0.0,
        1.0,  1.0  
    ]), gl.STATIC_DRAW)
    gl.enableVertexAttribArray(texCoordLocation)
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0)

    var texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

}
