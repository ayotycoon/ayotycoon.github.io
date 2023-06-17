export const draw = () => {
    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 5;

    const ctx = canvas.getContext("2d");
    const mouse = {
        x: 0,
        y: 0
    }

    const maxRadius = 40;
    const colorArr = ["#6256ff6d", "#ff7d6b6d", "#cc4e4e6d"];
    window.addEventListener('mousemove', (e) => {

        mouse.x = e.x;
        mouse.y = e.y;


    })
    window.addEventListener('resize', (e) => {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 5;


    })



    class Circle {
        radius = Math.random() * 5;
        prevRadius = this.radius;
        color =  colorArr[Math.floor(Math.random() * (colorArr.length))];

        physics = {
            x: Math.random() * (canvas.width - this.radius * 2) + this.radius,
            xVelocity: (Math.random() - 0.5) * 2,

            y: Math.random() * (canvas.height - this.radius * 2) + this.radius,
            yVelocity: (Math.random() - 0.5) * 2,
        };


        draw = () => {
            // clear

            if (
                this.physics.x + this.radius > canvas.width ||
                this.physics.x - this.radius < 0
            ) {
                this.physics.xVelocity = -this.physics.xVelocity;
            }

            if (this.physics.y + this.radius > canvas.height || this.physics.y < 0) {
                this.physics.yVelocity = -this.physics.yVelocity;
            }

            // draw sercle
            ctx.beginPath();
            ctx.arc(
                this.physics.x,
                this.physics.y,
                this.radius,
                0,
                Math.PI * 2,
                false
            );

            ctx.fillStyle = this.color;
            ctx.fill();

            this.physics.x = this.physics.x + this.physics.xVelocity;
            this.physics.y = this.physics.y + this.physics.yVelocity;

            if (
                mouse.x - this.physics.x < 50 &&
                mouse.x - this.physics.x > -50 &&
                mouse.y - this.physics.y < 50 &&
                mouse.y - this.physics.y > -50
            ) {
                if (this.radius <= maxRadius) {
                    this.radius += 1;
                }
            } else if (this.radius > 2) {
                if(this.radius !==  this.prevRadius) {
                    this.radius--;
                }

            }
        };
    }

    const circles = [];

    for (let i = 0; i < 500; i++) {
        circles.push(new Circle());
    }

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        circles.forEach(circle => {
            circle.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
};
