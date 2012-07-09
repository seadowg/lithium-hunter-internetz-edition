var TwoFace = {
  currentFaceElement: null,
  currentFaceObject: null,
  faceObjects: {},
  show: function(faceName) {
    if (this.currentFaceElement != null) {
      this.currentFaceElement.hide();
    }
    
    this.currentFaceElement = $('.face.face-' + faceName);
    this.currentFaceObject = this.faceObjects[faceName];
    
    this.currentFaceElement.show();
    this.currentFaceObject.onShow();
  },
  add: function(name, object) {
    $('.face').hide();
    
    this.faceObjects[name] = object;
    $(document).ready(object.setup);
  }
};

var TutorialView = {
  setup: function() {
    $('#play_button').click(function() {
      TwoFace.show('play');
    });
  },
  onShow: function() {
    
  }
};

var PlayView = {
  setup: function() {
  	$('#mine_button').click(function() {
  		var result = Game.mine();
  		$('#lithium_field').html(Game.lithiums);

  		if (result == "WIN") {
  			TwoFace.show('win');
  		}

  		else if (result == "LOSE") {
  			TwoFace.show('lose');
  		}
  	});
  },
  onShow: function() {
    Game.reset();
  }
};

var WinView = {
  setup: function() {
    $('#win_play_button').click(function() {
      TwoFace.show('play');
    });
  },
  onShow: function() {
    
  }
};

var LoseView = {
  setup: function() {
    $('#lose_play_button').click(function() {
      TwoFace.show('play');
    });
  },
  onShow: function() {
    
  }
};

$(document).ready(function() {
  TwoFace.add('play', PlayView);
  TwoFace.add('tutorial', TutorialView);
  TwoFace.add('win', WinView);
  TwoFace.add('lose', LoseView);
  TwoFace.show('tutorial');
});