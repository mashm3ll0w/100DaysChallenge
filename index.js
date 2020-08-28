<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> b0ecfcb4d1724b9943bc148a0019b8ff90826f69
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
<<<<<<< HEAD
>>>>>>> day03
=======

// 02 - get current user location
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition((position) => {
		document.querySelector(".location").innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
	});
}
<<<<<<< HEAD

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
=======
>>>>>>> day03
>>>>>>> b0ecfcb4d1724b9943bc148a0019b8ff90826f69
=======
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
		let img = `<img src="${data[0].image}"/>`;
		container.innerHTML = img;
		data.forEach((val) => {
			let keys = Object.keys(val);
			keys.forEach((key) => {
				let div = document.createElement("div");
				div.innerHTML = `<p><strong>${key}</strong>: ${val[key]}</p>`;
				container.appendChild(div);
			});
		});
	};
});
>>>>>>> day04-RickMortyAPI
=======
// 01 callback
// asynchronous means "happens in the future, not now"
// are only used when doing I/O, e.g. downloading things, reading files, talking to databases, etc.

// example 01
downloadPhoto("https://download-from-site.com/photo.jpeg", handlePhoto);

function handlePhoto(error, photo) {
	if (error) {
		console.error("Download error!", error);
	} else {
		console.log("Download finished", photo);
	}
}

console.log("Download started...");

// downloadPhoto function is called and handlePhoto is passed as its callback...
// the callback wont run until the downloadPhoto runs and either returns an error or success...
<<<<<<< HEAD
// 
>>>>>>> day05
=======
//

// example 02
// read a file and do something with the contents

const fs = require("fs");
var myNumber = "";

function addOne(callback) {
	fs.readFile("myFile.txt", function doneReading(err, fileContents) {
		myNumber = parseInt(fileContents);
		myNumber++;
		callback();
	});
}

function logNumber() {
	console.log(myNumber);
}

addOne(logNumber);

// PROMISES

// This uses the then() method to run code once something finishes happening.

let p = new Promise((resolve, reject) => {
  if(/* if it works */){
    resolve("Success!");
  }
  else{
    reject("Failure");
  }
});

p.then(result => {
  /* do something with the result */
}).catch(() => {
  /* show error if theres one */
}).finally(() => {
  /* execute regardless of success or failure */
});

// the above is the syntax for a basic promise
>>>>>>> day05
=======
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
>>>>>>> day06
