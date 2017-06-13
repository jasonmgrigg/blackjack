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

function handValue (hand) {
  var acesInWaiting = [];
  var sum;

  for (i = 0; i <= hand.length-1; i++) {
    if (hand[i] === "K" || hand[i] === "Q" || hand[i] === "J") {
      hand[i] = 10;
    }
    else if (hand[i] === "A") {
      acesInWaiting.push(hand[i]);
      hand[i] = 1;
    }
  }
  sum = (hand.reduce((a,b) => a + +b, 0));
  if (sum <= 10){
    if (acesInWaiting.length = 1){
      acesInWaiting[i] = 11;
    }
    else if(acesInWaiting.length > 1){
      acesInWaiting[i] = 1;
    }
    acesInWaiting.reduce((a,b) => a + b, 0);
    sum += acesInWaiting;

  }
  return sum;

}






// var cards = ["K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2", "A"]




/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
