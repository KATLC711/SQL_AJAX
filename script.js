var apiKey = '33ba6fb46a5bc81851fd436e4312b850';

document.getElementById('citysubmit').addEventListener('click', function (event) {
    var req = new XMLHttpRequest();
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;
    console.log('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=' + apiKey)
    req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=' + apiKey, true);
    req.addEventListener('load', function () {
        if (req.status >= 200 && req.status < 400) {
            var response = JSON.parse(req.responseText);
            //console.log(response.main.feels_like)
            document.getElementById('status').textContent = "Success!";
            document.getElementById('weatherdescription').textContent = response.weather[0].description;
            document.getElementById('tempature').textContent = response.main.temp * 9 / 5 - 459.67 + "  °F";
            document.getElementById('feellike').textContent = response.main.feels_like * 9 / 5 - 459.67 + "  °F";
        } else {
            document.getElementById('status').textContent = "Error in network request: " + req.statusText;
            document.getElementById('weatherdescription').textContent = "";
            document.getElementById('tempature').textContent = "";
            document.getElementById('feellike').textContent = "";
            console.log("Error in network request: " + req.statusText);
        }
    });
    req.send(null);
    event.preventDefault();
});


document.getElementById('zipsubmit').addEventListener('click', function (event) {
    var req = new XMLHttpRequest();
    var zip = document.getElementById('zip').value;
    var country = document.getElementById('country2').value;
    console.log('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',' + country + '&appid=' + apiKey)
    req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',' + country + '&appid=' + apiKey, true);
    req.addEventListener('load', function () {
        if (req.status >= 200 && req.status < 400) {
            var response = JSON.parse(req.responseText);
            console.log(response.main)
            document.getElementById('status').textContent = "Success!";
            document.getElementById('weatherdescription').textContent = response.weather[0].description;
            document.getElementById('tempature').textContent = response.main.temp * 9 / 5 - 459.67 + "  °F";
            document.getElementById('feellike').textContent = response.main.feels_like * 9 / 5 - 459.67 + "  °F";
        } else {
            document.getElementById('status').textContent = "Error in network request: " + req.statusText;
            document.getElementById('weatherdescription').textContent = "";
            document.getElementById('tempature').textContent = "";
            document.getElementById('feellike').textContent = "";
            console.log("Error in network request: " + req.statusText);
        }
    });
    req.send(null);
    event.preventDefault();
});



document.getElementById('datasubmit').addEventListener('click', function (event) {
    var req = new XMLHttpRequest();
    var input_data = { raw_data: null };
    input_data.raw_data = document.getElementById('data').value;
    req.open('POST', 'http://httpbin.org/post', true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load', function () {
        if (req.status >= 200 && req.status < 400) {
            var response = JSON.parse(req.responseText);
            //console.log(JSON.parse(response.data).raw_data)
            document.getElementById('received_data').textContent = JSON.parse(response.data).raw_data;
        } else {
            console.log("Error in network request: " + req.statusText);
        }
    });
    req.send(JSON.stringify(input_data));

    event.preventDefault();
});