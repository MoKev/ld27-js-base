define(["Class"], function( Class ) {
  "use strict";

  var Sprite = function Sprite ( pos, rect, spriteSheet ) {
    this.pos = pos;
    this.rect = rect;
    this.spriteSheet = spriteSheet;
  };

  Sprite.prototype = Object.create( Class.prototype );
  Sprite.prototype.constructor = Sprite;

  Sprite.prototype.extend({/*
    Draw: function( stage ) {
      stage.draw( this );
    }*/
  });

  return Sprite;

});

/*
var platform = new Sprite( assets["level1"] );

assets["level1"].spriteSheet
assets["level1"].sprites["platform"]

assets = {
  level1: {
    spriteSheet: "level1_norm.png",
    sprites: {
      platform: [0, 32, 128, 64],
      player: [192, 32, 32, 64]
    }
  }
};
*/