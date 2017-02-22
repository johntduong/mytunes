// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    $.ajax({
      url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      success: function(data) {
        console.log(data);
        songData = data.results;
        console.log(songData);
      }
    });
  }
});