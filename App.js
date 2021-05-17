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
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: 'Over view',
      headerLeft: () => {
        <Icon.Button name="ios-menu" size={25}
          backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      }
    }} />
  </HomeStack.Navigator>
)

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
      headerLeft: () => {
        <Icon.Button name="ios-menu" size={25}
          backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      }
    }} />
  </DetailsStack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;


// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   Button,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';


//   return (

//     <View
//       style={{
//         flex: 1, alignItems: 'center', justifyContent: 'center'
//       }}>
//       <Text>Home kuks Screen loaded</Text>
//       <Button title="Go to Details"
//         onPress={() => navigation.navigate("Details")} />
//     </View>

//   );
// };

// const DetailsScreen = ({ navigation }) => {


//   return (

//     <View
//       style={{
//         flex: 1, alignItems: 'center', justifyContent: 'center'
//       }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details again ...."
//         onPress={() => navigation.push("Details")}
//       /><Button
//         title="Go to Home"
//         onPress={() => navigation.navigate("Home")}
//       /><Button
//         title="Go Back ...."
//         onPress={() => navigation.goBack()}
//       /><Button
//         title="Go to First screen"
//         onPress={() => navigation.popToTop("Details")}
//       />

//     </View>

//   );
// };
