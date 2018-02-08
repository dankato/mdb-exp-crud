
const update = document.getElementById('update-button');
const del = document.getElementById('delete-button');

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

del.addEventListener('click', function() {
    console.log('i clicked delete from main.');
    fetch('quotes', {
        method: 'delete',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            'name': 'jan'
        })
    })
    .then(res => {
        if(res.ok) return res.json()
    })
    .then(data => {
        console.log(data)
        window.location.reload()
    })
})