var canvas = document.getElementById("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var gl = canvas.getContext("webgl2")


if(!gl){
    alert("Your browser does not support webgl.\n" + "Go to https://get.webgl.org/ to find out more.")
}


//Creates and compiles vertex and fragment shaders
const vertexShaderSource = `
void main(){
    gl_Position = vec4(0,0,0,1);
    gl_PointSize = 50.0;
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

gl.attachShader(program, vs);
gl.attachShader(program, fs);

gl.linkProgram(program)
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('prog info-log:', gl.getProgramInfoLog(program))
    console.error('vert info-log: ', gl.getShaderInfoLog(vs))
    console.error('frag info-log: ', gl.getShaderInfoLog(fs))
}
gl.useProgram(program)

//Backroundcolor
gl.clearColor(1, 1, 1, 1)
gl.clear(gl.COLOR_BUFFER_BIT)

//draws points
gl.drawArrays(gl.POINTS, 0, 1)

