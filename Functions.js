const funcB = function(){
    return "Started B"
}

function funcA(){
    return "Started A"
}

const funC = () => {
    return "Started C"
}

console.log(funcA(), funcB(), funC())


