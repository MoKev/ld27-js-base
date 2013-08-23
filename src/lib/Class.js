define(function() {
  "use strict";

  /**
   * @class Class
   *
   * @description simple base class
   *
   * @method extend
   * @method toString
   */
  var Class = function Class() {};

  Class.prototype.extend = function( source ) {
    var property;
    for ( property in source ) {
      this[ property ] = source[ property ];
    }
  };

  Class.prototype.toString = function() {
    return "[class " + this.constructor.name + "]";
  };

  return Class;

});