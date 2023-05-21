/*
const cards = document.querySelectorAll('.card');
let cardOne = null;
let cardTwo = null;

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
  if (img1 === img2) { // if two card images matched
    cardOne.removeEventListener('click', flipCard);
    cardTwo.removeEventListener('click', flipCard);
    cardOne = cardTwo = '';
  } else {
    setTimeout(() => {
      cardOne.classList.add('vibration');
      cardTwo.classList.add('vibration');
    }, 400);

    setTimeout(() => {
      cardOne.classList.remove('vibration', 'flip');
      cardTwo.classList.remove('vibration', 'flip');
      cardOne = cardTwo = '';
    }, 1200);
  }
}

cards.forEach(card => {
  card.addEventListener('click', flipCard);
});
*/