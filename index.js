// spinal tap
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str){
	let myReg = /[" "_]/gi;
	return str.replace(myReg, "-").toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
