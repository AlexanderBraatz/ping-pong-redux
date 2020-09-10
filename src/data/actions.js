//this file holds Action Creation functions not actions, those are objects
// they are used to prevent Bugs in mistyping actiontype strings

export const increment = (number) =>{
    return({type: "INCREMENT", who : `player${number}`})
};

export const reset = () =>{
    return({ type: "RESET"})
};
