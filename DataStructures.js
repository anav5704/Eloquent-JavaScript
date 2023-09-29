JSarray = [1, "ball", true]
console.log(JSarray[2])

const Anav = {
    username: "Anav",
    age: 19,
    introduce: () => console.log(`Hey, I'm ${Anav.username} of age ${Anav.age}`)
}

const { username } = Anav // destructuring >>>
console.log("Name: ", username)

Anav.introduce()
delete Anav.age
Anav.introduce()

let Todo = ["Eat", "Drink"]
const loop = () => Todo.forEach((item, index) => console.log(index, item))
const addTask = (task) => Todo.push(task)
const addTaskUrgently = (task) => Todo.unshift(task)
const getTask = () => Todo.shift()

// push and pop are from the end of the array 
// shift and unshift are from the start of the array 

// loop()
// addTask("Sleep")
// loop()
// addTask("Code")
// loop()
// addTaskUrgently("Shit")
// loop()
// getTask()
// loop()

const range = (start, end, step) => {
    let allElements = []
    for (i = start; i <= end; i += step) allElements.push(i)
    return allElements
}

console.log(range(0, 10, 2))

const total = (array) => {
    let sum = 0
    array.forEach(element => sum += element)
    return sum
}

console.log(total(range(0, 10, 2)))

const reverse = (array) => {
    const reversed = []
    array.forEach(element => reversed.unshift(element))
    return reversed
}

console.log(reverse(range(0, 10, 2)))

const arrayToList = (array) => {
    let list = null
    array.reverse().forEach(element => list = { value: element, next: list })
    return list
}

const listToArray = (list) => {
    let array = []
    while(list) {
        array.push(list.value)
        list = list.next
    }
    return array
}

console.log(arrayToList([1, 2, 3]))
console.log(listToArray(arrayToList([1, 2, 3])))
