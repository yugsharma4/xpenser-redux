import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../actionTypes/expenses"

export const addExpense = (data) => {
    
    return ({
        type:ADD_EXPENSE,
        data
    });
}

export const deleteExpense = data => {
    return ({
        type:DELETE_EXPENSE,
        data
    })
}

export const serachExpense = query => {
    return ({
        type:SEARCH_EXPENSE,
        query
    })
}