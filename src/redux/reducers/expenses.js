import {ADD_INCOME, ADD_EXPENSE, REMOVE_EXPENSE} from '../actions/actionTypes';
import produce from 'immer';
const initialState = {
  expenseList: [],
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return produce(state, draftState => {
        draftState.expenseList.push({
          text: action.amount,
          text2: action.description,
          id: new Date().getTime(),
        });
      });
    case REMOVE_EXPENSE:
      return produce(state, draftState => {
        const items = [];
        draftState.expenseList.map(item => {
          if (item.id !== action.id) {
            items.push(item);
          }
        });
        draftState.expenseList = items;
      });

    default:
      return state;
  }
};

export default expenseReducer;
