import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home , CreateTask , Feeds , Login , Status} from '../../container';

const StackNavigator = createStackNavigator();
function AppStack({ navigation }) {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <StackNavigator.Screen name="Home" component={Home} />
      <StackNavigator.Screen name="CreateTask" component={CreateTask} />
      <StackNavigator.Screen name="Feeds" component={Feeds} />
      <StackNavigator.Screen name="Login" component={Login} />
      <StackNavigator.Screen name="Status" component={Status} />

    </StackNavigator.Navigator>
  );
}

export default AppStack;
