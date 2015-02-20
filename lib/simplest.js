/* Simplest game */

function shuffle( deck ) {
    var length = deck.length;
    for( var i in deck ){
        var new_i = Math.floor((Math.random() * length) + 0);
        var old_card = deck[i];
        var new_card = deck[new_i];
        deck[i] = new_card;
        deck[new_i] = old_card;
    }
    return deck;
}

var fs = require('fs');
var file = __dirname + '/../data/solitaire_deck1.json';
var game_board;
fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }

  game_board = JSON.parse(data);
  var locations = shuffle( game_board.locations );
  var events = shuffle( game_board.events );
  console.log('starting simplest');
  console.dir(locations);
  console.dir(events[0]);

});



/* set up city */
/* get first event */
/* add player */
/* player makes moves */
/* start game loop */
/* repeat game loop until all events have been used */
