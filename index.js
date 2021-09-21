// Code your solution in this file!
function distanceFromHqInBlocks(num) { 
if (num >= 42) {
return num - 42;
} else (num < 42)
return 42 - num;
}

function distanceFromHqInFeet(num) {
let n = distanceFromHqInBlocks(num)
console.log(n*264)
return (n*264)
}

function distanceTravelledInFeet(num1, num2) {
let blocks
if (num2 > num1) {
    blocks = num2 - num1
    return (blocks * 264)
}
if (num1 > num2) {
   blocks = num1 - num2;
   return (blocks * 264)  
}
}
function calculatesFarePrice(start, destination) {
 let feet = distanceTravelledInFeet(start, destination) 
 let fare
 if (feet <= 400) {
     fare = 0
 }
 else if (feet > 400 && feet <= 2000){
     fare = ((feet - 400)* 2) / 100
 }  
 else if (feet > 2000 && feet < 2500) {
     fare = 25
 }
 else {
     fare = 'cannot travel that far'
 }
 return fare
}