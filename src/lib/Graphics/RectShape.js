define(["Class"], function( Class ) {
  "use strict";

  var RectShape = function RectShape ( size ) {
    this.size = size;
  };

  RectShape.prototype = Object.create( Class.prototype );
  RectShape.prototype.constructor = RectShape;

  RectShape.prototype.extend({
    Draw: function( ctx ) {
      ctx.fillRectShape( 0, 0, this.size.x, this.size.y );
    }
  });

  return RectShape;

});