const date = new Date();
const year = date.getFullYear();

document.querySelector("#currentyear").textContent = year;
document.getElementById("lastMod").textContent = `Last Updated:  ${document.lastModified}`;