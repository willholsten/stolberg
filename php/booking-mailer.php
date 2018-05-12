<?php
    // My modifications to mailer script from:
    // http://blog.teamtreehouse.com/create-ajax-contact-form
    // Added input sanitizing to prevent injection

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $phone = trim($_POST["phone"]);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $time = trim($_POST["time"]);
        $date = trim($_POST["date"]);
        $guests = trim($_POST["guests"]);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "mail@willholsten.com, info@stolberg.com.au";

        // Set the email subject.
        $subject = "Reservation: $date";

        // Build the email content.

        $message = "
        <html>
        <head>
        <title>HTML email</title>
        </head>
        <body>
        <table>
        <tr>
        <td style='font-size:20px; width: 400px;padding-bottom: 10px;'><strong>Reservation</strong></td>
        </tr>
        <tr>
        <td style='font-size:12px; width: 400px;'><strong>Name: </strong>{$name}</td>
        </tr>

        <tr>
        <td style='font-size:12px; width: 400px;'><strong>Email: </strong>{$email}</td>
        </tr>

        <tr>
        <td style='font-size:12px; width: 400px;'><strong>Contact Number: </strong>{$phone}</td>
        </tr>

        <tr>
        <td style='font-size:12px; width: 400px;'><strong>Date: </strong>{$date}</td>
        </tr>

        <tr>
        <td style='font-size:12px; width: 400px;'><strong>Time: </strong>{$time}</td>
        </tr>

        <tr>
        <td style='font-size:12px; width: 400px;'><strong>Number of Guests: </strong>{$guests}</td>
        </tr>

        <tr>
        <td style='font-size:12px; width: 400px;'><strong>Special Requests:</strong></td>
        </tr>
        <tr>
        <td style='font-size:12px; width: 400px;'>{$message}</td>
        </tr>

        </table>
        </body>
        </html>
        ";

        // Always set content-type when sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        // More headers
        $headers .= "From: <{$email}>" . "\r\n";

        // Send the email.
        if (mail($recipient, $subject, $message, $headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Our team will get back to you shortly.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>
