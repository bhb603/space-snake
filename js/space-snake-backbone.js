var SpaceSnake = SpaceSnake || {};
SpaceSnake.Router = Backbone.Router.extend({
  initialize: function(){
  },
  
  routes: {
    "play": "play",
    "help": "help",
    "high-scores": "highScores"
  },
  
  play: function(){
    this.toggleNavBar('play');
    var view = new SpaceSnake.PlayView();
    view.render();
    $('.game-content').html(view.$el);
    this.currentGame = SpaceSnake.newGame();
  },
  
  help: function(){
    this.toggleNavBar('help');
    this.currentGame && this.currentGame.gameOver();
    var view = new SpaceSnake.HelpView();
    view.render();
    $('.game-content').html(view.$el);
  },
  
  highScores: function(){
    this.toggleNavBar('high-scores');
    this.currentGame && this.currentGame.gameOver();
    var view = new SpaceSnake.HighScoresView();
    view.render();
    $('.game-content').html(view.$el);
  }, 
  
  toggleNavBar: function(activeView){
    $('ul.nav > li').removeClass('active');
    $("a[href='#" + activeView + "']").parent().addClass('active');
  }
  
});

SpaceSnake.PlayView = Backbone.View.extend({
  template: _.template($('#play-template').html()),
  
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

SpaceSnake.HelpView = Backbone.View.extend({
  template: _.template($('#help-template').html()),
  
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

SpaceSnake.HighScoresView = Backbone.View.extend({
  template: _.template($('#high-scores-template').html()),

  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

