
var toast = document.getElementById("toast-1");
var date = document.createElement("p");
toast.appendChild(date);
var b = new Date();
var c = b.toLocaleString();
date.innerHTML = `Login done at ${c}`;


var toast2 = document.getElementById("toast-2");
var dates = document.createElement("p");
toast2.appendChild(dates);
var d = new Date();
var e = d.toLocaleString();
dates.innerHTML = `Account created at ${e}`;

function show() {
    toast.classList.add("view");
}
function visible() {
    toast2.classList.add("view");
}
function hide() {
    toast.classList.remove("view");
}
function hides() {
    toast2.classList.remove("view");
}