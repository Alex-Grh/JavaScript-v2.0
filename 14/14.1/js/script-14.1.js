/*
fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=70e1ed322b02acbc57d443dd91065f3e')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });
*/
/*
{
        "id": 3245,
        "name": "Taglag",
        "state": "",
        "country": "IR",
        "coord": {
            "lon": 44.98333,
            "lat": 38.450001
        }
    },
*/


fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=79f2180f696f74f48844082da9bb130b')
   .then(function (resp) { return resp.json() }) // Convert data to json
   .then(function (data) {
      console.log(data);
      document.querySelector('.package-name').textContent = data.name;
      document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;' + 'C';
      document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
      document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
   .catch(function () {
      // catch any errors
   });