import { INCREMENT,DECREMENT } from "../constant/actionsTypes";

const initialState = {
    count : 0
}

const countReducer = (state=initialState,actions) =>{
    switch (actions.type) {
        case INCREMENT:
            return {...state,count : state.count +1};
        case DECREMENT :
            return {...state, count : state.count -1}  ;
            
    
        default:
            return state;
    }
}

export default countReducer