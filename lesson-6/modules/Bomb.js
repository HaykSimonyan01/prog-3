var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Bomb extends LiveForm {
    constructor(x, y) {
        super(x,y);

    }
    getNewCoordinates() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x - 1, this.y],
            [this.x , this.y],
            [this.x + 1, this.y],
            [this.x, this.y + 1]
        ];
        
    }

   

    haytnvelMeth(){
        
            for (var i in this.directions) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    
                  matrix[y][x] = 0;

                    for (var i in grassArr) {
                        if (x == grassArr[i].x && y == grassArr[i].y) {
                            grassArr.splice(i, 1);
                            break;
                        }
                    }
                    for (var i in grassEaterArr) {
                        if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                            grassEaterArr.splice(i, 1);
                            break;
                        }
                    }
                    for (var i in grassEaterEaterArr) {
                        if (x == grassEaterEaterArr[i].x && y == grassEaterEaterArr[i].y) {
                            grassEaterEaterArr.splice(i, 1);
                            break;
                        }
                    }
                    for (var i in mardArr) {
                        if (x == mardArr[i].x && y == mardArr[i].y) {
                            mardArr.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        
    }

}