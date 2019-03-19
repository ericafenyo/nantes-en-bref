const listItem = document.querySelectorAll('.list-item');
const titleElement = document.getElementById('activity-title');
const addressElement = document.getElementById('activity-address');
const imageElement = document.getElementById('activity-image');
const eventUrls = ["http://www.nantesdigitalweek.com/","http://www.nantesdigitalweek.com/evenement-2018/realite-virtuelle-coeur-tests-sensoriels/"]

//Event week
const incomingEventsElements = document.querySelectorAll('.event')

incomingEventsElements.forEach((element, index )=>{
    element.addEventListener('click', event => {
        console.log(index)
        window.open(eventUrls[index])
    })
})



listItem.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.childNodes[3].childNodes[1].innerHTML;
        const address = item.childNodes[3].childNodes[3].innerHTML;
        const imageUrl = item.childNodes[1].getAttribute('src');

        titleElement.innerHTML = title;
        addressElement.innerHTML = address;
        imageElement.setAttribute('src', imageUrl)
    })
})


