const date = new Date();
const year = date.getFullYear();


document.querySelector("#year").textContent = year;
document.getElementById("updated").textContent = `Last Updated: ${document.lastModified}`;
// element to output to
const datefieldUK = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

if(date.getDay() === 2 || date.getDay() === 1) {
	const banner = document.querySelector("#banner");
	banner.style.display = "block";
}