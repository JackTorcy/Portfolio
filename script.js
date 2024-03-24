//!variable declaration
let ballNum = 300;
let ballSize = 4;
let balls = [];

//!Generates balls
for (let i = 0; i < ballNum; i++) {
    //Create balls
    let ball = document.createElement('div'); // create div's
    ball.classList.add('ball'); //add class

    //Ball Position
    ball.style.top = `${Math.floor(Math.random() * 350)}vh`; //Random y-axis starting point //!Max Screen VH of 350
    ball.style.left = `${Math.floor(Math.random() * 99)}vw`;//Random x-axis starting point

    //Ball Size
    ball.style.height = `${ballSize}px`; //ball height
    ball.style.width = ball.style.height; //ball width - same as height

    //Puts balls on the screen
    balls.push(ball) // add ball to the balls array
    document.body.append(ball) //Adds the ball to the body individually
}

//!Gives balls movement
for (let i = 0; i < balls.length; i++) {
    //Defines current iteration
    let currentBall = balls[i]

    //Random value in range generator
    function randomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    //!Animation Variables
    //First movement
    transformx1 = randomValue(-10, 10)
    transformy1 = randomValue(-10, 10)
    //Second movement
    transformx2 = randomValue(-10, 10)
    transformy2 = randomValue(-10, 10)
    //Speed - between 20-30s for full animation
    animationLen = randomValue(20000, 30000)


    currentBall.animate([
        { transform: `translate(0px,0px)`, easing: 'ease-in' },
        { transform: `translate(${transformx1}vw,${transformy1}vh)`, easing: 'linear' },
        { transform: `translate(${transformx2}vw,${transformy2}vh)`, easing: 'linear' },
        { transform: `translate(0px,0px)`, easing: 'ease-out' }

    ], {
        duration: animationLen,
        iterations: Infinity,
    });;
}
const about = document.querySelector('.about');
const aboutObserver = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            about.classList.add('about-animation');
            return;
        }
    });
});
aboutObserver.observe(about);

const skillBox = document.querySelectorAll('.gridItem');
const skillsObserver = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('skills-animation');
        }
    });
});
skillBox.forEach((element) => skillsObserver.observe(element));

const project1 = document.querySelector('#card1');
const project1Observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            project1.classList.add('card1-animation');
            return;
        }
    });
});
project1Observer.observe(project1)

const project2 = document.querySelector('#card2');
const project2Observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            project2.classList.add('card2-animation');
            return;
        }
    });
});
project2Observer.observe(project2)

const project3 = document.querySelector('#card3');
const project3Observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            project3.classList.add('card3-animation');
            return;
        }
    });
});
project3Observer.observe(project3)