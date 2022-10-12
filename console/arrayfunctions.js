let sum = function (a){
	return function (b){
		if(b){
			return sum(a + b);
		}
		return a;
	}
}



let sum = (a) => (b) => b ? sum(a+b) : a;

console.log(sum(1)(10)(14)());


document.querySelector('#grandparent').addEventListener('click',function(e){
	e.stopPropagation();
	console.log("grandparent clicked");
},true);

document.querySelector('#parent').addEventListener('click',function(){
	console.log("parent clicked");
},true);

document.querySelector('#child').addEventListener('click',function(){
	console.log("child clicked");
},true);


const myElement = document.getElementById("demo");

function getLocation() {
	console.log(navigator.geolocation);
  if (navigator.geolocation) {
    //console.log(navigator.geolocation.getCurrentPosition(showPosition));
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

getLocation();