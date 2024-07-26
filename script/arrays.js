let arr = [1, 2, 3, 4, 5];
//    0  1  2  3  4
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])

let n = arr.length;

// console.log(n)
// for(let i = 0; i < n; i++){
//     console.log(arr[i])
// }

// arr.forEach((number) => console.log(number));

//add value/element at the end of  the array

// console.log(arr);
arr.push(6);
// console.log(arr);

//Remove value/element at the end of the array

arr.pop();
// console.log(arr);

//add value/element at the start of  the array

arr.unshift(0);
// console.log(arr);

//Remove value/element at the start of the array

arr.shift();
// console.log(arr);

//map

const doubled = arr.map((num) => num * 2);
// console.log(doubled);
// console.log(arr.map((num) => num * 2));

//reduce

let arr2 = [];
const sum = arr2.reduce((total, num) => total + num, 0);
// console.log(sum);

//filter
const filtered = arr.filter((num) => num < 3);
// console.log(filtered);
const even = arr.filter((num) => num % 2 === 0);
// console.log(even);
const odd = arr.filter((num) => num % 2 !== 0);
// console.log(odd);

//find
const firstEven = arr.find((num) => num % 2 === 0);
// console.log(firstEven)

//findIndex

const firstEvenElementIndex = arr.findIndex((num) => num % 2 === 0);
// console.log(firstEvenElementIndex)

const students = ["Sanjeev", "Sufiyan", "Uzaif"];

students.forEach((student, index) => {
  console.log(index + ": " + student);
});

const arrayNumber = [1, 2, 3, 4, 5];
const square = arrayNumber.map((num) => num * num);
console.log(square);

const product = arrayNumber.reduce((total, num) => total * num, 1);
console.log(product);

function function_name(a, b) {
  console.log();
}
const function2_name = function (a, b) {
  console.log("");
};

const arrow_function = (a, b) => {
  console.log("");
};

console.log("Hi");
// function_name(3);
// function_name(10);
// function_name(2);
// function_name(4);
// function_name(6);

for (let i = 0; i < 10; i++) {
  console.log(i);
}
