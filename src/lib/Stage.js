define(["Class", "Graphics/Sprite"], function( Class, Sprite ) {
  "use strict";

  var Stage = function Stage ( canvasID, size ) {
    this.canvas   = document.getElementById( canvasID );
    this.context  = this.canvas.getContext("2d");
    this.width    = this.canvas.width  = size.width;
    this.height   = this.canvas.height = size.height;
  };

  Stage.prototype = Object.create( Class.prototype );
  Stage.prototype.constructor = Stage;

  Stage.prototype.extend({
    Draw: function( sprite ) {
      if ( sprite instanceof Sprite ) {
        this.context.drawImage( sprite.spriteSheet, sprite.rect.x, sprite.rect.y, sprite.rect.width, sprite.rect.height, sprite.pos.x, sprite.pos.y, sprite.rect.width, sprite.rect.height );
      }
    },
    Clear: function() {
      this.context.clearRect( 0, 0, this.width, this.height );
    }
  });

  return Stage;

});