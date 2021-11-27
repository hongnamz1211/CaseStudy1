
class Food {
    x
    y
    grid
    grids
    row
    column
    // radius
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.grid = 20;
        // this.grids = 40
        this.row = canvas.width / this.grid;
        this.column = canvas.height / this.grid;
    }

    // house() {
    //     ctx.fillStyle = "black"
    //     // ctx.fillRect(200, 200, this.grid * 2, this.grid * 2);
    //     ctx.arc(225,210,20,0,Math.PI * 2,false)
    //     ctx.stroke()
    //
    // }

    styleFood() {
        ctx.fillStyle = "red"
        ctx.fillRect(this.x, this.y, this.grid - 2, this.grid - 2);
    }
    // styleFoods() {
    //     ctx.fillStyle = "black"
    //     // ctx.fillRect(this.x, this.y, this.grid)
    // }


    resetFood() {
        this.x = (Math.floor(Math.random() * this.row - 1) + 1) * this.grid;
        this.y = (Math.floor(Math.random() * this.column - 1) + 1) * this.grid;
    }

    // resetFoods() {
    //     this.x = (Math.floor(Math.random() * this.row - 1) + 1) * (20 + this.grids);
    //     this.y = (Math.floor(Math.random() * this.column - 1) + 1) * (20 + this.grids);
    // }
}
