import "./reset.css";
import "./layout.css";
import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import whereTo from "./where-to.json";

const single = whereTo.filter(place => place.periods == 1);
const double = whereTo.filter(place => place.periods == 2);

document.getElementById("generate").addEventListener("click", () => {
    const period = document.getElementById("periods").value;
    const choices = period == 1 ? single : double;
    const random = Math.floor(Math.random() * choices.length);
    const result = choices[random];
    // Show result
    document.getElementById("result").innerHTML = `<h2>${result.name}</h2>
<p>${result.food}</p>
<p>${result.location}</p>
<a href="http://maps.apple.com/?q=${encodeURIComponent(result.address)}" target="_blank" rel="noopener noreferrer">${result.address}</a>
<p>Travel time: ${result.travelTime} min</p>
<p>${"$".repeat(result.price)}</p>
<p>${result.orderingOptions.join(", ")}</p>`
});