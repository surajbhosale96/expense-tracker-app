import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addExpense} from '../redux/actions/expenses';
import {TextInput} from 'react-native-paper';

const AddExpense = () => {
  const transactionData = useSelector(
    state => state.expenseReducer.expenseList,
  );
  console.log(transactionData);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const resetInputField = () => {
    setAmount('');
    setDescription('');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            label="Enter the amount"
            value={amount}
            onChangeText={text => setAmount(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            label="Description"
            value={description}
            onChangeText={text2 => setDescription(text2)}
          />
        </View>

        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => dispatch(addExpense(description, amount))}
          onPressOut={() => {
            resetInputField();
          }}>
          <Text style={styles.submitBtnText}>Submit expense</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  inputWrapper: {
    paddingTop: 20,
  },
  submitBtn: {
    backgroundColor: '#8f4dc9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 30,
    borderRadius: 20,
  },
  submitBtnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'arial',
  },
});

export default AddExpense;
