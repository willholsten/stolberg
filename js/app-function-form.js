
$(function() {

	// Get the form.
	var functionForm = $('#ajax-function-form');

	// Get the messages div.
	var functionFormMessages = $('#function-form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(functionForm).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(functionForm).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the functionFormMessages div has the 'success' class.
			$(functionFormMessages).removeClass('error');
			$(functionFormMessages).addClass('success');

			// Set the message text.
			$(functionFormMessages).text(response);

			// Clear the form.
			$('#name, #email, #date, #guests, #phone, #occassion, #time, #room, #message').val('');
		})
		.fail(function(data) {
			// Make sure that the functionFormMessages div has the 'error' class.
			$(functionFormMessages).removeClass('success');
			$(functionFormMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(functionFormMessages).text(data.responseText);
			} else {
				$(functionFormMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});
