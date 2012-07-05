var ViewManager = {
  currentViewElement: null,
  currentViewObject: null,
  viewObjects: {},
  showView: function(viewName) {
    if (this.currentViewElement != null) {
      this.currentViewElement.hide();
    }
    
    this.currentViewElement = $('.view.view-' + viewName);
    this.currentViewObject = this.viewObjects[viewName];
    
    this.currentViewElement.show();
    this.currentViewObject.onShow();
  },
  addView: function(viewName, viewObject) {
    this.viewObjects[viewName] = viewObject;
    $(document).ready(viewObject.setup);
  }
}

var PlayView = {
  setup: function() {
  	$('#mine_button').click(function() {
  		var result = Game.mine();
  		$('#lithium_field').html(Game.lithiums);

  		if (result == "WIN") {
  			ViewManager.showView('win');
  		}

  		else if (result == "LOSE") {
  			ViewManager.showView('lose');
  		}
  	});
  },
  onShow: function() {
    Game.reset();
  }
}

$(document).ready(function() {
  ViewManager.addView('play', PlayView);
  ViewManager.showView('play');
});