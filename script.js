// const Algorithm = (arr, target) => {
//   let isValid = false;
//   arr.forEach((el) => {
//     for (let i = 0; i < arr.length; i++) {
//       if (el + arr[i] === target) isValid = true;
//     }
//   });
//   return isValid;
// };

// console.log(Algorithm([2, 7, 11, 15], 9));

// Double the Value of the entries in an array using the map method

// const doubleNumbers = (arr) => {
//   return arr.map((el) => el * 2);
// };
// console.log(doubleNumbers([1, 2, 4]));

// Take an array of numbers and make them strings

// const arrToString = (arr) => {
//   return arr.map((el) => el.toString());
// };

// console.log(arrToString([12, 3, 4]));

// const capitalizeName = (arr) =>{
//   arr.map(el => el[0].toCapitalise())
// }

// function namesOnly(arr) {
//  return arr.map((el) => el.name);
// }

// console.log(
//   namesOnly([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// function makeStrings(arr) {
//   return arr.map((el) => {
//     if (el.age > 17) {
//       el.join(" can go to the Matrix");
//     }
//     else{
//       el.join(" is under age!!!")
//     }
//   });
// }

// console.log(
//   makeStrings([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );

// Function to Capitalise Words

// let capitalizeWord = (words) =>{
//  return words.map(word =>word[0].toUpperCase() + word.slice(1).toLowerCase())
// }
// console.log(capitalizeWord(['welcome', 'to', 'CODING', 'Beauty']));

// function makeStrings(arr) {
//   // your code here
//   let result = ["can go to the matrix", "is under age !"];
//   return arr.map((el) => {
//     if (el.age > 18) {
//       el.concat(" ", ...result[0]);
//     } else {
//       el.concat(" ", ...result[1]);
//     }
//   });
// }

// console.log(
//   makeStrings([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );

function readyToPutInTheDOM(arr){
 return arr.map(el =>`<h1>${el.name}</h1> <h2>${el.age}</h2>`)
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 