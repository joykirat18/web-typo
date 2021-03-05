import Splitting from "https://cdn.skypack.dev/splitting";


document.getElementById("slide").addEventListener("click",change);

function change(){
	let heading = document.getElementById("main");
	heading.innerHTML = "I can't breathe";
	// document.getElementById("main").innerHTML = "I can't breathe";
	
	heading.classList.remove("breathe-animation");
	heading.classList.add("shake");
	document.body.style.background = "#FF6347";
	document.getElementById("help").innerHTML = "HELP";
	// document.getElementsByClassName("content").te = "<h2 class='text_shadows'>HELP</h2>";
}
Splitting();