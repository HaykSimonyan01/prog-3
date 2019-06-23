//! Setup function fires automatically
function setup() {

    var socket = io();
    var side = 30;
    var matrix = [];

    //! Getting DOM objects (HTML elements)
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let grassEaterEaterCountElement = document.getElementById('grassEaterEaterCount');
    let mardCountElement = document.getElementById('mardCount');
    let grassEaterEaterCreaterCountElement = document.getElementById('grassEaterEaterCreaterCount');
    let exanak = document.getElementById('exanak');

    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        //! after getting data pass it to matrix variable
        matrix = data.matrix;
        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.grassEatersCounter;
        grassEaterEaterCountElement.innerText = data.grassEaterEatersCounter;
        mardCountElement.innerText = data.mardsCounter;
        grassEaterEaterCreaterCountElement.innerText = data.grassEaterEaterCreatersCounter;
        exanak.innerText = data.exanak;
        //! Every time it creates new Canvas woth new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        socket.on("weather", function (data) {
            weather = data;
        });
        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1 && data.exanak =="Amar") {
                    fill("#99ff33");
                    rect(j * side, i * side, side, side);
                }else if (matrix[i][j] == 1 && data.exanak =="Ashun") {
                    fill("#ffff66");
                    rect(j * side, i * side, side, side);
                }else if (matrix[i][j] == 1 && data.exanak =="Dzmer") {
                    fill("#666633");
                    rect(j * side, i * side, side, side);
                }else if (matrix[i][j] == 1 && data.exanak =="Garun") {
                    fill("green");
                    rect(j * side, i * side, side, side);
                }else if (matrix[i][j] == 2) {
                    fill("orange");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('red');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('blue');
                    rect(j * side, i * side, side, side);
                }else if (matrix[i][j] == 5) {
                    fill('black');
                    rect(j * side, i * side, side, side);
                }
            }
        }
    }
}