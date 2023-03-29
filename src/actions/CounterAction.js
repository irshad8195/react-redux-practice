import { INCREMENT, DECREMENT, RESET} from "./Constants";

export const IncrementCount =()=>{
    //debugger
    return({
        type:INCREMENT
    })
}

export const DecrementCount =()=>{
    return({
        type:DECREMENT
    })
}   

export const ResetCount =()=>{
    return({
        type:RESET
    })
}