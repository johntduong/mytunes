// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    console.log('initialize SongQueueView');
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.get('songQueue').map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
