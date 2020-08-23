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
