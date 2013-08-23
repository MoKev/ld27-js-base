define(["Class"], function( Class ) {
  "use strict";

  var StateManager = function StateManager() {
    this.states = {};
    this.currentState = undefined;
  };

  StateManager.prototype = Object.create( Class.prototype );
  StateManager.prototype.constructor = StateManager;

  StateManager.prototype.extend({
    Update: function() {
      if ( this.currentState ) {
        this.currentState.Update();
      }
    },
    Render: function() {
      if ( this.currentState ) {
        this.currentState.Render();
      }
    },
    EventHandler: function( event ) {
      if ( this.currentState ) {
        this.currentState.EventHandler( event );
      }
    },
    Add: function( gameState ) {
      this.states[ gameState.getName() ] = gameState;
    },
    Change: function( name, params ) {
      if ( this.currentState ) {
        this.currentState.OnExit();
      }
      this.currentState = this.states[ name ];
      this.currentState.OnEnter( params );
    }
  });

  return StateManager;

});