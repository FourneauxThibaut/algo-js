class Rectangle {
    // this is the constructor
    constructor(topLeftXPos, topLeftYPos, width, length) {
      this.topLeftXPos = topLeftXPos;
      this.topLeftYPos = topLeftYPos;
      this.width = width;
      this.length = length;
    }
    collide(otherRectangle){
        
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

var rec = [];

for (var i = 0; i <= 1000; ++i) {
    rec[i] = new Rectangle( Math.random(), Math.random(), Math.random(), Math.random() );
}

rec.forEach(function(item){
    collidedRec = [];
    let j = 0;

    while(item.collide(rec[j]) === true){
        j++;
        if(item.collide(rec[j])){
            collidedRec.push(item);
        }
    }
});

console.log( collidedRec );