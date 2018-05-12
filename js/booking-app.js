
$(function() {

	// Get the form.
	var form = $('#ajax-booking');

	// Get the messages div.
	var formMessages = $('#booking');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('booking-error');
			$(formMessages).addClass('booking-success');

			setTimeout(RemoveClass, 3000);
		
		function RemoveClass() {

			$(formMessages).hide();
		}

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name, #phone, #email, #date, #time, #guests, #message').val('');
		})

		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('booking-success');
			$(formMessages).addClass('booking-error');

			setTimeout(RemoveClass, 3000);
		
		function RemoveClass() {

			$(formMessages).hide();
		}
	

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});