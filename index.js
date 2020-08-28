document.addEventListener("DOMContentLoaded", () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			alert(`Latitude: ${position.coords.latitude} \nLongitude: ${position.coords.longitude}`);
		});
	}
	let url = "https://swapi.dev/api/people/";
	let req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.responseType = "json";
	req.send();
	req.onload = () => {
		let rawData = req.response;
		let data = rawData.results;
		console.log(data);

		let people = "";
		let names = data
		.map(name => name.name)
		.forEach(personName => {
			people += `<h3> ${personName} </h3>`;
			document.querySelector(".container").innerHTML = people;
		});
		
	};
});
