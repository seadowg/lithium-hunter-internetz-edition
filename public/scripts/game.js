var Game = {
	lithiums: 0,
	mine: function() {
		if (this.lithiums < 468) {
			this.lithiums += Math.floor((Math.random() * 10) * 2);
		}

		if (this.lithiums == 468) {
			return "WIN";
		}

		else if (this.lithiums > 468) {
			return "LOSE";
		}

		else {
			return "STILL_GOING";
		}
	},
	reset: function() {
		this.lithiums = 0;
	}	 
};