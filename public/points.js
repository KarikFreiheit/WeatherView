var canvas = document.getElementById("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var gl = canvas.getContext("webgl2")
var shown = true
if(!gl){
    alert("Your browser does not support webgl.\n" + "Go to https://get.webgl.org/ to find out more.")
}



const arrowShaderSource = `
attribute vec2 position;
void main(){
    gl_Position = vec4(position, 0, 1);
    gl_Left = vec4(position.x - .05, position.y + .01 0, 1);
    gl_Right = vec4(position.x + .05, position.y + .01, 0, 1);
    gl_Bottom = vec4(position.x, position.y - .05, 0, 1);
    gl_Top = vec4(position.x, position.y + .05, 0, 1);

}
`
//Creates and compiles vertex and fragment shaders for a
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
    let width = canvas.width
    let halfWidth = width / 2
    let height = canvas.height
    let halfHeight = height / 2
    let length = objectData.length
    
       
        for(let i = 0; i < length; i++){
            //Converts X and Y to webGL X and Y of values between 0-1
            let webX = (2 * (objectData[i].x / halfWidth)) - 1;
            let webY = 1 - (2 * (objectData[i].y / halfHeight));

            //let webX = (objectData[i].x - halfWidth) / halfWidth
            //let webY = (objectData[i].y - halfHeight) / halfHeight
            verts.push(webX, webY)
            
            var vertices = new Float32Array(verts)
            console.log(verts)
        }
       

       display(vertices)

    
    
}
function display(vertices){
    var buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)


    gl.useProgram(program)

    //Passes Vertex positions into vertex shader 'position' attribute

    program.position = gl.getAttribLocation(program, 'position')
    gl.enableVertexAttribArray(program.position)
    gl.vertexAttribPointer(program.position, 2, gl.FLOAT, false, 0, 0)


    //Backroundcolor
    gl.clearColor(.5, 1, 1, 1)
    gl.clear(gl.COLOR_BUFFER_BIT)

    //draws points
    gl.drawArrays(gl.POINTS, 0, vertices.length)
}
//Show or hide points on click
canvas.addEventListener("click", () => {
    if(shown == true){
        gl.clear(gl.COLOR_BUFFER_BIT)
        shown= false
    }else{
        display(vertices)
        shown = true
    }
    
})


