
class Food {
    x
    y
    grid
    row
    column
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.grid = 20;
        // this.grids = 40
        this.row = canvas.width / this.grid;
        this.column = canvas.height / this.grid;
    }

    styleFood() {
        ctx.fillStyle = "red"
        ctx.fillRect(this.x, this.y, this.grid - 2, this.grid - 2);
    }

    resetFood() {
        this.x = (Math.floor(Math.random() * this.row - 1) + 1) * this.grid;
        this.y = (Math.floor(Math.random() * this.column - 1) + 1) * this.grid;
    }
}
