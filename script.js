let ballColour = '#A3BBAD';
let ballNum = 68;
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
    // console.log(currentBall)
    let currentBallSpeed = 0
    // console.log('complete')
    if (currentBall.style.height == '3px') {
        currentBallSpeed = ballSpeed[0]
    } else if (currentBall.style.height == '5px') {
        currentBallSpeed = ballSpeed[1]
    } else {
        currentBallSpeed = ballSpeed[2]
    }

    // let id = null;
    // let posY = currentBall.style.top
    // posY = Number(posY.replace('vh', ''))
    // let posX = currentBall.style.left
    // posX = Number(posX.replace('vw', ''))
    // clearInterval(id);
    // id = setInterval(movement, 2000);
    // function movement() {
    //     currentBall.style.top = posY + 40 + 'vh'
    //     currentBall.style.left = posX + 40 + 'vw'
    // }
    function randomTiming(min,max) {
        return Math.floor(Math.random() * (max-min+1)+min)
    }


    const ballMovement = [
        { transform: "translateX(5vw)" },
        { transform: "translateX(80vw)" },
    ];

    const ballTiming = {
        duration: randomTiming(5000,15000),
        iterations: Infinity,
    };

    currentBall.animate(ballMovement, ballTiming);

    /*
    For random directions:
    -Take starting positions as posX and posY
    -Randomly select 2 new positions within 10vh and 10vw
    -Have ballMovement go to each of the positions, repeating infinity with random speed, particles will be slowly floating around
    
    */

    // currentBall.animate(
    //     [
    //         { transform: "scale(0)" },
    //         { transform: "scale(1)" },
    //     ],
    //     {
    //         duration: 5,
    //         iterations: 1,

    //     }

    // )
}

