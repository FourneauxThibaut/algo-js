class Rectangle {
    // this is the constructor
    constructor(topLeftXPos, topLeftYPos, width, length) {
      this.topLeftXPos = topLeftXPos;
      this.topLeftYPos = topLeftYPos;
      this.width = width;
      this.length = length;
    }
    collides(otherRectangle){
        
        // trouver l'emplacement du rectangle
        let objRight = this.topLeftXPos + this.width;
        let objBottom = this.topLeftYPos + this.length;
        let otherRectangleRight = otherRectangle.topLeftXPos + otherRectangle.width;
        let otherRectangleBottom = otherRectangle.topLeftYPos + otherRectangle.length;

        if (this.topLeftXPos >= otherRectangleRight || this.topLeftYPos >= otherRectangleBottom || 
            objRight <= otherRectangle.topLeftXPos || objBottom <= otherRectangle.topLeftYPos)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
}

let rec = new Rectangle(3, 6, 12, 5);
let rec2 = new Rectangle(3, 6, 12, 5);

console.log( rec.collides(rec2) );