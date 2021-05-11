/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();


const HomeScreen = () => {


  return (

    <View
      style={{
        flex: 1, alignItems: 'center', justifyContent: 'center'
      }}>
      <Text>Home kuk Screen</Text>
    </View>

  );
};
const App = () => {
  return (
    <NavigationContainer><Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator></NavigationContainer>
  );
}


export default App;
