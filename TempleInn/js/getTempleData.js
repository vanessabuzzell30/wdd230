

var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'json/temples.json');



myRequest.onload = function () {
    var data = JSON.parse(myRequest.responseText);

    showMArizonaClosures(data);
    showAAustraliaClosures(data);
    showSDCaliforniaClosures(data);
    showSWashingtonClosures(data);

    // Arizona
    function showMArizonaClosures(jsonObj) {
        var closureDate = jsonObj.temple[0].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('marizonaClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }

    // Australia
    function showAAustraliaClosures(jsonObj) {
        var closureDate = jsonObj.temple[1].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('aaustraliaClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }

    // san diego california
    function showSDCaliforniaClosures(jsonObj) {
        var closureDate = jsonObj.temple[2].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('sdcaliforniaClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }

    // Seattle
    function showSWashingtonClosures(jsonObj) {
        var closureDate = jsonObj.temple[3].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('swashingtonClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }
}

myRequest.send();