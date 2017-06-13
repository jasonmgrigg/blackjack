/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
// var cardsArray = ["king", "king", "king", "king", "queen", "queen", "queen", "queen", "jack", "jack", "jack", "jack", "ace", "ace", "ace", "ace", "two", "two", "two", "two", "three", "three", "three", "three", "four", "four", "four", "four", "five", "five", "five", "five", "six", "six", "six", "six", "seven", "seven", "seven", "seven", "eight", "eight", "eight", "eight", "nine", "nine", "nine", "nine", "ten", "ten", "ten", "ten"]


// cards = {
//   "K": 10,
//   "Q": 10,
//   "J": 10,
//   "A": 11,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
//   ten: 10
// }
//



var hand = [];

// var cards = ["K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2", "A"]


function handValue (hand) {
var hasAce = false;
for(var i = 0; i < hand.length; i++){
  if(hand[i] === 'K' || hand[i] === 'Q' || hand[i] === 'J') {
    hand[i] = 10;
  } else if (hand === ['A']){
    hasAce = true;
    hand[i] = 0;
  } else {
    hand[i] = parseInt(hand[i]);
  }
  }

while(hasAce => 1) {}
if (hasAce === true) {
  if (hand <= 10) {
    hand = hand + 11;
  } else {
    hand = hand + 1;
    hasAce--;
  }
}
return hand;
}

handValue(myhand)


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
