// for (let counter = 0; counter < 4; counter++){
//     console.log(counter);
// }

// for (let i = 0; i < 3; i++){
//     console.log(i);
// }

// for (let i = 0; i <= 3; i++) {
//     console.log(i + 5);
// }

// i=0  ve i===3 olamayacağı için çalışmaz.
// for (let i = 0; i === 3; i++) {
//     console.log(i + 5);
// }

// for (let i = 0; i <= 3; i++) {
//     console.log(Math.random());
// }

// let result = 0;
// for (let i = 0; i < 3; i++) {
//     result = i;
// }
// console.log(result);

// for (let i = 0; i < 3; i++) {
//     result += i;
// }
// console.log(result);

// for (let i = 5; i > 0; i--) {
//     result += i;
// }
// console.log(result);

// for (var i = 0; i < 10; i+=2) {
//     result += i;
// }
// console.log(result, i);

// let sampleArr = ["m", "u", "r", "t", "a"];

// let randomNum = Math.floor(Math.random() * 5);
// console.log(sampleArr[randomNum]);

// for (let i = 0; i < 10; i += 2) {
//     let randomNum = Math.floor(Math.random() * 5);
//     console.log(sampleArr[randomNum]);
// }

// let random;
// for (let i = 0; i < 10; i += 2){
//     let temp = random;
//     random = Math.floor(Math.random() * 5);
//     if (temp != random) {
//         console.log(i);
//     }
// console.log(sampleArr[random]);

// let myArray = ["jS", "Mongo", "React", true,"JS"];
// for (let i = 0; i < myArray.length; i+=2) {
// //     console.log(myArray[i]);

// }
// for (let i = 0; i < myArray.length; i += 2) {
//     if (myArray[i] === "JS") {
//         console.log("hey JS var burada");
//     }
// }

// let myNum = [3, 2, 1];
// for (let i = 0; i < myNum.length; i++){

//     if (myNum[i] > myNum[i + 1]) {
//         console.log("İlk değer ikinciden büyüktür");
//         let temp = myNum[i];
//         myNum[i] = myNum[i + 1];
//         myNum[i + 1] = temp;
//     }

// }
// console.log(myNum);

// let arrayim = [3, 6, 9];
// let sum = 0;

// for (let j = 0; j < arrayim.length; j++){
//     sum += arrayim[j];

// }
// console.log(sum);

// let summer = 0;
// for (let j = 0; j < 3; j++){
//     summer += 1;
// }

// console.log(summer);

// let summer = 0;
// for (let j = 0; j < 5; j++){
//     summer += j;
// }

// console.log(summer);

// let yaslar = [["ahmet", 3], ["veli", 5], ["celil", 6]];

// let sum = 0;
// for (let j = 0; j < yaslar.length; j++){
//     sum += yaslar[j][1];
// }

// console.log(sum);


// let myArray = ["jS", "Mongo", "React", "JS","NodeJs"];
// let string = "";
// for (let j = 0; j < myArray.length; j++) {
//     string += (j+1)+"."+ myArray[j].toUpperCase() + "-";
// }
// console.log(string);

// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 63, 65, 26, 7, 42];
// let summy = 0;
// for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] > 10) {

//         continue;

//     }

//     summy += newArr[i];
// }

// console.log(summy);

// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 63, 65, 26, 7, 42];
// let summy = 0;
// for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] > 10) {

//         break;

//     }

//     summy += newArr[i];
// }

// console.log(summy);

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < yourArray.length; j++) {
        if(myArray[i] === yourArray[i]){
            
            console.log(yourArray[j]);
        }
    }
   
}