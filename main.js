require.config({
  baseUrl: "src/lib",
  paths: {
    "game": "../game"
  },
  urlArgs: "bust=" + (new Date()).getTime()
});

require(["game/Game"], function( Game ) {
  "use strict";

  var game = new Game( "gameCanvas", {width: 640, height: 480} );

  game.init();

});