document.querySelector("body").style.textAlign = "center";
document.querySelector(".tag").style.fontSize = "1.75rem";
document.querySelector(".tag").style.color = "indigo";

// challenge 01 - Seek and destroy
// function destroyer(arr) {
// 	let baseArr = arguments[0];
// 	let duplicates = [];
// 	for (let x = 1; x < arguments.length; x++) {
// 		duplicates.push(arguments[x]);
// 	}
// 	return baseArr.filter((item) => {
// 		return duplicates.indexOf(item) === -1;
// 	});
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// challenge 01 - solution 2
function destroyer(arr){
  let data = arguments[0];
  let items = [];
  for(let x = 1; x < arguments.length; x++){
    items.push(arguments[x]);
  }
  return data.filter(val => {
    return !items.includes(val);
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3, 4], 1, 2, 3));