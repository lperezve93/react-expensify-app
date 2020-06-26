import { createStore } from 'redux';

//Action generators - functions that return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT' ,
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
});
const resetCount = () => ({
    type: 'RESET'
});

//Reducers
//1. Reducers are pure functions
//2. Necer change state or action


const countReducer = (state = {count: 0}, action) => {
    switch (action.type){
        case 'INCREMENT':
             return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default: return state;
    }  
};

const store = createStore(countReducer);



//esta funcion se llama cada vez que el store cambia!!
/*store.subscribe(() => {
    console.log(store.getState())
});
*/
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
});

//dispatch allow to send an object
/*store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});*/
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 8}));

store.dispatch(setCount({count: 101}));
