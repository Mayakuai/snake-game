

//board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

// Snake head / start position
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

//Food 
var foodX = blockSize * 10;
var foodY = blockSize * 10;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //used for drawing

    update();

};


function update() {
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="lime";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
};

