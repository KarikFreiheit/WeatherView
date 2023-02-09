var canvas = document.getElementById("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var gl = canvas.getContext("webgl2")
if(!gl){
    alert("Your browser does not support webgl.\n" + "Go to https://get.webgl.org/ to find out more.")
}


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
