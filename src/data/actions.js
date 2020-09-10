//this file holds Action Creation functions not actions, those are objects
// they are used to prevent Bugs in mistyping actiontype strings

export const increment = (number) =>{
    return({type: "INCREMENT", who : `player${number}`})
};

export const reset = () =>{
    return({ type: "RESET"})
};

export const startWith = (name1, name2, winScore, alternation) =>{
    return({type:"START",name1, name2, winScore, alternation})
}