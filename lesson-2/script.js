let matrix = []; // Մատրիցի ստեղծում
let rows = 50; // Տողերի քանակ
let columns = 50; // Սյուների քանակ

for (let y = 0; y < rows; y++) {
matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
for (let x = 0; x < columns; x++) {
let a = Math.floor(Math.random() * 100);
if (a >= 0 && a < 10) {
matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
}
if (a >= 10 && a < 50) {
matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
}
else if (a >= 50 && a < 70) {
matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
}
else if (a >= 70 && a < 80) {
matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
}
else if (a >= 80 && a < 81) {
matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
}
else matrix[y][x] = 0;
// else if (a >= 90 && a < 100) {
// matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
// }
}
}

// stex zangvacnery verjum Arr barov
var grassArr = [];
var grassEaterArr = [];
var grassEaterEaterArr = [];
var mardArr = [];
var side = 15;

var m = 20;

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


//pttvum em matrix mejov u stexcum em object

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var et = new GrassEater(x,y,2);
                grassEaterArr.push(et);
                
            }
			else if (matrix[y][x] == 3) {
                var etet = new GrassEaterEater(x,y,3);
                grassEaterEaterArr.push(etet);
                
            }
            else if (matrix[y][x] == 4) {
                var mr = new Mard(x,y,4);
                mardArr.push(mr);
                
            }
        }
    }
 
}
//draw uxaki nerkuma
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
			else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    }


    //kanchum em methodnery
    for (var i in grassArr) {
        grassArr[i].mul();
    }
	
     for (var i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].eat();
        grassEaterArr[i].move();
    }
	
	for (var i in grassEaterEaterArr) {
        
        grassEaterEaterArr[i].eat();
        grassEaterEaterArr[i].mul();
        grassEaterEaterArr[i].move();
    }

    for (var i in mardArr) {
        
        mardArr[i].eat();
        mardArr[i].mul();
        mardArr[i].move();
    }
    let xe =parseInt(random(0,matrix[0].length)); 
    let ye = parseInt(random(0,matrix.length));
    
    var b = new Bomb(xe,ye); 

    b.haytnvelMeth();

}