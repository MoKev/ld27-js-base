define(["Class"], function( Class ) {
  "use strict";

  var GameObject = function GameObject ( name, pos, size, sprite ) {
    this.name   = name;
    this.pos    = pos;
    this.size   = size;
    this.sprite = sprite;
  };

  GameObject.prototype = Object.create( Class.prototype );
  GameObject.prototype.constructor = GameObject;

  GameObject.prototype.extend({
    Render: function( ctx ) {
      this.sprite.draw( ctx );
    }
  });

  return GameObject;

});