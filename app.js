//Shape constructor
function Shape(name, sides, sideLength) {
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

//Object constructor
let square = new Shape ('square', 4, 5)
console.log(square)
let triangle = new Shape('triangle', 3, 3)
console.log(triangle)
//Object method calling
square.calcPerimeter()
triangle.calcPerimeter()