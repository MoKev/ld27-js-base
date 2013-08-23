define(["Class"], function( Class ) {
  "use strict";

  var GameState = function GameState( name, stateManager ) {
    this.name         = name;
    this.stateManager = stateManager;
    this.active       = false;
    this.firstEnter   = true;
  };

  GameState.prototype = Object.create( Class.prototype );
  GameState.prototype.constructor = GameState;

  GameState.prototype.extend({
    OnEnter:      function( params ) {
      this.active = true;
    },
    OnExit:       function() {
      this.active = false;
    },
    EventHandler: function( event ) {
      console.log( event.type );
    },
    Update:       function() {

    },
    Render:       function( context ) {

    },
    Pause:        function() {

    },
    Resume:       function() {

    },
    isActive:     function() {
      return this.active;
    },
    setActive:    function( state ) {
      this.active = state;
    },
    getName:      function() {
      return this.name;
    }
  });

  return GameState;

});