
$(function() {

	// Get the form.
	var form = $('#ajax-function');

	// Get the messages div.
	var formMessages = $('#function-form-message');

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
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			setTimeout(RemoveClass, 3000);
		function RemoveClass() {
			$(formMessages).hide();
		}

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name, #phone, #email, #occasion, #date, #time, #guests, #roomOption, #message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

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
