import {ADD_INCOME} from '../actions/actionTypes';
import produce from 'immer';
const initialState = {
  incomeData: [],
};

const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INCOME:
      return produce(state, draftState => {
        draftState.incomeData.push({
          income: action.income,
          id: new Date().getTime(),
        });
      });

    default:
      return state;
  }
};

export default incomeReducer;
