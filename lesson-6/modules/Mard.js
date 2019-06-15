var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Mard extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 5;
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
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    } 
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
            let mard = new Mard(x, y);
            mardArr.push(mard);
            this.life = 5;
        }
    }
    eat() {
        var newCell1 = this.chooseCell(1);
        var newCell2 = this.chooseCell(2);
        var newCell3 = this.chooseCell(3);
        var newCell = random(newCell1.concat(newCell2, newCell3));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[y][x] = 4;

			
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            for (var i in grassEaterEaterArr) {
                if (newX == grassEaterEaterArr[i].x && newY == grassEaterEaterArr[i].y) {
                    grassEaterEaterArr.splice(i, 1);
                    break;
                }
            }

            this.x = x;
            this.y = y;
            this.life += 2;

        }
            if (this.life >= 10) {
                this.mul();
            }else {
            this.move()
            }
          
    }
    move() {
        this.life--;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;
        }
        if (this.life <= 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in grassEaterEaterArr) {
            if (grassEaterEaterArr[i].x == this.x && grassEaterEaterArr[i].y == this.y) {
                grassEaterEaterArr.splice(i, 1)
            }
        }
    }
}