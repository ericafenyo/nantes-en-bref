
$(document).ready(() => {
    $('#submit-button').click((event) => {
        //Prevent default onClick event behaviour.
        alert("Hello")
        // event.preventDefault()
        // const inputs = readInputs()
        // alert(inputs)
    })
});

/**
 * Read `form` inputs
 */
const readInputs = () => {
    const fullName = $('#input-name').val()
    const emialAddress = $('#input-email').val()
    const message = $('#input-message').val()

    if (fullName && emialAddress && message) {
        const info = {
            name: fullName,
            emial: emialAddress,
            message: message
        }

        return info
    } else {
        notifyError("Please fill all the fields")
    }
}

//displays a dialog box with `message` as text.
const notifyError = (message) => {
    alert(message)
}