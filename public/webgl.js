var canvas = document.getElementById("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var gl = canvas.getContext("webgl2")
if(!gl){
    alert("Your browser does not support webgl.\n" + "Go to https://get.webgl.org/ to find out more.")
}



//Creates and compiles vertex and fragment shaders
const vertexShaderSource = `
attribute vec2 position;
void main(){
    
    gl_Position = vec4(position, 0, 1);
    gl_PointSize = 10.0;
}`
const vs = gl.createShader(gl.VERTEX_SHADER)
gl.shaderSource(vs, vertexShaderSource)
gl.compileShader(vs)

const fragmentShaderSource =  `
precision highp float;
void main(){
    gl_FragColor = vec4(0, 0, 0, 1.0);
}`

const fs = gl.createShader(gl.FRAGMENT_SHADER)
  gl.shaderSource(fs, fragmentShaderSource)
  gl.compileShader(fs)


const program = gl.createProgram()

gl.attachShader(program, vs)
gl.attachShader(program, fs)
gl.linkProgram(program)

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('prog info-log:', gl.getProgramInfoLog(program))
    console.error('vert info-log: ', gl.getShaderInfoLog(vs))
    console.error('frag info-log: ', gl.getShaderInfoLog(fs))
}


var verts = []

//Parse Json into objects, recieves data from data.js loadJSON function
function populateData(objectData){
    
    //console.log(typeof objectData.points + " " + typeof objectData)
    for(let i = 0; i < objectData.length; i++){
        //x should be negative
        verts.push(-((canvas.width / 2) - objectData[i].x) / (canvas.width / 2), ((canvas.height/ 2) - objectData[i].y) / (canvas.height / 2))
        
        
        console.log(verts)

        
        var vertices = new Float32Array(verts)

        var buffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)


        gl.useProgram(program)

        //Passes Vertex positions into vertex shader 'position' attribute

        program.position = gl.getAttribLocation(program, 'position')
        gl.enableVertexAttribArray(program.position)
        gl.vertexAttribPointer(program.position, 2, gl.FLOAT, false, 0, 0)


        //Backroundcolor
        gl.clearColor(1, 1, 1, 1)
        gl.clear(gl.COLOR_BUFFER_BIT)

        //draws points
        gl.drawArrays(gl.POINTS, 0, vertices.length)
    }
    
}





