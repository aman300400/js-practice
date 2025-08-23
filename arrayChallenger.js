// 
// Lecture thumbnail
// 7:26 / 35:08
// 44. Facing ten challenges in Array and methods



let teaflavor = ["orange","ginger", "mint","cinnemon", "Lemon"]


const firsttea = teaflavor[0]
//console.log(firsttea);

let cities = ["london" , "tokyo", "paris" , "newyork"]

const favouritecity = cities[1]
//console.log(favouritecity);

let teatypes = ["herbal tea " , "white tea" , "masala tea " , "ginger tea"]




let cityvisited = ["delhi", "mumbai", "bangalore", "chennai","berlin"]
//console.log(cityvisited);



// to run jsfoundation/part4/arrayChallenger.js


let teaorders =[ "chai" , "masala chai", "ginger tea", "lemon tea", "green tea"]
teaorders.push("mint tea")

//console.log(teaorders);
teaorders.pop();
//console.log(teaorders);

// let popularteas  = ["gren tea ", "oolang tea", "chai", "masala tea"]

// let softcopyteas = popularteas  // example of shallow coly or soft copy
// console.log(softcopyteas);

let topCities = ["Delhi", "noida","gurugram", "mumbai", "bangalore"]

 // let hardCopycities = [...topCities] // ....()dot dot dot is called spread    

// let hardCopycities = topcopycities.slice();
// operatorexample of hard copy or deep copy
// topCities.pop()
//console.log(hardCopycities) // this is for hard copy

let europeancities = [" lomdon ", " paris ", " berlin "]
let asianCities = [ "  tokyo "," delhi ", " mumbai ", " bangalore "]

let worldcities = europeancities + asianCities

//console.log(worldcities); // this will not work as expected, it will concatenate the two arrays as strings
//console.log(typeof worldcities); // this will show the type as string


let teamenu =["masalachai" , "ginger tea ", "lemon tea", "grass tre"]

let menuLength = teamenu.length //this function works without paranthesis

let citybucketList =[ "kypto", "london", "paris", "berlin", "newyork"]

let islondonisinList = citybucketList.includes("london") //if  we check in upper case it gives false as aoutput


console.log(islondonisinList); // this will return true or false if the element is present in the array
