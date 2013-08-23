define( function( require ) {
  "use strict";

  var Class        = require("Class"),
      Stage        = require("Stage"),
      StateManager = require("StateManager"),
      GameState    = require("GameState"),
      Vector       = require("Vector"),
      RectShape    = require("Graphics/RectShape"),
      Animation    = require("Animation"),
      Sprite       = require("Graphics/Sprite"),
      Rect         = require("Rect");

  var Game = function( canvasID, size ) {
    this.stage = new Stage( canvasID, size );
    this.stateManager = new StateManager();
  };

  Game.prototype = Object.create( Class.prototype );
  Game.prototype.constructor = Game;

  Game.prototype.extend({
    init: function() {
      this.stateManager.Add( new GameState( "mainmenu", this.stateManager ) );
      this.stateManager.Add( new GameState( "combat", this.stateManager ) );
      this.stateManager.Change( "mainmenu" );

      this.stage.canvas.addEventListener( "click", this.stateManager.EventHandler );

      this.animation = new Animation( "test", 0.4, 6, new Vector(50, 70), "assets/images/anim_test.png" );

      var rect = new Rect(0, 0, 100, 70);

      this.player = new Sprite( new Vector(), rect, this.animation.spriteStr );

      this.run();
    },
    run: function() {
      requestAnimationFrame( this.run.bind( this ) );
      this.stage.Clear();
      this.animation.Render( this.stage.context, new Vector(50, 50) );
      this.stage.Draw( this.player );
      //console.log("Game running!");
    }
  });

  return Game;

});