let getLocation = ''

document.querySelector('#first').addEventListener('click', getCity)


function getCity(){
    const location = document.querySelector('input').value
    const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=AEmNprSXfPGf0DbDGA5YvZGiqT8WwRTa&q=${location}`

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        getLocation = data[0].Key
        getWeather()
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function getWeather(){
    const conditions = `https://dataservice.accuweather.com/currentconditions/v1/${getLocation}?apikey=AEmNprSXfPGf0DbDGA5YvZGiqT8WwRTa&q`

    fetch(conditions)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector('h3').innerText = data[0].Temperature.Imperial.Value + " " + data[0].Temperature.Imperial.Unit
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
