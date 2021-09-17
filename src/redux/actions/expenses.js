import {ADD_EXPENSE, REMOVE_EXPENSE} from './actionTypes';

export const addExpense = (amount, description) => {
  return {type: ADD_EXPENSE, amount, description};
};
export const removeExpense = id => {
  return {type: REMOVE_EXPENSE, id};
};
