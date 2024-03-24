//? variable declaration ?//
let ballNum = 300; //No of background balls
let ballSize = 4; //px size of balls
let balls = []; //Empty array - balls to be added

//? Generates balls ?//
for (let i = 0; i < ballNum; i++) {
    //* Create balls *//
    let ball = document.createElement('div'); //for each ball - creates div
    ball.classList.add('ball'); //adds class to each ball - border-radius, position etc

    //* Ball Position *//
    ball.style.top = `${Math.floor(Math.random() * 340)}vh`; //Random y-axis starting point //! Max Screen VH of 350 !//
    ball.style.left = `${Math.floor(Math.random() * 99)}vw`; //Random x-axis starting point //! Max Screen VW of 100 !//

    //* Ball Size *//
    ball.style.height = `${ballSize}px`; //set height
    ball.style.width = ball.style.height; //set width - same as height (circle)

    //* Puts balls on the screen *//
    balls.push(ball) //Ball is setup, add to array
    document.body.append(ball) //Adds each ball to the DOM
}

//? Gives balls movement ?//
for (let i = 0; i < balls.length; i++) {
    //* Local Variable - iteration purposes *//
    let currentBall = balls[i]

    //* Local Function - for random values *//
    function randomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min) //Returns a random value anywhere between 2 given values
    }

    //? Variable Declaration - animation ?//
    //* Random first point - calls local function *//
    transformx1 = randomValue(-10, 10)
    transformy1 = randomValue(-10, 10)
    //* Random second point - calls local function *//
    transformx2 = randomValue(-10, 10)
    transformy2 = randomValue(-10, 10)
    //* Speed - between 20-30s for full animation *//
    animationLen = randomValue(20000, 30000) //Measured in milliseconds

    //? Animation *//
    currentBall.animate([
        //* Movement *//
        { transform: `translate(0px,0px)`, easing: 'ease-in' },
        { transform: `translate(${transformx1}vw,${transformy1}vh)`, easing: 'linear' }, //Moves to first point - random value
        { transform: `translate(${transformx2}vw,${transformy2}vh)`, easing: 'linear' }, //After, moves to second point - random value
        { transform: `translate(0px,0px)`, easing: 'ease-out' }

    ], {
        //* Properties *//
        duration: animationLen,
        iterations: Infinity,
    });;
}

//? Scroll Animation Triggers ?//
//! ALL SAME - ONLY ADDED COMMENTS ON FIRST 2 !//
//* About *//
const about = document.querySelector('.about'); //Assigns HTML element to variable
const aboutObserver = new IntersectionObserver(entries => { //Creates new Observer to watch intersection
    entries.forEach(entry => { //Loop over the entries
        if (entry.isIntersecting) { //If the element is visible
            about.classList.add('about-animation'); //Add the animation class
            return;
        }
    });
});
aboutObserver.observe(about); //Calls about Observer - passing about variable

//* Skills *//
const skillBox = document.querySelectorAll('.gridItem'); //Assigns all HTML elements with class to variable
const skillsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('skills-animation'); //Assigns classlist to entry rather than specific element
        }
    });
});
//Iterate through all selected HTML elements and add class when on screen
skillBox.forEach((element) => skillsObserver.observe(element));

//* Project 1 *// 
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

//* Project 2 *// 
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

//* Project 3 *// 
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