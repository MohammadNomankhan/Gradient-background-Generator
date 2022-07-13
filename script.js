var css = document.querySelector("p");
var input1 = document.getElementById("color1");
var input2 = document.getElementById("color2"); 
var body = document.getElementById("body");
var deg = document.getElementById("deg");

function add_gradient(){
	// console.log(deg.value);
	body.style.background = "linear-gradient(" + deg.value + "deg" + " ," + input1.value + ", " + input2.value + ")";
	// body.style.background = "linear-gradient(to right," + input1.value + ", " + input2.value + ")";
	css.textContent = body.style.background;
}

function add_angle(){
	body.style.background = "linear-gradient(" + deg.value + "deg" + " ," + input1.value + ", " + input2.value + ")";
	css.textContent = body.style.background;
}


input1.addEventListener("input", add_gradient);
input2.addEventListener("input", add_gradient);
deg.addEventListener("input", add_angle);