const date = new Date();
const year = date.getFullYear();

document.querySelector("#currentyear").textContent = year;
document.getElementById("lastUdated").textContent = "Last Updated: " + document.lastModified;