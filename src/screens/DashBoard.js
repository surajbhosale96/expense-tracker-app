import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {addIncome} from '../redux/actions/income';

const DashBoard = () => {
  const dispatch = useDispatch();
  const [addBalance, setAddBalance] = useState(0);
  const transactionData = useSelector(
    state => state.expenseReducer.expenseList,
  );
  const incomeData = useSelector(state => state.incomeReducer.incomeData);
  console.log(incomeData);
  const totalExpense = transactionData
    .map(transactionData => {
      return Number(transactionData.text2);
    })
    .reduce((currentAmount, acc) => {
      return currentAmount + acc;
    }, 0);
  const balance = incomeData
    .map(transactionData => {
      return Number(transactionData.income);
    })
    .reduce((currentAmount, acc) => {
      return currentAmount + acc;
    }, 0);
  const totalBalance = balance - totalExpense;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.addBalanceInputAndBtnContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={addBalance}
            keyboardType="numeric"
            label="Add Balance"
            onChangeText={text => setAddBalance(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.addBtnContainer}
          onPress={() => {
            dispatch(addIncome(addBalance));
          }}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.totalExpenseAndTotalBudgetContainer}>
        <View style={styles.totalExpenseContainer}>
          <Text style={styles.totalExpenseText}>
            Total Expense {totalExpense}
          </Text>
        </View>
        <View style={styles.totalBudgetContainer}>
          <Text
            style={
              totalBalance <= 0
                ? styles.totalBudgetNegativeText
                : styles.totalBudgetPositiveText
            }>
            Total Balance {totalBalance}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  addBalanceInputAndBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  addBtnContainer: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: 'skyblue',
    borderRadius: 10,
  },
  addText: {
    fontSize: 20,
  },
  totalExpenseAndTotalBudgetContainer: {
    alignItems: 'center',
    paddingTop: 30,
    justifyContent: 'center',
  },
  totalExpenseContainer: {
    backgroundColor: '#D6EAF8',
    padding: 25,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  totalBudgetContainer: {
    backgroundColor: '#D6EAF8',
    padding: 25,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: 15,
  },
  totalExpenseText: {
    fontSize: 20,
    fontFamily: 'arial',
  },
  totalBudgetNegativeText: {
    fontSize: 20,
    fontFamily: 'arial',
    color: 'red',
  },
  totalBudgetPositiveText: {
    fontSize: 20,
    fontFamily: 'arial',
    color: 'green',
  },
});

export default DashBoard;
