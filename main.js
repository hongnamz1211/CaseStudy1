let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let speedGame = 10;
let score = 0;
let soundEatFood = document.getElementById('sound-eat-food')
let soundGameOver = document.getElementById('sound-game-over')

let mySnake = new Snake(-20, 320);
let myFood = new Food(120, 120);

function showModalUserName() {
    // document.getElementById('modal').style.display = 'block'
    document.getElementById('game-start').style.display = 'block'
    document.getElementById('game-over').style.display = 'none'
    document.getElementById('high-score').style.display = 'none'
    gamePause()
}

function gamePause() {
    clearCanvas();
    drawScore();
    inputUser();
    mySnake.drawTail();
    mySnake.eatFood();
    mySnake.autoMove(gameOver());
    myFood.styleFood();
    mySnake.drawSnake();
}

function btnStart() {
    hideModalUserName()
}

function hideModalUserName() {
    document.getElementById('modal').style.display = 'none'
    document.getElementById('game-start').style.display = 'none'
    document.getElementById('game-over').style.display = 'none'
    document.getElementById('high-score').style.display = 'none'
    gameStart()
}

let status

function gameStart() {
    status = gameOver()
    if (status) {
        document.getElementById('modal').style.display = 'block'
        document.getElementById('user-start').style.display = 'none'
        document.getElementById('game-over').style.display = 'block'
        document.getElementById('high-score').style.display = 'none'
        soundGameOver.play()
        localStorage.setItem("Score" + (localStorage.length), userName + " -------- " + score)
        return
    }
    clearCanvas();
    drawScore();
    inputUser();
    mySnake.drawTail();
    mySnake.eatFood();
    mySnake.autoMove(gameOver());
    myFood.styleFood();
    mySnake.drawSnake();
    setTimeout(gameStart, 1000 / speedGame);
}

function gameOver() {
    for (let i = 1; i < mySnake.tail.length - 1; i++) {
        console.log('i = ' + i);
        if (mySnake.tail[i].x === mySnake.x && mySnake.tail[i].y === mySnake.y) {
            return true;
        }
        if (mySnake.x < 0) {
            return true
        } else if (mySnake.x > canvas.width - 20) {
            return true
        } else if (mySnake.y < 0) {
            return true
        } else if (mySnake.y > canvas.height - 20) {
            return true
        }
    }
    return false;
}

function gamePlayAgain() {
    mySnake.setXY(-20, 320)
    clearCanvas();
    drawScore(score = 0);
    inputUser();
    mySnake.drawTail();
    mySnake.eatFood();
    mySnake.autoMove(gameOver());
    myFood.styleFood();
    mySnake.drawSnake();
    // mySnake.drawSnake()
    // mySnake.drawTail()
    // mySnake = new Snake(-20, 320)
    document.getElementById('modal').style.display = 'none'
    document.getElementById('game-over').style.display = 'none'
    setTimeout(gameStart, 1000 / speedGame);
}

function clearCanvas() {
    // Bao khung border
    ctx.clearRect(0, 0, 600, 400);
    // Vẽ viền quanh border
    ctx.strokeRect(0, 0, 600, 400)
}

function inputUser() {
    userName = document.getElementById('user-start').value;
    ctx.fillStyle = "yellow";
    ctx.font = "12px Arial";
    ctx.fillText("User: " + userName, 30, 20);
}

function drawScore() {
    document.getElementById('score').innerText = 'Score: ' + score
    ctx.fillStyle = "yellow";
    ctx.font = "12px Arial";
    ctx.fillText("Score: " + score, canvas.width - 70, 20);
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

function highScore() {
    document.getElementById('modal').style.display = 'block'
    document.getElementById('game-start').style.display = 'none'
    document.getElementById('user-start').style.display = 'none'
    document.getElementById('game-over').style.display = 'none'
    document.getElementById('high-score').style.display = 'block'
    for (let i = 0; i < localStorage.length; i += 1) {
        // console.log(localStorage.length)
        // console.log(localStorage.getItem(localStorage.key(i+1)))
        const node = document.createElement("div");
        const textNode = document.createTextNode(localStorage.getItem(localStorage.key(i)));
        node.appendChild(textNode);
        document.getElementById("score-user").appendChild(node);
        localStorage.removeItem("Score0")
        localStorage.removeItem("Score1")
        localStorage.removeItem("Score2")
    }
}

function btnBack() {
    gameBack()
}

function gameBack() {
    document.getElementById('modal').style.display = 'block'
    document.getElementById('user-start').style.display = 'none'
    document.getElementById('game-over').style.display = 'block'
    document.getElementById('high-score').style.display = 'none'
}

window.addEventListener("keydown", ((event) => {
            let direction = event.key.replace("Arrow", "")
            mySnake.changeDirection(direction);
        }
    )
)

showModalUserName()