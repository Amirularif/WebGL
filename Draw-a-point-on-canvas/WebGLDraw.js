//vertex shader program
var VSHADER_SOURCE = 
'void main() {\n'+
'gl_Position = vec4(0.0, 0.0,0.0, 1.0);\n' + //coordinates
'gl_PointSize = 20.0;\n' + //set the point size
'}\n'; 

//Fragment shader program
var FSHADER_SOURCE = 
'void main(){\n'+
'gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n'+
'}\n';   

function main(){
    //Retrieve <canvas> element
    var canvas = document.getElementById('webgl');

    //Get rendering context for WebGL

    var gl = canvas.getContext('webgl');
    if(!gl){
        console.log('Failed to get the rendering context for WebGL');
        return
    }

    //Initialize shaders

    if(!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)){
        console.log('Failed to initialize shader.');
        return;
    }

    //set clear color
    gl.clearColor(0.0,1.0,1.0,1.0);

    //Clear <canvas>
    gl.clear(gl.COLOR_BUFFER_BIT);

    //Draw a point
    gl.drawArrays(gl.POINTS, 0, 1);

 
}