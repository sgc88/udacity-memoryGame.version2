// Create a list that holds all of your cards
const cards=[
  {
    rank: "udacity1",
    cardImage: "img/udacity.jpeg",
    id: null,
    clicked: false
  },

  {
    rank: "udacity2",
    cardImage: "img/udacityOr.jpeg",
    id: null,
    clicked: false
  },

  {
    rank: "dog",
    cardImage: "img/aussie.jpg",
    id: null,
    clicked: false
  },

  {
    rank: "ice-cream",
    cardImage: "img/ice-cream.png",
    id: null,
    clicked: false
  },

  {
    rank: "jquery",
    cardImage: "img/jquery.png",
    id: null,
    clicked: false
  },

  {
    rank: "javascript",
    cardImage: "img/js.jpg",
    id: null,
    clicked: false
  },

  {
    rank: "node",
    cardImage: "img/node.jpeg",
    id: null,
    clicked: false
  },

  {
    rank: "react",
    cardImage: "img/react.png",
    id: null,
    clicked: false
  },
	{
		rank: "udacity1",
		cardImage: "img/udacity.jpeg",
    id: null,
    clicked: false
	},

	{
		rank: "udacity2",
		cardImage: "img/udacityOr.jpeg",
    id: null,
    clicked: false
	},

	{
		rank: "dog",
		cardImage: "img/aussie.jpg",
    id: null,
    clicked: false
	},

	{
		rank: "ice-cream",
		cardImage: "img/ice-cream.png",
    id: null,
    clicked: false
	},

	{
		rank: "jquery",
		cardImage: "img/jquery.png",
    id: null,
    clicked: false
	},

	{
		rank: "javascript",
		cardImage: "img/js.jpg",
    id: null,
    clicked: false
	},

	{
		rank: "node",
		cardImage: "img/node.jpeg",
    id: null,
    clicked: false
	},

	{
		rank: "react",
		cardImage: "img/react.png",
    id: null,
    clicked: false
	}

];

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

let number = 0;
let timeInSeconds = 0;
let gameTime;
let stars = ['*', '*', '*'];

// function to convert stars in stars array into a string, to use in html.
const starString = function(arr) {
  let str = '';
  for(let i=0; i < arr.length; i++) {
    str += arr[i];
  }
  return str;
}

// counting clicks while game in play
const mouseClicked = function() {
  number++;
  if(number === 1) {
    //counting time while game in play
    gameTime = setInterval(function() {
      timeInSeconds++;
      document.getElementById("timer").innerHTML = "Time: " + timeInSeconds;
    }, 1000);
  }
  document.getElementById("moves").innerHTML= "Total Moves: " + number;

  if(number === 5) {
    stars.pop();
    const newStars = starString(stars);
    document.getElementById("stars").innerHTML =  "Stars: " + newStars;
  }

  if(number === 10) {
    stars.pop();
    const newStars = starString(stars);
    document.getElementById("stars").innerHTML = "Star: " + newStars;
  }
}

let cardsInPlay = [];
let gameScore = 0;
let gameSwitch = true;


 //set up the event listener for a card
const flipCard = function(){
  // we need to make sure we can't flip more then 2 cards to compare
  if(!gameSwitch) {
      return;
    }
     const cardId = this.getAttribute("data-id");
     if(cards[cardId].clicked === true) {
       return;
   }


  //function that displays a card's symbol
  cards[cardId].id = cardId;
  cards[cardId].clicked = true;
  this.classList.add("cube");
  this.setAttribute("id", cardId);
	//console.log("User flipped " + cards[cardId].rank );
  // add the card to a list of "open cards"- add the card to a *list* of "open" cards
	cardsInPlay.push(cards[cardId]);
	this.setAttribute("src", cards[cardId].cardImage);

  //if the list already has another card check to see if two cards match
  if(cardsInPlay.length === 2) {
    gameSwitch = false;
    checkForMatch();
    //enabligin the cards to be able play again
    setTimeout(function() {
        gameSwitch = true;
    }, 750)
  }


mouseClicked();
  //when the user wins the game
  if(gameScore === 8){
    clearInterval(gameTime);
    setTimeout(function() {
      alert(`You won the game with total of ${number} moves, in ${timeInSeconds} seconds!`);
      if(stars.length === 3) {

        swal({
        title: "Awesome!",
        text: `You did great! Your performance was ${stars.length} stars!.Please click ok to reset the game.`,
        imageUrl: 'img/thumb-up.png'
      });

      }
      if(stars.length === 2) {
        swal({
        title: "Sweet!",
        text: `You did good! Your performance was ${stars.length} stars!.Please click ok to reset the game.`,
        imageUrl: 'img/thumb-up.png'
      });


      }
      if(stars.length === 1) {
        swal({
        title: "Sweet!",
        text: `You did OK. Your performance was ${stars.length} star, try to solve the memory game faster next time.Please click ok to reset the game.`,
        imageUrl: 'img/thumb-up.png'
      });

      }
      cardsInPlay = [];
      gameScore = 0;
      timeInSeconds = 0;
      stars = ['*', '*', '*'];
      newStars = starString(stars);
      document.getElementById("stars").innerHTML = newStars;
      document.getElementById("trackScore").innerHTML = 0;
      document.getElementById("moves").innerHTML = "Total moves: " + 0;
      document.getElementById("timer").innerHTML = "Time: " + 0;

      resetGame();
    }, 750);
  }
};



const checkForMatch = function(){
  //if the list already has another card check to see if two cards match
  if(cardsInPlay.length <= 2){
      	if(cardsInPlay[0].rank === cardsInPlay[1].rank){
      		alert("you found a match!");
      		gameScore ++;
      		document.getElementById("trackScore").innerHTML= gameScore;
          cardsInPlay = [];
        }else{
          //if they dont match remove both cards from array and hide the symbols
          setTimeout(function() {
            document.getElementById(cardsInPlay[0].id).setAttribute("src", "img/blueish.jpg");
            document.getElementById(cardsInPlay[1].id).setAttribute("src", "img/blueish.jpg");
            cardsInPlay[0].clicked = false;
            cardsInPlay[1].clicked = false;
            // alert("thats not match!");
            cardsInPlay = [];
          }, 600);

      }
  }
}

 const createBoard = function(){
   //shuffle the list of cards using the provided "shuffle" method above
   //we need to shuffle the cards each time we create the new board
	 shuffle(cards);
   //loop through each card, create its HTML and add each card's HTML to the page
	for(let i=0; i < cards.length; i++){
		const cardElement= document.createElement("img");
		cardElement.setAttribute("src", "img/blueish.jpg");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	 }
};


createBoard();


const resetGame = function(){
  clearInterval(gameTime);
  timeInSeconds = 0;
	// delete cards in cardsInPlay array
	for(let i = cardsInPlay.length; i> 0; i--){
		cardsInPlay.pop();
	}

	// get rid of the current board
	const meset = document.getElementById("game-board");
	meset.remove();

	// because we removed the div "game-board" we need to recreate it so the createBoard() can be executed.
	const newD = document.createElement("div");
	newD.setAttribute("id", "game-board");
	newD.setAttribute("class", "board clearfix");
	document.getElementById("mainTag").appendChild(newD);

  for(let i=0; i < cards.length; i++ ){
    cards[i].clicked = false;
  }

	// create the new board
	createBoard();

  gameScore = 0;
  number = 0;
  stars = ['*', '*', '*'];
  newStars = starString(stars);
  document.getElementById("stars").innerHTML = "Stars:" + newStars;
  document.getElementById("trackScore").innerHTML = gameScore;
  document.getElementById("moves").innerHTML = "Total moves: " + number;
  document.getElementById("timer").innerHTML = "Time: " + 0;

};
