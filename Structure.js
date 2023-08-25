// JavaScript Supremacy
// for(let line = " * "; line.length < 24; line += " * "){
//     console.log(line)
// }

// Fizz Buzz
// for(let i = 1; i <= 100; i++){
//     i % 3 == 0 && i % 5 == 0 ? console.log("FizzBuzz") 
//     :
//     i % 3 == 0 && i % 5 != 0 ? console.log("Fizz") 
//     : 
//     i % 5 == 0 && i % 3 != 0 ? console.log("Buzz") 
//     : 
//     console.log(i)
// }

// Fizz Buzz but better
// for(let i = 1; i <= 100; i++){
//     let output = ""

//     if(i % 5 == 0) output += "Fizz"
//     if(i % 3 == 0) output += "Buzz"

//     console.log(output || i)
// }

let size = 8
let chessBoard = ""

for(let i = 0; i < size; i++){
    if (i % 2 == 0) {
        for(let i = 0; i < size; i++){
            chessBoard += " #"
        }
    }
    else{
        for(let i = 0; i < size; i++){
            chessBoard += "# "
        }
    }
    chessBoard += "\n"
}

console.log(chessBoard)