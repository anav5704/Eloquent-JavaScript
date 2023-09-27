const funcA = function(){
    return "Started B"
}

function funcB(){
    return "Started A"
}

const funC = () => {
    return "Started C"
}

console.log(funcA(), funcB(), funC())

function human(name){
     function sayHi(){
        console.log(`Hi im ${name}`)
    }
    sayHi()
}

human("Anav")

function findMin(a, b){
    return Math.min(a, b)
}

console.log(findMin(2, 4))

function isEven(n){
    return n % 2 == 0 ? true : false
}

console.log(isEven(1))

function countChars(word, chraracter){
    let count = 0
    for(let i = 0; i < word.length; i++){
        if (word[i] === chraracter) { count++ }
    }
    return count
}

console.log(countChars("Banana", "a"))


