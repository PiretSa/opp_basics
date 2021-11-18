class Square extends Shape {
//constructor
    constructor(sideLength) {
        super('square', 4, sideLength);


    }
    //method
    calcArea(){
        this.area = Math.pow(this.sideLength, 2)
        console.log('Area: ' + this.area)
    }
}