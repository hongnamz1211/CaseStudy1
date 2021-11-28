class Snake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.grid = 20;
        this.xDirection = this.grid;
        this.yDirection = 0;
        this.tail = [];
        this.length = 3;
    }
    setXY(x,y) {
        this.x = x;
        this.y = y;
        this.grid = 20;
        this.xDirection = this.grid;
        this.yDirection = 0;
        this.tail = [];
        this.length = 3;
    }

    getRandomColor() {
        return Math.floor(Math.random() * 255)
    }

    changeDirection(direction) {
        if (direction === "Left" && this.xDirection === 0) {
            this.xDirection = -this.grid;
            this.yDirection = 0;
        }
        if (direction === "Up" && this.yDirection === 0) {
            this.xDirection = 0;
            this.yDirection = -this.grid;
        }
        if (direction === "Right" && this.xDirection === 0) {
            this.xDirection = this.grid;
            this.yDirection = 0;
        }
        if (direction === "Down" && this.yDirection === 0) {
            this.xDirection = 0;
            this.yDirection = this.grid;
        }
    }

    autoMove(check) {
        if (check === false) {
            this.x += this.xDirection;
            this.y += this.yDirection;
            this.tail.unshift({x: this.x, y: this.y});
            if (this.tail.length > this.length) {
                this.tail.pop();
            }
        }
    }

    eatFood() {
        if (this.x === myFood.x && this.y === myFood.y) {
            myFood.resetFood();
            this.length++;
            score++;
            soundEatFood.play()
        }
    }

    drawSnake() {
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = "red";
        // ctx.fillRect(this.x, this.y,this.grid - 2, this.grid - 2)
        ctx.fillRect(this.tail[0].x, this.tail[0].y, this.grid - 2, this.grid - 2)
        ctx.strokeRect(this.tail[0].x, this.tail[0].y, this.grid - 2, this.grid - 2)
        ctx.fillStyle = "red"
        ctx.fillRect(this.tail[0].x + 3, this.tail[0].y + 3, this.grid -8, this.grid - 8)
        ctx.fillStyle = "blue"
        ctx.fillRect(this.tail[0].x + 6, this.tail[0].y + 6, this.grid -14, this.grid - 14)

    }

    drawTail() {
        for (let i = 0; i < this.tail.length; i++) {
            let red = this.getRandomColor();
            let green = this.getRandomColor();
            let blue = this.getRandomColor();
            // ctx.fillStyle = "yellow"
            ctx.fillStyle = "rgb("+ red + "," + blue + "," + green + ")"
            ctx.fillRect(this.tail[i].x, this.tail[i].y, this.grid-2, this.grid -2)
            ctx.fillStyle = "yellow"
            ctx.fillRect(this.tail[0].x, this.tail[0].y + 6, this.grid - 2, this.grid - 14)
        }
    }
}