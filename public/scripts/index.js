var TwoFace = {
  currentFace: null,
  faces: {},
  show: function(faceName) {
    if (this.currentFace != null) {
      $('.face.face-' + this.currentFace.name).hide();
    }
    
    this.currentFace = this.faces[faceName];
    $('.face.face-' + this.currentFace.name).show();
    this.currentFace.onShow();
  },
  define: function(name, object) {
    object.name = name;
    
    this.faces[object.name] = object;
    $(document).ready(function() {
      $('.face.face-' + object.name).hide();
      object.setup(); 
    });
  }
};

TwoFace.define('tutorial', {
  setup: function() {
    $('#play_button').click(function() {
      TwoFace.show('play');
    });
  },
  onShow: function() {
    
  }
});

TwoFace.define('play', {
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
    $('#lithium_field').html(Game.lithiums);
  }
});

TwoFace.define('win', {
  setup: function() {
    $('#win_play_button').click(function() {
      TwoFace.show('play');
    });
  },
  onShow: function() {
    
  }
});

TwoFace.define('lose', {
  setup: function() {
    $('#lose_play_button').click(function() {
      TwoFace.show('play');
    });
  },
  onShow: function() {
    
  }
});

$(document).ready(function() {
  TwoFace.show('tutorial');
});