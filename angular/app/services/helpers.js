app.factory('Notifications', function() {

	var target = '#message';

	return {
		success: function(message) {
			$(target).html('<div class="accepted notification">' + message + '</div>');
			this.closeNotification();
		},
		error: function(message) {
			$(target).html('<div class="cancel notification">' + message + '</div>');
			this.closeNotification();
		},
		closeNotification: function() {

			setTimeout(function() {

				$('.notification').fadeOut(function(){
					$(this).remove();
				});
			}, 3000)
		}
	}
});