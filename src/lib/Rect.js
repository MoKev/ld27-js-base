define(function() {
  "use strict";

  /**
   * Rect class
   *
   * does not use base class because of get/set
   *
   * @param {int} x
   * @param {int} y
   * @param {int} width
   * @param {int} height
   */
  var Rect = function Rect ( x, y, width, height ) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
  };

  Rect.prototype = {
    get left() { return this.x; },
    set left(x) { this.x = x; },

    get top() { return this.y; },
    set top(x) { this.y = x; },

    get bottom() { return this.y + this.height; },
    set bottom(x) { this.y = x - this.height; },

    get right() { return this.x + this.width; },
    set right(x) { this.x = x - this.width; },

    get topleft() { return [ this.top, this.left ]; },
    set topleft(x) { this.top = x[0]; this.left = x[1]; },

    get bottomleft() { return [ this.bottom, this.left ]; },
    set bottomleft(x) { this.bottom = x[0]; this.left = x[1]; },

    get topright() { return [ this.top, this.right ]; },
    set topright(x) { this.top = x[0]; this.right = x[1]; },

    get bottomright() { return [ this.bottom, this.right ]; },
    set bottomright(x) { this.bottom = x[0]; this.right = x[1]; },

    get midtop() { return [ this.centerx, this.top ]; },
    set midtop(x) { this.centerx = x[0]; this.top = x[1]; },

    get midleft() { return [ this.centery, this.left ]; },
    set midleft(x) { this.centery = x[0]; this.left = x[1]; },

    get midbottom() { return [ this.centerx, this.bottom ]; },
    set midbottom(x) { this.centerx = x[0]; this.bottom = x[1]; },

    get midright() { return [ this.centery, this.right ]; },
    set midright(x) { this.centery = x[0]; this.right = x[1]; },

    get centerx() { return this.x + this.width / 2; },
    set centerx(x) { this.x = x - this.width / 2; },

    get centery() { return this.y + this.height / 2; },
    set centery(x) { this.y = x - this.height / 2; },

    get center() { return [ this.centerx, this.centery ]; },
    set center(x) { this.centerx = x[0]; this.centery = x[1]; },

    get w() { return this.width; },
    set w(x) { this.width = x; },

    get h() { return this.height; },
    set h(x) { this.height = x; },

    toString: function() {
      return "[Rect x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + this.height + "]";
    }
  };

  return Rect;

});