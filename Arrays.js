/*
An array is a systematic arrangement of
the same type of data.
But in java script Array is a variable
which contains multiple values may be
of same type or different type since by
default in java script everything is
treated as a string.
An array is zero-based i.e. indexing start
with 0.
*/

console.log("lets discuss about the arrays concept")
let marks = [34,96,77,28,35]
const fruits = ['Orange','Apple','PineApple']
const mixed = ['str',89,[3,'str1']]
const arr = new Array("str",87,32)

// console.log(marks)
// console.log(arr)
// console.log(mixed)
// console.log(fruits)
// console.log(fruits[1])
// console.log(arr.length)
// console.log(Array.isArray(arr))
// arr[0]= 'HArry'
// console.log(arr)

// marks.forEach((i)=>console.log(i))

// for(let arr of marks){
//     console.log(arr)
// }

let value = marks.indexOf(77)
// console.log(value)

// mutating or modifing arrays
// marks.push(1234)//to add at end
// console.log(marks)
// marks.pop()//to remove at end
// console.log(marks)
// marks.unshift("begining")// to add at beginning
// console.log(marks)
// marks.shift()// to remove at beginning
// console.log(marks)
// let splicedArray = marks.splice(0,2)//start from index (first argument) and delete (second argument) elements from der
// //splice returns array of deleted elements
// console.log(marks)
// console.log(splicedArray)
// marks.reverse()//array bilkul ulta hojayega
let marks2 = [1,2,3,4]
// marks = marks.concat(marks2)
// let temp = marks
// marks = marks.concat(temp.reverse())
// // console.log(temp)//concat will add another array beside existing array
// marks.forEach((i)=>console.log(i))


