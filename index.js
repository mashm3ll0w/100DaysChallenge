document.querySelector("body").style.textAlign = "center";
document.querySelector(".tag").style.fontSize = "1.75rem";
document.querySelector(".tag").style.color = "indigo";

// challenge 01 - Seek and destroy
function destroyer(arr) {
	let baseArr = arguments[0];
	let duplicates = [];
	for (let x = 1; x < arguments.length; x++) {
		duplicates.push(arguments[x]);
	}
	return baseArr.filter((item) => {
		return duplicates.indexOf(item) === -1;
	});
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
