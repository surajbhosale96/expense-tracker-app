import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeExpense} from '../redux/actions/expenses';
const Transactions = () => {
  const dispatch = useDispatch();
  const transactionData = useSelector(
    state => state.expenseReducer.expenseList,
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.listContainer}>
        {transactionData.map(item => {
          return (
            <View style={styles.listItem}>
              <Text style={styles.description}>{item.text}</Text>
              <Text style={styles.amount}>{item.text2}</Text>
              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => {
                  dispatch(removeExpense(item.id));
                }}>
                <Text style={styles.deleteBtnText}>Delete expense</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  listItem: {
    flexDirection: 'row',
    paddingVertical: 25,
    justifyContent: 'space-around',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
  },
  amount: {
    fontSize: 18,
  },
  deleteBtn: {
    backgroundColor: '#F93154',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  deleteBtnText: {
    color: '#fff',
    fontFamily: 'arial',
  },
});

export default Transactions;
