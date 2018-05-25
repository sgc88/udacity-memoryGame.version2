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









//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// we will be using .card class to dynamicly display our cards.
//SHUFFLE METHOD:
// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;
//
//     while (currentIndex !== 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }
//
//     return array;
// }
// //memory_array
// var cardsArray=["aussie.jpg", "ice-cream.png", "jquery.png", "js.jpg", "node.jpeg", "react.png", "udacityOr.jpeg", "vue.jpg"];
//
// // memory_values
// var cardsValue =[];
//
// //memory_tile_ids
// var cardsId=[];
//
// //tiles_flipped
// var flippedCards=0;
// function divElement(){
//   document.createElement("div");
// }
//
//
// function newboard(){
//   flippedCards = 0;
//   var output= 0;
//   shuffle(cardsArray);
//   for(let i= 0; i < cardsArray.lenght; i++){
//
//     //`<li class="card" data-card=${card}><i class="fa ${card}"></i></li>`
//     output += `<div id='card_ ${i}' onclick=${memoryFlipCard(this, cardsArray[i])}></div>`
//
//
//   }
//   document.getElementById("memory-board").innerHTML = output;
//   console.log(shuffle(cardsArray));
// }
// window.addEventListener('click', newboard());
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
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
    cardImage: "img/udacity.jpeg"
  },

  {
    rank: "udacity2",
    suit: "u2",
    cardImage: "img/udacityOr.jpeg"
  },

  {
    rank: "dog",
    suit: "aussie",
    cardImage: "img/aussie.jpg"
  },

  {
    rank: "ice-cream",
    suit: "sweet",
    cardImage: "img/ice-cream.png"
  },

  {
    rank: "jquery",
    suit: "jq",
    cardImage: "img/jquery.png"
  },

  {
    rank: "javascript",
    suit: "js",
    cardImage: "img/js.jpg"
  },

  {
    rank: "node",
    suit: "nd",
    cardImage: "img/node.jpeg"
  },

  {
    rank: "react",
    suit: "rc",
    cardImage: "img/react.png"
  },
	{
		rank: "udacity1",
		suit: "u",
		cardImage: "img/udacity.jpeg"
	},

	{
		rank: "udacity2",
		suit: "u2",
		cardImage: "img/udacityOr.jpeg"
	},

	{
		rank: "dog",
		suit: "aussie",
		cardImage: "img/aussie.jpg"
	},

	{
		rank: "ice-cream",
		suit: "sweet",
		cardImage: "img/ice-cream.png"
	},

	{
		rank: "jquery",
		suit: "jq",
		cardImage: "img/jquery.png"
	},

	{
		rank: "javascript",
		suit: "js",
		cardImage: "img/js.jpg"
	},

	{
		rank: "node",
		suit: "nd",
		cardImage: "img/node.jpeg"
	},

	{
		rank: "react",
		suit: "rc",
		cardImage: "img/react.png"
	}

];


var cardsInPlay = [];
var gameScore = 0;

var checkForMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("you found a match!");
		gameScore ++;
		document.getElementById("trackScore").innerHTML= gameScore;
	}else{
    var cardElement= document.createElement("img");
    cardElement.setAttribute("src", "img/back.png");
    // cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);
		// resetGame();
	}

};


 var flipCard = function(){
	var cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank );
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);


	if(cardsInPlay.length >= 2){
		checkForMatch();
		console.log(cardsInPlay);
	}
};


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

}

gameScore=[];


console.log(gameScore);
