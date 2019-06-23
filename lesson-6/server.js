
//! Requiring modules  --  START
var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
var GrassEaterEater = require("./modules/GrassEaterEater.js");
var Mard = require("./modules/Mard.js");
var GrassEaterEaterCreater = require("./modules/GrassEaterEaterCreater.js");
let random = require('./modules/random');
//! Requiring modules  --  END


//! Setting global arrays  --  START
grassArr = [];
grassEaterArr = [];
grassEaterEaterArr = [];
mardArr = [];
grassEaterEaterCreaterArr = [];
matrix = [];
grassHashiv = 0;
grassEaterHashiv = 0;
grassEaterEaterHashiv = 0;
mardHashiv = 0;
grassEaterEaterCreaterHashiv = 0;
weather = "";
index = 0;
//! Setting global arrays  -- END




//! Creating MATRIX -- START
function matrixGenerator(matrixSize, grassArr, grassEaterArr, grassEaterEaterArr, mardArr, grassEaterEaterCreaterArr) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grassArr; i++) {
        let customX = Math.floor(random(matrixSize)); // 0-9
        let customY = Math.floor(random(matrixSize)); // 4
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < grassEaterArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < grassEaterEaterArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < mardArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < grassEaterEaterCreaterArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
}
matrixGenerator(20, 5, 5, 4, 2, 1);
//! Creating MATRIX -- END



//! SERVER STUFF  --  START
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
//! SERVER STUFF END  --  END



function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
                grassEaterHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            } else if (matrix[y][x] == 3) {
                var grassEaterEater = new GrassEaterEater(x, y);
                grassEaterEaterArr.push(grassEaterEater);
                grassEaterEaterHashiv++;
            } 
            else if (matrix[y][x] == 4) {
                var mard = new Mard(x, y);
                mardArr.push(mard);
                mardHashiv++;
            } else if (matrix[y][x] == 5) {
                var grassEaterEaterCreater = new GrassEaterEaterCreater(x, y);
                grassEaterEaterCreaterArr.push(grassEaterEaterCreater);
                grassEaterEaterCreaterHashiv++;
            } 
        }
    }
}

creatingObjects();

function game() {
    if(index <=5){
        weather = "Garun";
    }
    else if(index >5 && index <=10){
        weather = "Amar";
    }
    else if(index > 10 && index <=15){
        weather = "Ashun";
    }
    else if(index > 15 && index <=20){
        weather ="Dzmer";
    }
    else if(index >=20){
        index = 0;
    }

    index++;
    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
    }
    if (grassEaterEaterArr[0] !== undefined) {
        for (var i in grassEaterEaterArr) {
            grassEaterEaterArr[i].eat();
        }
    }
    if (mardArr[0] !== undefined) {
        for (var i in mardArr) {
            mardArr[i].eat();
        }
    }
    if (grassEaterEaterCreaterArr[0] !== undefined) {
        for (var i in grassEaterEaterCreaterArr) {
            grassEaterEaterCreaterArr[i].mul();
        }
    }

    //! Object to send
    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassEatersCounter: grassEaterHashiv,
        grassEaterEatersCounter: grassEaterEaterHashiv,
        mardsCounter: mardHashiv,
        grassEaterEaterCreatersCounter: grassEaterEaterCreaterHashiv,
        exanak: weather
    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}



setInterval(game, 400);