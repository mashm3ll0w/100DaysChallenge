function myReplace(str, before, after) {
	let capsReg = /[A-Z]/;
	if (before[0] === before[0].toUpperCase()) {
		let newAfter = [...after];
		newAfter[0] = newAfter[0].toUpperCase();
		return str.replace(before, newAfter.join(""));
	} else {
		return str.replace(before, after.toLowerCase());
	}
}

console.log(myReplace("Let us go to the store", "store", "mall"));
