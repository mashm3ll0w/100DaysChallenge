<<<<<<< HEAD
<<<<<<< HEAD
// 01 - Convert JSON data to HTML
document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("getContent").onclick = () => {
		let container = document.querySelector(".container");
		fetch("https://www.breakingbadapi.com/api/characters/1/")
			.then((response) => response.json())
			.then((data) => {
				let html = "";
				data.forEach((val) => {
					let keys = Object.keys(val);
					keys.forEach((key) => {
						let card = document.createElement("div");
						let para = document.createElement("p");
						para.innerHTML = `<strong>${key}</strong>: ${val[key]}`;
						card.appendChild(para);
						container.appendChild(card);
					});
				});
				console.log(html);
			});
	};
});

// 02 - get current user location
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition((position) => {
		document.querySelector(".location").innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
	});
}

// 03 - POST data using XMLHttpRequest
document.getElementById("sendMsg").onclick = () => {
	let userName = document.getElementById("username").value;
	let xhr = new XMLHttpRequest();
	let url = "https://jsonplaceholder.typicode.com/posts";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4 && xhr.status === 201) {
			let serverResponse = JSON.parse(xhr.response);
			document.querySelector(".fmServer").textContent = serverResponse.userName + serverResponse.suffix;
		}
	};
	let body = JSON.stringify({ userName: userName, suffix: " loves cats" });
	xhr.send(body);
};
=======
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
>>>>>>> 309933a... recap day01 - fetch and XMLHttpsRequest
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
>>>>>>> ab027be... DOMContentLoaded & XMLHttpRequest
