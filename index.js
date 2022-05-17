// code your solution here
function mondayWork (toDo="go to the office") {
    let plan = `This Monday, I will ${toDo}.`
    return plan;
}

function saturdayFun(toDo2="roller-skate") {
    return `This Saturday, I want to ${toDo2}!`
} 



function wrapAdjective(msg="special") {
    return function cheerUp(msg2="*") {
        const cheerUpFunction = `You are ${msg}${msg2}${msg}!`
        return cheerUpFunction;
    } 
}


wrapAdjective("%")("a dedicated programmer")

