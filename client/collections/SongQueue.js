// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', () => {
      if (this.length === 1) {
        this.playFirst();
      }
    });
    this.on('ended', () => {
      this.models.shift();
      this.length--;
      if (this.length > 0) {
        this.playFirst();
      }
    });
    this.on('dequeue', (event) => {
      this.remove(event.cid);
    });
  },
  playFirst: function() {
    this.at(0).play();
  }
});