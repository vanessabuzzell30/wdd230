const yearDisplay = document.querySelector('footer h2');
var today = new Date();
var todayYear = today.getFullYear();
yearDisplay.innerHTML = `&copy; ${todayYear} - Vanessa Buzzell Virgina`;

const modDateDisplay = document.querySelector('footer p');
let modDate = document.lastModified;
modDateDisplay.textContent = ("Last modified "+modDate);