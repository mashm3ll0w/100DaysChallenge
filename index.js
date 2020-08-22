document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("getBtn").onclick = () => {
		let req = new XMLHttpRequest();
		req.open("GET", "https://swapi.dev/api/people/4/", true);
		req.responseType = "json";
		req.send();

		req.onload = function () {
			let data = req.response;
			console.log(data);
			document.querySelector(".heading1").innerText = data.name;
			document.querySelector(".tagline1").innerText = `Gender: ${data.gender} Eye Color: ${data.eye_color}`;
		};

		fetch("https://www.breakingbadapi.com/api/characters/1/")
			.then((response) => response.json())
			.then((data) => {
        console.log(data);
				document.querySelector(".heading2").innerText = data[0].name;
				document.querySelector(".tagline2").innerText = `Occupation: ${data[0].occupation.join(", ")}`;
			});
	};
});
