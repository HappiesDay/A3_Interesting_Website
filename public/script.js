document.body.style.margin   = 0
document.body.style.overflow = `hidden`

const cnv = document.getElementById (`cnv_element`)
cnv.width = window.innerWidth
cnv.height = window.innerHeight

const ctx = cnv.getContext (`2d`)



window.onresize = () => {
   cnv.width = innerWidth
   cnv.height = innerHeight   
}

const textContainer = document.getElementById('textContainer');
const nextButton = document.getElementById('nextButton');

const story = [
    "Welcome to our story.",
    "It was a dark and stormy night.",
    "Suddenly, a shot rang out!",
    "The end. Thanks for playing!"
];

let state = 0; // tracks which part of the story you're at

nextButton.addEventListener('click', () => {
    if (state < story.length) {
        textContainer.textContent = story[state];
        state++;
    } else {
        textContainer.textContent = "You've reached the end of the story.";
        nextButton.disabled = true;
    }
});

window.onload = () => {
    textContainer.textContent = "Click 'Next' to begin the story.";
};
