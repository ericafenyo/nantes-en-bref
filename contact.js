
$(document).ready(() => {
    $('#submit-button').click((event) => {
        //Prevent default onClick event behaviour.
        event.preventDefault()
        readInputs()
    })
});

/**
 * Read `form` inputs
 */
const readInputs = () => {
    const fullName = $('#input-name').val()
    const emialAddress = $('#input-email').val()
    const message = $('#input-message').val()
    const alertCarrier = $('#alert')

    /* If all values are truthy, proceed to print them, else display an error messsage.*/
    if (fullName && emialAddress && message) {
        const info = {
            name: fullName,
            emial: emialAddress,
            message: message
        }
        const message = `FullName: ${info.name} Email: ${info.emial} Message: ${info.message}`
        alertCarrier.text(message)
        setTimeout(() => {
            alertCarrier.addClass('d-none')
        }, 5000)
        // return info
    } else {
        alertCarrier.removeClass('d-none')
        alertCarrier.removeClass('alert-success')
        alertCarrier.addClass('alert-danger')
        alertCarrier.text("Please fill all the fields")
        setTimeout(() => {
            alertCarrier.addClass('d-none')
        }, 5000)
    }
}