const startButton = document.getElementById("startbtn");
const movesElement = document.getElementById("moves");
const timerElement = document.getElementById("timer");

let movesCount = 0;
let seconds = 0;
let minutes = 0;
let timer;
let clickedCards = 0;

 //Event listener for the start button
startButton.addEventListener("click", startGame);

// Function to start the game
function startGame() {
    // Reset moves count, timer, and clicked cards count
    movesCount = 0;
    seconds = 0;
    minutes = 0;
    clickedCards = 0;
    movesElement.textContent = "0 move(s)";
    timerElement.textContent = "Time: 0 mins 0 sec";

    // Remove event listeners from cards
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", handleCardClick);
    }

    // Start the timer
    timer = setInterval(updateTimer, 1000);
}

// Function to update the timer
function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    timerElement.textContent = `Time: ${minutes} mins ${seconds} sec`;
}
 const cards = document.querySelectorAll('.card');
let cardOne = null;
let cardTwo = null;

cards.forEach(card => {
    card.addEventListener('click', flipCard);});
function flipCard(e) {
  let clickedCard = e.target.parentNode;

  if (clickedCard !== cardOne) {
    clickedCard.classList.add('flip');

    if (!cardOne) {
      cardOne = clickedCard;
      return;
    }

    cardTwo = clickedCard;

    let cardOneImg = cardOne.querySelector('img').src;
    let cardTwoImg = cardTwo.querySelector('img').src;
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  if (img1 === img2) { // if two card images matches
    cardOne.removeEventListener('click', flipCard);
    cardTwo.removeEventListener('click', flipCard);
    cardOne = cardTwo = '';
  } else {
    setTimeout(() => {
      cardOne.classList.add('vibration');
      cardTwo.classList.add('vibration');
    }, 100);

    setTimeout(() => {
      cardOne.classList.remove('vibration', 'flip');
      cardTwo.classList.remove('vibration', 'flip');
      cardOne = cardTwo = '';
    }, 1200);
  }
}
/*

  // Get the necessary elements

// Function to handle card clicks
function handleCardClick() {
    // Increment moves count
    movesCount++;
    movesElement.textContent = `${movesCount} move(s)`;

    // Check if all cards have been clicked
    clickedCards++;
    if (clickedCards === cards.length) {
        // Stop the timer
        clearInterval(timer);
    }
}





















