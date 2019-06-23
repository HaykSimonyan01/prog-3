var LiveForm = require("./LiveForm");
var random = require("./random");
var GrassEaterEater = require("./GrassEaterEater")

module.exports = class GrassEaterEaterCreater extends LiveForm {
    constructor(x, y) {
        super(x,y)
        this.multiply = 0;
        this.index = 5
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    } 

    mul() {

        var empty = random(this.chooseCell(0))
        this.multiply++
            if (empty && weather != "Ashun" ) {
                var X = empty[0]
                var Y = empty[1]
                matrix[Y][X] = 2
                var newGrassEaterEater = new GrassEaterEater(X, Y)
                grassEaterEaterArr.push(newGrassEaterEater)
            }
    }
}