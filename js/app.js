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
// // Shuffle function from http://stackoverflow.com/a/2450976
// // function shuffle(array) {
// //     var currentIndex = array.length, temporaryValue, randomIndex;
// //
// //     while (currentIndex !== 0) {
// //         randomIndex = Math.floor(Math.random() * currentIndex);
// //         currentIndex -= 1;
// //         temporaryValue = array[currentIndex];
// //         array[currentIndex] = array[randomIndex];
// //         array[randomIndex] = temporaryValue;
// //     }
// //
// //     return array;
// // }
// $(document).ready(function(){
//   var app = {
//     cards:["aussie.jpg", "ice-cream.png", "jquery.png", "js.jpg", "node.jpeg", "react.png", "udacityOr.jpeg", "vue.jpg"],
//     init : function(){
//       app.shuffle();
//     },
//     shuffle:function(array) {
//         var currentIndex = array.length, temporaryValue, randomIndex;
//
//         while (currentIndex !== 0) {
//             randomIndex = Math.floor(Math.random() * currentIndex);
//             currentIndex -= 1;
//             temporaryValue = array[currentIndex];
//             array[currentIndex] = array[randomIndex];
//             array[randomIndex] = temporaryValue;
//         }
//
//         return array;
//         console.log(app.cards);
//
//     },
//
//   }
//
//
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
// var cards=[
//   {
//     rank: "udacity1",
//     suit: "u",
//     cardImage: "img/udacity.jpeg"
//   },
//
//   {
//     rank: "udacity2",
//     suit: "u2",
//     cardImage: "img/udacityOr.jpeg"
//   },
//
//   {
//     rank: "dog",
//     suit: "aussie",
//     cardImage: "img/aussie.jpg"
//   },
//
//   {
//     rank: "ice-cream",
//     suit: "sweet",
//     cardImage: "img/ice-cream.png"
//   },
//
//   {
//     rank: "jquery",
//     suit: "jq",
//     cardImage: "img/jquery.png"
//   },
//
//   {
//     rank: "javascript",
//     suit: "js",
//     cardImage: "img/js.jpg"
//   },
//
//   {
//     rank: "node",
//     suit: "nd",
//     cardImage: "img/node.jpeg"
//   },
//
//   {
//     rank: "react",
//     suit: "rc",
//     cardImage: "img/react.png"
//   }
// ];
//
// var cardsInPlay = [];
// var gameScore = 0;
// var checkForMatch= function(){
//   if(cardsInPlay[0] === cardsInPlay[1]){
//     alert("Match!");
//     gameScore++;
//     document.getElementById("trackScore").innerHTML = gameScore;
//   }else{
//     alert("Try again!");
//     //
//   }
// }
//
//  var resetGame= document.getElementById("repeat");
//  resetGame.addEventListener("click", restart);
//
//  function restart() {
//      console.log("you clicked me");
//  }
// var playGame = function(){
//
// }
// });




////////////////JQUERY TUTORIALS CODE FROM Challenge: Make a Game in jQuery, HTML, and CSS -full stack
// $(document).ready(function() {
//   var app = {
//     cards: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
//     init: function() {
//       app.shuffle();
//     },
//     shuffle: function() {
//       var random = 0;
//       var temp = 0;
//       for (i = 1; i < app.cards.length; i++) {
//         random = Math.round(Math.random() * i);
//         temp = app.cards[i];
//         app.cards[i] = app.cards[random];
//         app.cards[random] = temp;
//       }
//       app.assignCards();
//       console.log('Shuffled Card Array: ' + app.cards);
//     },
//     assignCards: function() {
//       $('.card').each(function(index) {
//         $(this).attr('data-card-value', app.cards[index]);
//       });
//       app.clickHandlers();
//     },
//     clickHandlers: function() {
//       $('.card').on('click', function() {
//         $(this).html('<p>' + $(this).data('cardValue') + '</p>').addClass('selected');
//         app.checkMatch();
//       });
//     },
//     checkMatch: function() {
//       if ($('.selected').length === 2) {
//         if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')) {
//           $('.selected').each(function() {
//             $(this).animate({
//               opacity: 0
//             }).removeClass('unmatched');
//           });
//           $('.selected').each(function() {
//             $(this).removeClass('selected');
//           });
//           app.checkWin();
//         } else {
//           setTimeout(function() {
//             $('.selected').each(function() {
//               $(this).html('').removeClass('selected');
//             });
//           }, 1000);
//         }
//       }
//     },
//     checkWin: function() {
//       if ($('.unmatched').length === 0) {
//         $('.container').html('<h1>You Won!</h1>');
//       }
//     }
//   };
//   app.init();
// });

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
var cardsArray=["aussie.jpg", "ice-cream.png", "jquery.png", "js.jpg", "node.jpeg", "react.png", "udacityOr.jpeg", "vue.jpg"];
var cardsValue =[];
var cardsId=[];
var flippedCards=0;


function newboard(){
  flippedCards = 0;
  var output= 0;
  cardsArray.memory_cards_shuffle();
  for(let i= 0; i < cardsArray.lenght; i++){
    var cards = document.querySelectorAll("fa");
    cards.setAttribute("type", "button");
    cards.setAttribute("id", i);
    cards.setAttribute("value", "Execute");
    cards.setAttribute("onclick", "memoryFlipTile();")

  }
  document.getElementById("memory-board").innerHTML = output;
  console.log(cardsArray.memory_cards_shuffle());
}
