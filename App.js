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
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();


const HomeScreen = ({ navigation }) => {

  return (

    <View
      style={{
        flex: 1, alignItems: 'center', justifyContent: 'center'
      }}>
      <Text>Home kuks Screen loaded</Text>
      <Button title="Go to Details"
        onPress={() => navigation.navigate("Details")} />
    </View>

  );
};

const DetailsScreen = ({ navigation }) => {


  return (

    <View
      style={{
        flex: 1, alignItems: 'center', justifyContent: 'center'
      }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details again ...."
        onPress={() => navigation.push("Details")}
      /><Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      /><Button
        title="Go Back ...."
        onPress={() => navigation.goBack()}
      /><Button
        title="Go to First screen"
        onPress={() => navigation.popToTop("Details")}
      />

    </View>

  );
};

const App = () => {
  return (
    <NavigationContainer><Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator></NavigationContainer>
  );
}


export default App;
