// let sum = 0;
// let i = 0;

// while(i<=5){
//   sum =sum+1
//   i++
// }
// console.log(sum)


//qtn 2 
// let countdown =[]
// let j =5;
// while(j> 0){
//   countdown.push(j); 
//   j--
// }
// console.log(countdown)


// qtn 3
// let teacollection =[]
// let tea  = 
// do {
//   tea = prompt(`"enter your favourate tea (type "stop" to finish)`)
//   if (tea != "stop") {
//     teaCollection.push(tea)
//   }
// } while (tea !== "stop" );


// qtn4
// let total =0;
// let k =1;
// do {
//   total += k
//   k++
  
// } while (k<=3);


// let multipliedNumbers = []
// let numbers = [2,4,6]
// for (let l=0; l<=numbers.length; l++ ){
//   takeNumbers = numbers[l]*2
//   multipliedNumbers.push(takeNumbers);
// }
// console.log(multipliedNumbers);


let cities = ["paris","tokyo" ,"london", "now york"]
let cityList = []

for (let c = 0; c < cities.length; c++) {
  const myCity = cities[c];
  cityList.unshift(myCity);  // also we can use shift and unshift try this out bu your self // shift wiill print empty square bracket while unshift will print the same as the push prints means push = shifts((both methods will give the same output ))
}

console.log(cityList);


/*
             ┌────────────────────────┐
             │ Start                  │
             └─────────┬──────────────┘
                       │
                       ▼
       ┌──────────────────────────────┐
       │ Initialize cities = [...]    │
       │ Initialize cityList = []     │
       └─────────┬────────────────────┘
                 │
                 ▼
       ┌──────────────────────────────┐
       │ Set c = 0                    │
       └─────────┬────────────────────┘
                 │
                 ▼
       ┌──────────────────────────────┐
       │ Is c < cities.length ?       │
       └───────┬─────────┬────────────┘
               │Yes       │No
               ▼          ▼
 ┌────────────────────┐   │
 │ myCity = cities[c] │   │
 │ cityList.push(...) │   │
 └─────────┬──────────┘   │
           │              │
           ▼              │
   ┌─────────────────┐    │
   │ c = c + 1       │    │
   └───────┬─────────┘    │
           │               │
           └─────Loop──────┘
                          ▼
               ┌──────────────────────────────┐
               │ Print cityList to console    │
               └─────────┬────────────────────┘
                         │
                         ▼
               ┌──────────────────────────────┐
               │ End                          │
               └──────────────────────────────┘

*/
