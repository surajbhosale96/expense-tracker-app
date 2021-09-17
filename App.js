import React from 'react';

import {Provider} from 'react-redux';
import DashBoard from './src/screens/DashBoard';
import AddExpense from './src/screens/AddExpense';
import Transactions from './src/screens/Transactions';
import {configureStore} from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
const store = configureStore();
const Tab = createMaterialBottomTabNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="DashBoard">
          <Tab.Screen name="DashBoard" component={DashBoard} />
          <Tab.Screen name="AddExpense" component={AddExpense} />
          <Tab.Screen name="Transactions" component={Transactions} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
