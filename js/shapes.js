/*
    shapes.js
    This is where your code goes

    Write the code to create rectangle and circle classes that extend the
    Shape class defined in shape.js. Then create a couple of other subclasses that
    render different sorts of shapes using the HTML <canvas> functions.
    http://www.w3schools.com/tags/ref_canvas.asp

    You can use either the classical or the prototypal style to create your subclasses

    After you've written the code for the sublcasses, call either registerPrototypalShape()
    or registerClassicalShape() to register your new shapes with the application. See the
    app.js file for info on these functions.
 */

function Rectangle (left, top, width, height, stylesMap) {
    Shape.call(this, left, top, width, height, stylesMap);

    this.renderShape = function(canvasCtx) {
        canvasCtx.fillRect(this.left, this.top, this.width, this.height, this.stylesMap);
    };
}

Rectangle.prototype = new Shape();

registerClassicalShape('Rectangle', Rectangle);

function Circle (left, top, width, height, stylesMap) {
    Shape.call(this, left, top, width, height, stylesMap);

    this.renderShape = function(canvasCtx) {
        canvasCtx.beginPath();
        canvasCtx.arc(this.left, this.top, this.height, 0, 2*Math.PI, this.stylesMap);
        canvasCtx.fill();
    }
}

Circle.prototype = new Shape();

registerClassicalShape('Circle', Circle);

function Lamp (left, top, width, height, stylesMap) {
    Shape.call(this, left, top, width, height, stylesMap)

    
    this.renderShape = function(canvasCtx) {
        canvasCtx.font = '20px Comic-Sans';
        canvasCtx.fillText("Lamp Illuminate!", this.left, this.top);
    }
}

Lamp.prototype = new Shape();

registerClassicalShape('Lamp', Lamp);

