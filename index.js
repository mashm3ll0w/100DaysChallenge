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
