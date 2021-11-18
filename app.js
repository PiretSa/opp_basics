//Shape constructor
/*function Shape(name, sides, sideLength) {
    //atributes - fields
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    //functions - methods
    this.calcPerimeter = function () {
        this.perimeter = this.sides * this.sideLength
        console.log(this.perimeter)
    }
}
*/


//Object creation
let square = new Square ( 5)
console.log(square)
let triangle = new Shape('triangle', 3, 3)
console.log(triangle)
//Object method calling
square.calcPerimeter()
square.calcArea()
triangle.calcPerimeter()