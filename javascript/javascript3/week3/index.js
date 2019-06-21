const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
console.log(ctx);


class Circle {
    constructor(x, y, radius, startAngel, endAngel, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startAngel = startAngel;
        this.endAngel = endAngel;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x,  this.y, this.radius, this.startAngel, this.endAngel);
        ctx.stroke();

        ctx.fillStyle = this.color;
        ctx.fill();

    }
}
const c1 = new Circle(150,120, 20, 0, 2 * Math.PI, '#000000');
c1.draw();
const c2 = new Circle(50, 50, 15, 0, 2 * Math.PI, 'red');
c2.draw();