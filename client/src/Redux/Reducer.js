
// import * as actionTypes from './userContsants';



export const SearchReducer=(state=[],action)=>{
    if(action.type === "seachByName"){
        return action.data
    }else{
        return null
    }
}

