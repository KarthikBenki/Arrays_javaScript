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

let origDogs = ["BullDog", "Beagle", "Labrador"]
let cats = new Array("American Curl", "Bengal");
let birds = new Array("Falcons", "Ducks", "Flamingoes");

//Array copy elements
let sliceDogs = origDogs.slice(0, 2)//returns a shallow copy of the original array
sliceDogs  = origDogs.slice(-3,-1)//ask in doubt session
console.log(sliceDogs)
//returns ["BullDog","Beagle"] //"labrador" is ignored because it is at ending index
//starts from slice(a,b) where a = starting index and b is ending index ,returns elements less than ending index
let copyDogs = [...origDogs]//copies the original array fully
let dogs = origDogs.slice()//returns a shallow copy of the original array does not change the original array

//stack functions [LIFO] push and pop
let pushDogs = dogs.push("Golden Retriver")//adds new elements at the end of the array
let popDogs = dogs.pop()//removes the element at the end of the array
dogs[dogs.length] = "Poodle"

//add and remove from the first and last
let addFirst = dogs.unshift("Golden Retriver")//adds new elements at the begining of the array
let removeFirst = dogs.shift()//removes elements at the beginning of the array

//Atomic add and remove elements (Where ,How many to remove ,element list)
/*
0 is starts from index 0, 2 is delete two elements,"pug"and "boxer" are the elements
to be added at first position
*/
dogs.splice(0, 2, "Pug", "Boxer")

//Array Function - concat ,Slice and sort
let animals = dogs.concat(cats, birds);//returns combination of all three arrays
/*
another way of concatination and conversion to string using toString() method
*/
let newAnimal = [...dogs, ...cats, ...birds].toString();
// console.log(dogs)
let sortDog = dogs.slice().sort()//sorts the array in ascending order
sortDog = [...dogs].sort();//another way of sorting
/*
takes the input as array only scans given 
elements and prints the scanned elements
*/
function scanArray([a, b, c]) {
    console.log("Scan: " + a + " " + b + " " + c);
}
// scanArray(animals)
/*
returns the string array separated by the data passed inside the paranthesis
*/
let joinAnimals = animals.join(",");
//another way to seperate the array elements using comma or space or anything
let allAnimals ="";
for(let animal of animals) {
    allAnimals += animal + ","
}
// console.log(allAnimals);


