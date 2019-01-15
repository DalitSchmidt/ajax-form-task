$('button').on('click', function () {
    /*
     * First - let's take all the values from the inputs right?
     * We have to create literal object
     */
    var details = {
        firstname: $('input[name=firstname]').val(),
        lastname: $('input[name=lastname]').val(),
        phone: $('input[name=phone]').val(),
        message: $('input[name=message]').val()
    };

    // Now we are making string out of the literal object
    var newDetails = JSON.stringify( details )

    // Save the string in the storage liek we should - give it a name - 'form_details', and a value (the json we've just created)
    localStorage.setItem( 'form_details', newDetails )

    // Set new text inside the button
    $('button').text('Submiting form, please wait..')

    // Disable the button from clicking on it again
    $('button').attr('disabled', 'disabled')

    $.ajax({
        url: 'http://localhost:8080/check-form',
        method: 'POST',
        data: newDetails,
        success: function( response ) {
            $('#contact-form').fadeOut()
            alert( response )
        }
    })
});