var canvas = document.getElementById("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var gl = canvas.getContext("webgl2")


if(!gl){
    alert("Your browser does not support webgl" + "https://get.webgl.org/")
}

//Sets background of canvas
gl.clearColor(.5, .5, 1, 1)
gl.clear(gl.COLOR_BUFFER_BIT)


//https://radzion.com/blog/linear-algebra/vectors
class Vector {
    constructor(...components) {
      this.components = components
    }

    add({ components }) {
        return new Vector(
        ...components.map((component, index) => this.components[index] + component)
        )
    }
    subtract({ components }) {
        return new Vector(
        ...components.map((component, index) => this.components[index] - component)
        )
    }
    scaleBy(number) {
        return new Vector(
          ...this.components.map(component => component * number)
        )
    }

//Done by Me
    x(){
        return this.component[0]
    }
    y(){
        return this.component[1]
    }
    z(){
        return this.component[2]
    }


  }

  class point{
    
    constructor(position){
        this.position = position;
    }

    draw(){
        var vertices = [
            position.x(), position.y(), position.z()
        ]
    }

  }
  
  
