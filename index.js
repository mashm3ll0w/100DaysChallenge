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
