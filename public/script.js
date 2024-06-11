// // Setup canvas and context
// document.body.style.margin = 0;
// document.body.style.overflow = 'hidden';
// const cnv = document.getElementById('cnv_element');
// const ctx = cnv.getContext('2d', { willReadFrequently: true });


// // Default set up
// cnv.width = innerWidth;
// cnv.height = innerHeight;
// window.onresize = () => {
//     cnv.width = innerWidth;
//     cnv.height = innerHeight;};



const textContainer = document.getElementById('textContainer');
const nextButton = document.getElementById('nextButton');

const story = [
    "Welcome to a minimal intersensory short story where the story will be told via 2 main ways: sub-title",
    "and sound design.",
    "Suddenly, a shot rang out!",
    "The end. Thanks for playing!"
];

let state = 0; // tracks which part of the story you're at

nextButton.addEventListener('click', () => {
    if (state < story.length) {
        textContainer.textContent = story[state];
        state++;
    } else {
        textContainer.textContent = "Shadows grow as the sun dips out of sight. The morrow promises no respite ";
        nextButton.disabled = true;
    }
});

window.onload = () => {
    textContainer.textContent = "Click 'Next' to begin the story.";
};
