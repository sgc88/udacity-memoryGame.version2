// /*
//  * Create a list that holds all of your cards
//  */
//
//
// /*
//  * Display the cards on the page
//  *   - shuffle the list of cards using the provided "shuffle" method below
//  *   - loop through each card and create its HTML
//  *   - add each card's HTML to the page
//  */
//

// /*
//  * set up the event listener for a card. If a card is clicked:
//  *  - display the card's symbol (put this functionality in another function that you call from this one)
//  *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
//  *  - if the list already has another card, check to see if the two cards match
//  *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
//  *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
//  *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
//  *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
//  */
//
//  //1- set up event listener for a card
//  //2- function that displays a card's symbol
//  //3- functions that add the card to a list of "open cards"
//  // -if the list already has another card check to see if two cards match
//  // - if they dont match remove both cards from array and hide the symbols




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
var cards=[
  {
    rank: "udacity1",
    suit: "u",
    cardImage: "img/udacity.jpeg",
    id: null
  },

  {
    rank: "udacity2",
    suit: "u2",
    cardImage: "img/udacityOr.jpeg",
    id: null
  },

  {
    rank: "dog",
    suit: "aussie",
    cardImage: "img/aussie.jpg",
    id: null
  },

  {
    rank: "ice-cream",
    suit: "sweet",
    cardImage: "img/ice-cream.png",
    id: null
  },

  {
    rank: "jquery",
    suit: "jq",
    cardImage: "img/jquery.png",
    id: null
  },

  {
    rank: "javascript",
    suit: "js",
    cardImage: "img/js.jpg",
    id: null
  },

  {
    rank: "node",
    suit: "nd",
    cardImage: "img/node.jpeg",
    id: null
  },

  {
    rank: "react",
    suit: "rc",
    cardImage: "img/react.png",
    id: null
  },
	{
		rank: "udacity1",
		suit: "u",
		cardImage: "img/udacity.jpeg",
    id: null
	},

	{
		rank: "udacity2",
		suit: "u2",
		cardImage: "img/udacityOr.jpeg",
    id: null
	},

	{
		rank: "dog",
		suit: "aussie",
		cardImage: "img/aussie.jpg",
    id: null
	},

	{
		rank: "ice-cream",
		suit: "sweet",
		cardImage: "img/ice-cream.png",
    id: null
	},

	{
		rank: "jquery",
		suit: "jq",
		cardImage: "img/jquery.png",
    id: null
	},

	{
		rank: "javascript",
		suit: "js",
		cardImage: "img/js.jpg",
    id: null
	},

	{
		rank: "node",
		suit: "nd",
		cardImage: "img/node.jpeg",
    id: null
	},

	{
		rank: "react",
		suit: "rc",
		cardImage: "img/react.png",
    id: null
	}

];


var cardsInPlay = [];
var gameScore = 0;



 var flipCard = function(){

	var cardId = this.getAttribute("data-id");
  cards[cardId].id = cardId;
  this.classList.add("cube");
  this.setAttribute("id", cardId);
	console.log("User flipped " + cards[cardId].rank );
	cardsInPlay.push(cards[cardId]);
	this.setAttribute("src", cards[cardId].cardImage);
  //
  // checkForMatch();
  // flip2back();
  console.log("cardsInPlay length: ", cardsInPlay.length);
  if(cardsInPlay.length === 2) {
    console.log("2 cards in cardsInPlay");
    checkForMatch();
  }
};




var checkForMatch = function(){

  if(cardsInPlay.length <= 2){
      	if(cardsInPlay[0].rank === cardsInPlay[1].rank){
      		alert("you found a match!");
      		gameScore ++;
      		document.getElementById("trackScore").innerHTML= gameScore;
          cardsInPlay = [];
        }else{
          setTimeout(function() {
            document.getElementById(cardsInPlay[0].id).setAttribute("src", "img/back.png");
            document.getElementById(cardsInPlay[1].id).setAttribute("src", "img/back.png");
            alert("thats not match!");
            cardsInPlay = [];
          }, 700);

        }
  }
}

function flip2back(){
  console.log("flip back");

}




 var createBoard= function(){
	 shuffle(cards);
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


	// create the new board
	createBoard();
  gameScore=0;

};