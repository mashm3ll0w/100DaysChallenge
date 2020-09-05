// spinal tap
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
	// Create a variable for the white space and underscores.
	let myRegex = /\s+|_+/g;

	// Replace low-upper case to low-space-uppercase
	str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
	
	// Replace space and underscore with -
	return str.replace(myRegex, "-").toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
