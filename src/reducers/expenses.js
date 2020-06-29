//Expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            //state.push(action.expense) //NO QUE SE CAMBIA EL ESTADO ACTUAL
            //return state.concat(action.expense);
            return [
                ...state,//tiene todo lo que haya en el array y lo va a concatenar
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) =>  id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return { //return a new object, coges la actual expense (...)
                        //y la sobreescribes con lo que llegue (...action.updates)
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};
export default expensesReducer;