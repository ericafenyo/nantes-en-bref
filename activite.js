$(document).ready(() => {
    const titleElement = $('#activity-title')
    const addressElement = $('#activity-address')
    $('.list-item').click(() => {
        console.log(this.tagName)
    })
});