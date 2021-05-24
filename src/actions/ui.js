import { types } from "../types/types"

export const setError=(err)=>{
    return {
        type:types.setError,
        payload: err
    }
}

export const removeError=()=>{
    return{
        type:types.removeError
    }
}