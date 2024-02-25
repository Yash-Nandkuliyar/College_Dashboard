import React, { useReducer } from 'react';
const initialState = {
    counter1: 0,
    counter2: 10,
    counter3: 20,
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counter1: state.counter1 + action.value };
        case 'decrement':
            return { ...state, counter1: state.counter1 - action.value };

        case 'increment2':
            return { ...state, counter2: state.counter2 + action.value };
        case 'decrement2':
            return { ...state, counter2: state.counter2 - action.value };

        case 'increment3':
            return { ...state, counter3: state.counter3 + action.value };
        case 'decrement3':
            return { ...state, counter3: state.counter3 - action.value };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const Book = () => {

  const [state, dispatch]= useReducer(reducer, initialState);

  return <>
      <div>
          <span>First Counter: {state.counter1}</span>
          <button onClick={()=> dispatch({type: 'increment', value:1})}>Increment</button>
          <button onClick={()=> dispatch({type: 'decrement', value:1})}>Decrement</button>
          <button onClick={()=> dispatch({type: 'reset', value:1})}>Reset</button>
          
      </div>
      <br></br>
      <div>
          <span>Second Counter: {state.counter2}</span>
          <button onClick={()=> dispatch({type: 'increment2', value:10})}>Increment</button>
          <button onClick={()=> dispatch({type: 'decrement2', value:10})}>Decrement</button>
          <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
          
      </div>
      <br></br>
      <div>
          <span>Third Counter: {state.counter3}</span>
          <button onClick={()=> dispatch({type: 'increment3', value:10})}>Increment</button>
          <button onClick={()=> dispatch({type: 'decrement3', value:10})}>Decrement</button>
          <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
          
      </div>
  </>
}

export default Book