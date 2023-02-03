(function(){

    var vertexShader = `
    main(){
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 10.0;
    }
    `

    var fragmentShader = `
    void main() {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
    `

    var canvas = document.getElementById("canvas"),
        gl = glUtils.checkWebGL(canvas),

        vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, vertexShader),
        fragmentShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, fragmentShader),
        program = glUtils.createProgram(gl, vertexShader, fragmentShader);
    
    gl.useProgram(program)


});