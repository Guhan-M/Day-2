// IIFE FUNCTION

// (function(arr){
//   function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
//     if (num <= 3) {
//       return true;
//     }
//     if (num % 2 === 0 || num % 3 === 0) {
//       return false;
//     }
//     for (let i = 5; i * i <= num; i += 6) {
//       if (num % i === 0 || num % (i + 2) === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   console.log(arr.filter(isPrime));
// })([2, 3, 5, 7, 8, 11, 12, 13, 17, 19])


// ARROW FUNCTION

// let PrimesInArray=(arr)=>{
//   function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
//     if (num <= 3) {
//       return true;
//     }
//     if (num % 2 === 0 || num % 3 === 0) {
//       return false;
//     }
//     for (let i = 5; i * i <= num; i += 6) {
//       if (num % i === 0 || num % (i + 2) === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   console.log(arr.filter(isPrime));
// }
//  PrimesInArray([2, 3, 4, 5, 7, 8, 11, 12, 13, 17, 19]);


// // ANONYMOUS FUNCTION

// let PrimesInArray=function(arr) {
//   function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
//     if (num <= 3) {
//       return true;
//     }
//     if (num % 2 === 0 || num % 3 === 0) {
//       return false;
//     }
//     for (let i = 5; i * i <= num; i += 6) {
//       if (num % i === 0 || num % (i + 2) === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   console.log(arr.filter(isPrime));
// }
// PrimesInArray([2, 3, 5, 7, 8, 11, 12, 13, 17, 19]);

