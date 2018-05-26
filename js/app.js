// /*ADD MOVE COUNTER TO COUNT TOTAL MOVES
// ADD THE TIME THAT WHILE THE GAME PLAYED

// /*
//  * set up the event listener for a card. If a card is clicked:
//  *  - display the card's symbol (put this functionality in another function that you call from this one)
//  *  -
//  *  - if the list already has another card, check to see if the two cards match
//  *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
//  *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
//  *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
//  *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)




function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
// Create a list that holds all of your cards
var cards=[
  {
    rank: "udacity1",
    suit: "u",
    cardImage: "img/udacity.jpeg",
    id: null,
    clicked: false
  },

  {
    rank: "udacity2",
    suit: "u2",
    cardImage: "img/udacityOr.jpeg",
    id: null,
    clicked: false
  },

  {
    rank: "dog",
    suit: "aussie",
    cardImage: "img/aussie.jpg",
    id: null,
    clicked: false
  },

  {
    rank: "ice-cream",
    suit: "sweet",
    cardImage: "img/ice-cream.png",
    id: null,
    clicked: false
  },

  {
    rank: "jquery",
    suit: "jq",
    cardImage: "img/jquery.png",
    id: null,
    clicked: false
  },

  {
    rank: "javascript",
    suit: "js",
    cardImage: "img/js.jpg",
    id: null,
    clicked: false
  },

  {
    rank: "node",
    suit: "nd",
    cardImage: "img/node.jpeg",
    id: null,
    clicked: false
  },

  {
    rank: "react",
    suit: "rc",
    cardImage: "img/react.png",
    id: null,
    clicked: false
  },
	{
		rank: "udacity1",
		suit: "u",
		cardImage: "img/udacity.jpeg",
    id: null,
    clicked: false
	},

	{
		rank: "udacity2",
		suit: "u2",
		cardImage: "img/udacityOr.jpeg",
    id: null,
    clicked: false
	},

	{
		rank: "dog",
		suit: "aussie",
		cardImage: "img/aussie.jpg",
    id: null,
    clicked: false
	},

	{
		rank: "ice-cream",
		suit: "sweet",
		cardImage: "img/ice-cream.png",
    id: null,
    clicked: false
	},

	{
		rank: "jquery",
		suit: "jq",
		cardImage: "img/jquery.png",
    id: null,
    clicked: false
	},

	{
		rank: "javascript",
		suit: "js",
		cardImage: "img/js.jpg",
    id: null,
    clicked: false
	},

	{
		rank: "node",
		suit: "nd",
		cardImage: "img/node.jpeg",
    id: null,
    clicked: false
	},

	{
		rank: "react",
		suit: "rc",
		cardImage: "img/react.png",
    id: null,
    clicked: false
	}

];

var number = 1;

var mouseClicked = function() {
  console.log("Mouse clicked", + number);
  number++;

}

var cardsInPlay = [];
var gameScore = 0;


//set up event listener for a card
 var flipCard = function(){
   var cardId = this.getAttribute("data-id");
   if(cards[cardId].clicked === true) {
     console.log("already clicked");
     return;
   }

//function that displays a card's symbol
  cards[cardId].id = cardId;
  cards[cardId].clicked = true;
  this.classList.add("cube");
  this.setAttribute("id", cardId);
	console.log("User flipped " + cards[cardId].rank );
  // add the card to a list of "open cards"
  //add the card to a *list* of "open" cards
	cardsInPlay.push(cards[cardId]);
	this.setAttribute("src", cards[cardId].cardImage);

  console.log("cardsInPlay length: ", cardsInPlay.length);
  //if the list already has another card check to see if two cards match
  if(cardsInPlay.length === 2) {
    console.log("2 cards in cardsInPlay");
    checkForMatch();
  }
  if(gameScore === 3){
    console.log("your score is:", gameScore);
    cardsInPlay = [];
    gameScore = 0;
    document.getElementById("trackScore").innerHTML = 0;
    resetGame();
    alert("You won the game with total of", mouseClicked , "!");
  }
  mouseClicked();
};



var checkForMatch = function(){
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
            document.getElementById(cardsInPlay[0].id).setAttribute("src", "img/back.png");
            document.getElementById(cardsInPlay[1].id).setAttribute("src", "img/back.png");
            cardsInPlay[0].clicked = false;
            cardsInPlay[1].clicked = false;
            // alert("thats not match!");
            cardsInPlay = [];
          }, 600);

        }
  }
}





 var createBoard= function(){
   //shuffle the list of cards using the provided "shuffle" method above
   //we need to shuffle the cards each time we create the new board
	 shuffle(cards);
   //loop through each card, create its HTML and add each card's HTML to the page
	for(var i=0; i < cards.length; i++){
		var cardElement= document.createElement("img");
		cardElement.setAttribute("src", "img/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
};


createBoard();


var resetGame = function(){

	// delete cards in cardsInPlay array
	for(i = cardsInPlay.length; i> 0; i--){
		cardsInPlay.pop();
	}

	// get rid of the current board
	var meset = document.getElementById("game-board");
	meset.remove();

	// because we removed the div "game-board" we need to recreate it so the createBoard() can be executed.
	var newD = document.createElement("div");
	newD.setAttribute("id", "game-board");
	newD.setAttribute("class", "board clearfix");
	document.getElementById("mainTag").appendChild(newD);

  for(var i=0; i < cards.length; i++ ){
    cards[i].clicked = false;
  }

	// create the new board
	createBoard();
};
