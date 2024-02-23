let ballColour = '#A3BBAD';
let ballNum = 80;
// ballSize = [size(px),speed(seconds)]
let ballSize = [3, 5, 7];
let ballSpeed = [15, 10, 5];
let balls = [];

for (let i = 0; i < ballNum; i++) {
    let currentBallSize = ballSize[Math.floor(Math.random() * 3)]; // 3,5 or 7px WORKING

    let ball = document.createElement('div'); // creates div WORKING
    ball.classList.add('ball'); //give it ball class WORKING

    ball.style.top = `${Math.floor(Math.random() * 215)}vh`; //Starting point as bottom of screen
    ball.style.left = `${Math.floor(Math.random() * 99)}vw`;//Starting point random point on x axis

    ball.style.height = `${currentBallSize}px`; //height as currentBall WORKING
    ball.style.width = ball.style.height; //width=height WORKING

    balls.push(ball) // add ball to the balls array
    document.body.append(ball)
}



console.log(balls)

for (let i = 0; i < balls.length; i++) {
    let currentBall = balls[i]
    startX = Number(currentBall.style.left.replace('vw', ''))
    startY = Number(currentBall.style.top.replace('vh', ''))

    function randomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    currentBall.animate([
        { transform: `translate(0px,0px)` },
        { transform: `translate(${randomValue(-10, 10)}vw,${randomValue(-10, 10)}vh)` },
        { transform: `translate(${randomValue(-10, 10)}vw,${randomValue(-10, 10)}vh)` }
    ], {
        duration: 5000,
        iterations: Infinity
    });;


    /*
    For random directions:
    -Take starting positions as posX and posY
    -Randomly select 2 new positions within 10vh and 10vw
    -Have ballMovement go to each of the positions, repeating infinity with random speed, particles will be slowly floating around
    */
}

