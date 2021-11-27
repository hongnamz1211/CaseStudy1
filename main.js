let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let speedGame = 10;
let score = 0;

let mySnake = new Snake(-20, 320);
let myFood = new Food(100, 100);

function playGame() {
    if (gameOver()) {
        let red = mySnake.getRandomColor();
        let green = mySnake.getRandomColor();
        let blue = mySnake.getRandomColor();
        ctx.fillStyle = "rgb(" + red + "," + blue + "," + green + ")"
        ctx.font = "80px Arial";
        ctx.fillText("Game Over!", canvas.width / 6, canvas.height / 2);
        setTimeout(playGame, 1 / ctx.font)
        return
    }
    clearCanvas();
    drawScore();
    mySnake.drawTail();
    mySnake.eatFood();
    mySnake.autoMove(gameOver());
    myFood.styleFood();
    mySnake.drawSnake();
    setTimeout(playGame, 1000 / speedGame);
}

function clearCanvas() {
    // Viền border
    ctx.strokeStyle = "red";
    // Bao khung border
    ctx.clearRect(0, 0, 600, 400);
    // Vẽ viền quanh border
    ctx.strokeRect(0, 0, 600, 400)
}

function drawScore() {
    ctx.fillStyle = "yellow";
    ctx.font = "12px Arial";
    ctx.fillText("Score :  " + score, canvas.width - 70, 20);
    if (score > 5) {
        return speedGame = 12;
    }
    if (score > 10) {
        return speedGame = 16;
    }
    if (score > 15) {
        return speedGame = 20;
    }
}

function gameOver() {
    for (let i = 1; i < mySnake.tail.length - 1; i++) {
        console.log('i = ' + i);
        if (mySnake.tail[i].x === mySnake.x && mySnake.tail[i].y === mySnake.y) {
            // alert('game over');
            return true;
        }
        if (mySnake.x < 0) {
            // alert("đâm trái")
            return true
        } else if (mySnake.x > canvas.width - 20) {
            // alert("đâm phải")
            return true
        } else if (mySnake.y < 0) {
            // alert("đâm top")
            return true
        } else if (mySnake.y > canvas.height - 20) {
            // alert("đâm bot")
            return true
        }
    }
    return false;
}

window.addEventListener("keydown", ((event) => {
            let direction = event.key.replace("Arrow", "")
            mySnake.changeDirection(direction);
        }
    )
)

playGame();