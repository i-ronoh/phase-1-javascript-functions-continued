function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

saturdayFun("bathe my dog!");

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

mondayWork("work from home");

function wrapAdjective(style = "*") {
    return function(special = "special") {
        return `You are ${style}${special}${style}!`;    }
}