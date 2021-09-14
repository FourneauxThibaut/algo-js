class Circle {
    // this is the constructor
    constructor(xPos, yPos, radius) {
      this.xPos = xPos;
      this.yPos = yPos;
      this.radius = radius;
    }
    move(xOffset, yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
    get surface() {
        return 2 * Math.PI * this.radius;
    }
}
  
let x = new Circle(2, 7, 5);

x.move(3, 6);
console.log(x.xPos, x.yPos);