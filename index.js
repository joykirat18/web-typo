import Splitting from "https://cdn.skypack.dev/pin/splitting@v1.0.6-Za2vDy3XuQ4lO2x5hbUG/mode=imports,min/optimized/splitting.js";

document.getElementById("slide").addEventListener("click", change);
let clickedonce = false;
function change() {
  if (!clickedonce) {
    let heading = document.getElementById("main");
    heading.innerHTML = "";
    const div = document.createElement("div");
    div.className = "animation";
    div.innerHTML = `
        <h2 class="first "><p class = "shake">I can't</h2> 
        <span class="oh">
          <h2 class="second"><p class = "shake">Breathe</h2>
        </span>
      `;
    document.getElementById("first-div").appendChild(div);
    document.getElementById("press").innerHTML = " ";
    heading.classList.remove("breathe-animation");
    document.body.style.background = "#FF6347";
	clickedonce = true;
	
  }
}

document.getElementById("main").addEventListener("mousedown", after5Sec);
let t;
function after5Sec(){
	t = setTimeout(change, 3000);	
}
document.getElementById("main").addEventListener("mouseup", clear);

function clear(){
	clearTimeout(t);
}

const reloadButton = document.querySelector("#slide1");
// Reload everything:
function reload() {
  reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);
document
  .getElementById("main")
  .addEventListener("onhover", shakeeverythingelse);
function shakeeverythingelse() {
  const info = document.getElementById("all-info");
  info.classList.add(shake);
}
Splitting();
