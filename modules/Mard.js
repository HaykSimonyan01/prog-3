var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Mard extends LiveForm {
    constructor(x, y) {
        super(x,y);
        this.life = 50;

    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 3, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x , this.y - 3],
            [this.x + 1, this.y - 3],
            [this.x + 2, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 3, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x + 3, this.y - 1],
            [this.x - 3, this.y],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y +1],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x + 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 2],
            [this.x - 3, this.y + 3],
            [this.x - 2, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x + 3, this.y + 3],
        ];
    }

  
    eat() {
        if(weather != "Dzmer"){
          let newCell1 = this.chooseCell(1);
        let newCell2 = this.chooseCell(2);
        let newCell3 = this.chooseCell(3);
        let newCell = random(newCell1.concat(newCell2,newCell3));

        if (newCell) {

            this.life++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            
            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                    break;
                }
            }
            for (let i in grassEaterArr) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            for (let i in grassEaterEaterArr) {
                if (grassEaterEaterArr[i].x == x && grassEaterEaterArr[i].y == y) {
                    grassEaterEaterArr.splice(i, 1)
                    break;
                }
            }
            this.x = x;
            this.y = y;

            if (this.life >= 60) {
                this.mul();
            }
        }
        else {
            this.move()
        }  
        }
        
    }



   
    move() {
        if(weather != "Dzmer"){
        var empty = random(this.chooseCell(0))
        this.life--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
        if (this.life <= 30){
            this.die();
        }
        }
        
    }

  
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        mardHashiv++;

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 5;
            let mard = new Mard(x, y);
            mardArr.push(mard);
            this.life = 50;
        }
    }



  
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in mardArr) {
            if (mardArr[i].x == this.x && mardArr[i].y == this.y) {
                mardArr.splice(i, 1)
            }
        }
    }
}