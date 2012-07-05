$(document).ready(function() {
	$('#mine_button').click(function() {
		var result = Game.mine();
		$('#lithium_field').html(value)

		if (result == "WIN") {
			// Pop up Win modal
		}

		else if (result == "LOSE") {
			// Pop up lose modal
		}
	});
});