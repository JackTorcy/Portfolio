let ballColour = '#A3BBAD';
let ballNum = 50;
// ballSize = [size(px),speed(seconds)]
let ballSize = [3, 5, 7]
let balls = [];

for (let i = 0; i < ballNum; i++) {
    let currentBall = ballSize[Math.floor(Math.random() * 3)]; // 3,5 or 7px

    let ball = document.createElement('div'); // creates div
    ball.classList.add('ball'); //give it ball class

    ball.style.top = '215vh'; //Starting point as bottom of screen
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;//Starting point random point on x axis

    ball.style.height = `${currentBall}px`; //height as currentBall
    ball.style.width = ball.style.height; //width=height
}
// duration = currentBall[1]'
ball.style.transform = 'translateY(-209vh)';
let anim = ball.animate(
    [
        transform
    ]
)