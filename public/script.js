document.body.style.margin   = 0
document.body.style.overflow = `hidden`

const cnv = document.getElementById (`cnv_element`)
cnv.width = innerWidth
cnv.height = innerHeight

const ctx = cnv.getContext (`2d`)



window.onresize = () => {
   cnv.width = innerWidth
   cnv.height = innerHeight   
}

// Google Analytics Initialization
function gtag() {
   dataLayer.push(arguments);
}
window.dataLayer = window.dataLayer || [];
gtag('js', new Date());
gtag('config', 'G-QF48D6FF2M');

// Game messages and phases
var messages = {
   'first': [
       ['<small>This is the warm-up round. Start jerking off and try to get to the edge when the bar gets to 100% of the EDGE zone.<br />You should be ready to cum when the bar reaches the CUM zone.<br />Try to get as close as possible, it will make the rest of the game even more fun!</small>', 45, 2]
   ],
   'go': [
       ['You can jerk off now!', 30, 2],
       ['Jerk off as fast as you can NOW!', 15, 4],
       ['Go HARD and FAST', 10, 4],
       ['Stroke', 25, 2],
       ['Go SLOW and steady...', 30, 1],
       ['Use your other hand!', 20, 2.5],
       ['Jerk off ONLY the tip, use only TWO FINGERS.', 25, 2.5],
       ['Squeeze your balls', 10, 3],
       ['Gently slap your balls', 10, 4]
   ],
   'stop': [
       ['STOP TOUCHING! Calm down, be ready for the next one...', 25],
       ['No touching!', 20],
       ['Hands off your cock NOW', 25],
       ['Hands behind your head', 25],
       ['Fingers on your nipples.', 25],
       ['Flex your biceps', 25],
       ['Lick your biceps', 20],
       ['Feel your body with your hands', 25],
       ['DON\'T CUM! Stop touching.', 25]
   ],
   'finish': [
       ['STOP! Sorry, no cumshot for you. <br />Try again, maybe you will get lucky... Now get your hands off your dick until this is over.', 45, 'red', 2],
       ['CUM! DO IT NOW', 15, 'green', 4],
       ['You can cum now. GO!', 25, 'green', 2.5]
   ]
};

var gameoverMessages = {
   'postCum': "If you haven't cum yet, game over, STOP JERKING!<br />If you did, good job!",
   'noCum': [
       "Congratulations, you have completed your edging session!",
       "You are NOT allowed to cum for this session.",
       "Reload the page if you want to start again!"
   ]
};

// Helper function to display messages based on the game phase
function displayMessage(phase) {
   var phaseMessages = messages[phase];
   var randomIndex = Math.floor(Math.random() * phaseMessages.length);
   var message = phaseMessages[randomIndex];
   document.getElementById('message').innerHTML = message[0];
}

// Start the game
function startGame() {
   displayMessage('first');
   // Further game logic would go here
}

document.getElementById('submit').addEventListener('click', function(event) {
   event.preventDefault();
   startGame();
});