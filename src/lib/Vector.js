define(["Class"], function( Class ) {
  "use strict";

  var Vector = function Vector( x1, x2 ) {
    this.x = x1 || 0;
    this.y = x2 || 0;
  };

  Vector.prototype = Object.create(  Class.prototype );
  Vector.prototype.constructor = Vector;

  Vector.prototype.extend({
    add: function( vec ) {
      this.x = this.x + vec.x;
      this.y = this.y + vec.y;
    },
    len:    function() {
      return ( Math.sqrt( this.x * this.x + this.y * this.y ) );
    },
    sqrlen: function() {
      return ( this.x * this.x + this.y * this.y );
    },
    norm:   function() {
      return new Vector( this.x / this.len(), this.y / this.len() );
    },
    dot:    function( vec ) {
      return ( this.x * vec.x + this.y * vec.y );
    },
    cross1: function( vec ) {
      return ( this.x * vec.y ) - ( this.y * vec.x );
    },
    cross2: function( vec ) {
      return new Vector( this.y, -this.x );
    },
    angle: function() {
      return Math.asin( this.y / this.len() );
    },
    fromAngle: function( angle, len ) {
      return new Vector( len * Math.sin( angle ), len * Math.cos( angle ) );
    }
  });

  return Vector;

});