
// Copenhagen
var AriRequest = new XMLHttpRequest();
AriRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Arizona&units=imperial&appid=8ce342ec0bef6453a2de8960f69f0afa');
AriRequest.onload = function () {

    var data = JSON.parse(AriRequest.responseText);


        var temp = data.main.temp;
        var humid = data.main.humidity;
        function rain(precip){
            if (precip == undefined) {
                precip = 0;
            } else {
                precip = data.rain['3h'];
            }
            return precip;
        }
        var precip = rain();
        var wind = data.wind.speed;
        document.getElementById('curTempAri').innerHTML = temp + "&deg;F";
        document.getElementById('humidityAri').innerHTML = humid + "&#37;";
        document.getElementById('precipitationAri').innerHTML = precip + " inches";
        document.getElementById('windAri').innerHTML = wind + " mph";


        var f = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        var chill = parseFloat(f).toFixed(2);
        document.getElementById('windChillAri').innerHTML = chill;

        var wImg = document.getElementById('wImageAri');

        var myImage = document.createElement('img');


        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        
        document.getElementById('imgDescriptionAri').innerHTML = "<p>" + data.weather[0].description + "</p>";

        document.getElementById('curDescAri').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

AriRequest.send();


// Johannesburg
var AustRequest = new XMLHttpRequest();
AustRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Australia&units=imperial&appid=8ce342ec0bef6453a2de8960f69f0afa');
AustRequest.onload = function () {

    var data = JSON.parse(AustRequest.responseText);


        var temp = data.main.temp;
        var humid = data.main.humidity;
        function rain(precip){
            if (precip == undefined) {
                precip = 0;
            } else {
                precip = data.rain['3h'];
            }
            return precip;
        }
        var precip = rain();
        var wind = data.wind.speed;
        document.getElementById('curTempAust').innerHTML = temp + "&deg;F";
        document.getElementById('humidityAust').innerHTML = humid + "&#37;";
        document.getElementById('precipitationAust').innerHTML = precip + " inches";
        document.getElementById('windAust').innerHTML = wind + " mph";


        var f = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        var chill = parseFloat(f).toFixed(2);
        document.getElementById('windChillAust').innerHTML = chill;

        var wImg = document.getElementById('wImageAust');

        var myImage = document.createElement('img');


        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        
        document.getElementById('imgDescriptionAust').innerHTML = "<p>" + data.weather[0].description + "</p>";

        document.getElementById('curDescJAust').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

AustRequest.send();


// Las Vegas
var CaliRequest = new XMLHttpRequest();
CaliRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=California&units=imperial&appid=8ce342ec0bef6453a2de8960f69f0afa');
CaliRequest.onload = function () {

    var data = JSON.parse(CaliRequest.responseText);


        var temp = data.main.temp;
        var humid = data.main.humidity;
        function rain(precip){
            if (precip == undefined) {
                precip = 0;
            } else {
                precip = data.rain['3h'];
            }
            return precip;
        }
        var precip = rain();
        var wind = data.wind.speed;
        document.getElementById('curTempCali').innerHTML = temp + "&deg;F";
        document.getElementById('humidityCali').innerHTML = humid + "&#37;";
        document.getElementById('precipitationCali').innerHTML = precip + " inches";
        document.getElementById('windCali').innerHTML = wind + " mph";


        var f = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        var chill = parseFloat(f).toFixed(2);
        document.getElementById('windChillCali').innerHTML = chill;

        var wImg = document.getElementById('wImageCali');

        var myImage = document.createElement('img');


        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        
        document.getElementById('imgDescriptionCali').innerHTML = "<p>" + data.weather[0].description + "</p>";

        document.getElementById('curDescCali').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

CaliRequest.send();


// Portland
var SeaRequest = new XMLHttpRequest();
SeaRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Washington&units=imperial&appid=8ce342ec0bef6453a2de8960f69f0afa');
SeaRequest.onload = function () {

    var data = JSON.parse(SeaRequest.responseText);


        var temp = data.main.temp;
        var humid = data.main.humidity;
        function rain(precip){
            if (precip == undefined) {
                precip = 0;
            } else {
                precip = data.rain['3h'];
            }
            return precip;
        }
        var precip = rain();
        var wind = data.wind.speed;
        document.getElementById('curTempSea').innerHTML = temp + "&deg;F";
        document.getElementById('humiditySea').innerHTML = humid + "&#37;";
        document.getElementById('precipitationSea').innerHTML = precip + " inches";
        document.getElementById('windSea').innerHTML = wind + " mph";


        var f = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        var chill = parseFloat(f).toFixed(2);
        document.getElementById('windChillSea').innerHTML = chill;

        var wImg = document.getElementById('wImageSea');

        var myImage = document.createElement('img');


        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        
        document.getElementById('imgDescriptionSea').innerHTML = "<p>" + data.weather[0].description + "</p>";

        document.getElementById('curDescSea').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

SeaRequest.send();