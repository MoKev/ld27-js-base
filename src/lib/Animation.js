define(["Class"], function( Class ) {
  "use strict";

  var Animation = function Animation ( name, dur, frameCount, size, spriteStr ) {
    this.name       = name;
    this.dur        = dur;
    this.frameCount = frameCount;
    this.size       = size;
    this.spriteStr  = new Image();
    this.spriteStr.src = spriteStr;

    this.curFrame = 0;
    this.running    = true;

    this.now = new Date();
    this.last = new Date();
  };

  Animation.prototype = Object.create( Class.prototype );
  Animation.prototype.constructor = Animation;

  Animation.prototype.extend({
    Render: function( ctx, pos ) {
      if ( this.running ) {
        this.now = new Date();

        //console.log( (this.now - this.last) / 1000, this.curFrame );
        if ( (this.now - this.last)/1000 > this.dur / this.frameCount ) {
          this.curFrame++;
          if ( this.curFrame > this.frameCount-1 ) {
            this.curFrame = 0;
          }
          this.last = this.now;
        }

        ctx.drawImage( this.spriteStr, this.curFrame * this.size.x, 0, this.size.x, this.size.y, pos.x, pos.y, this.size.x, this.size.y );

      }
    }
  });

  return Animation;

});