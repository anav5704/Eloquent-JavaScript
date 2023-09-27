JSarray = [1, "ball", true]
console.log(JSarray[2])

const Anav = {
    username: "Anav", 
    age: 19,
    introduce: () => console.log(`Hey, I'm ${Anav.username} of age ${Anav.age}`)
}

const {username} = Anav // destructuring >>>
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

loop()
addTask("Sleep")
loop()
addTask("Code")
loop()
addTaskUrgently("Shit")
loop()
getTask()
loop()
