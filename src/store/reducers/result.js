import * as actionTypes from '../actions'
const initialState={
    results:[]
}

const reducer = (state=initialState,action) =>{
    switch(action.type)
    {
    case actionTypes.STORE_RESULT :
    return{
        ...state,   //redux裏要保存所有的state,因此{...state}會先複製一份舊的state,再更動舊的state
        results:state.results.concat({id:new Date(),value:action.result})
    };
    case actionTypes.DELETE_RESULT:
    const newArray = state.results.filter(result=>(result.id !== action.DelElid));
   
    return{ 
        ...state,
        results: newArray
    };
    }
  
    return state;
}

export default reducer;