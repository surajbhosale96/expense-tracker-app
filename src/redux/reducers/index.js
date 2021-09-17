import {combineReducers} from 'redux';
import expenseReducer from './expenses';
import incomeReducer from './income';
export default initialReducer = combineReducers({
  expenseReducer,
  incomeReducer,
});
