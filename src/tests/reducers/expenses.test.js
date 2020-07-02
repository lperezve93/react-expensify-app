import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('Should remove expense by Id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2]]);
});

test('Should not remove expense if Id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
    const newExpense = {
        id: '3',
        description: 'Water',
        note: '',
        amount: 2000,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses, newExpense ]);
});

test('Should edit an expense', () => {
    const description = 'Gums';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description
        } 
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe(description);
});

test('Should not edit an expense if expense not found', () => {
    const description = 'Fake gums';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description
        } 
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
