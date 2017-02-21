// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', () => {
      if (this.length === 1) {
        this.playFirst();
      }
    });
  },
  playFirst: function() {
    console.log(this['model']);
    this['models']['0'].__proto__.play();
  }

});