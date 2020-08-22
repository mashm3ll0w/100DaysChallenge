<<<<<<< HEAD
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
=======
// 01 - DOMContentLoaded
// document.addEventListener("DOMContentLoaded", function () {
// 	document.getElementById("getMessage").onclick = function () {
// 		document.getElementsByClassName("message")[0].innerText = "Here is the message";
// 	};
// });

// 02 - XMLRequests - Declare the json object beforehand
// document.addEventListener("DOMContentLoaded", function () {
// 	document.getElementById("getMessage").onclick = () => {
// 		let req = new XMLHttpRequest();
// 		req.open("GET", "https://swapi.dev/api/people/1/", true);
// 		req.responseType = "json";
// 		req.send();
// 		req.onload = () => {
// 			let ans = req.response;
// 			document.querySelector(".message").innerText = ans.name;
// 		};
// 	};
// });

// 02a - Declare the json object afterwards
// let req = new XMLHttpRequest();
// req.open("GET", "https://swapi.dev/api/people/1/", true);
// req.send();

// req.onload = () => {
// 	let json = JSON.parse(req.response);
// 	document.querySelector(".message").innerText = JSON.stringify(json.eye_color);
// };
>>>>>>> b3ac49beec430f4dd396d56a3f53d0e8267eeb8b
