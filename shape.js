class shape {
    //constructor
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    //method
calcPerimeter() {
        this.perimeter = this.sides * this.sideLength
    console.log(this.perimeter)
}
}