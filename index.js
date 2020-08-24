document.addEventListener("DOMContentLoaded", () => {
	// 01 Get the geolocation of the user
	// if (navigator.geolocation) {
	// 	navigator.geolocation.getCurrentPosition((position) => {
	// 		alert(`Current Location: latitude: ${position.coords.latitude} longitude: ${position.coords.longitude}`);
	// 	});
	// } else {
	// 	alert("Location permission denied");
	// }

	// 02 Get the API
	// method 01 - using XMLHttpRequest()
	let container = document.querySelector(".container");
	let req = new XMLHttpRequest();
	let url = "https://rickandmortyapi.com/api/character/1";
	req.open("GET", url, true);
	req.responseType = "json";
	req.send();

	req.onload = () => {
		let data = [req.response];
		data.forEach((val) => {
			let keys = Object.keys(val);
			keys.forEach((key) => {
				console.log(key, val[key]);
			});
		});
	};
});
