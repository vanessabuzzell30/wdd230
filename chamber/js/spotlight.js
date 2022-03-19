const requestURL = "chamber/json/data.json"
const spotlightItems = document.querySelectorAll(".spotlight-item")

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        const filteredBusinesses = businesses.filter((businesses) => {
            return businesses.membership == "Bronze" || businesses.membership == "Silver" || businesses.membership == "Gold";
        });
        spotlightItems.forEach((spotlight,index) => {
            const i = Math.floor(Math.random()*filteredBusinesses.length);
            const business = filteredBusinesses[i];

            //img
            let image = document.createElement('img');
            image.src = businesses.imgfile;
            image.setAttribute('alt', business.name);
            spotlight.appendChild(image);

            //p phone
            let p2 = document.createElement('p');
            p2.textContent = businesses.phone;
            spotlight.appendChild(p2);

            //p website
            let p3 = document.createElement('p');
            p3.textContent = businesses.website;
            spotlight.appendChild(p3);


            filteredBusinesses.splice(i,1);
        });
    });