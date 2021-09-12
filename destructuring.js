//demonstrating different ways of using destructuring

//set your variables
const a = 1;
const b = 2;
//use destructuring pattern to swap the values
[a,b] = [b,a]
// a = 2, b = 1


//using the sperad operator (...)
//set your variables
const [a,...b] = [1,2,3]
console.log(a,b)
// a = 1, b = [2,3]

//destructuring objects
// {
//     name: "alex",
//     age : 18,
//     sex : "male"
// }

// var {name,age,sex} = {
//     name: "alex",
//     age : 18,
//     sex : "male"
// }

//name = alex, age = 18, sex = male

var info = [
    {
        name : "Hanna",
        color: "Orange"
    },
    {
        name : "Mike",
        color: "Pink"
    }
]

var [ { color : firstColor }, { color: secondColor } ] = info