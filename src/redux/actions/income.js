import {ADD_INCOME} from './actionTypes';

export const addIncome = income => {
  return {type: ADD_INCOME, income};
};
