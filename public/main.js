
const update = document.getElementById('update-button');

update.addEventListener('click', function () {
    console.log('clicked')
    // PUT request, path req is sent to and optional setting params
    fetch('quotes', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'name': 'Jane',
            'quote': 'Jane has updated this quote.'
        })
    })
    .then(response => {
        if(response.ok) return response.json()
    })
    .then(data => {
        console.log(data)
    })
})