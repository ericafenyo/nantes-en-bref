
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


    /* If all values are truthy, proceed to print them, else display an error messsage.*/
    if (fullName && emialAddress && message) {
        const info = {
            name: fullName,
            emial: emialAddress,
            message: message
        }

        alert(`FullName: ${info.name} Email: ${info.emial} Message: ${info.message}`)
        // return info
    } else {
        alert("Please fill all the fields")
    }
}
