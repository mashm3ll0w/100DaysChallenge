document.querySelector("body").style.textAlign = "center";
document.querySelector(".tag").style.fontSize = "1.75rem";
document.querySelector(".tag").style.color = "indigo";


// challenge 01 - Seek and destroy
function destroyer(arr){
  let baseArr = arguments[0];
  let missiles = [];
  for (let x = 1; x < arguments.length; x++){
    missiles.push(arguments[x]);
  }
  console.log("Arr", baseArr);
  console.log("Missiles", missiles);
}

console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));