/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native'
import {
  NavigationContainer
} from '@react-navigation/native';


import { DrawerContent } from './screens/DrawerContent';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MaintabScreen'
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';

import RootStackScreen from './screens/RootStackScreen';
import { AuthContext } from './components/context';

const Drawer = createDrawerNavigator();


const App = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [userToken, setUserToken] = React.useState(null)

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('fgk')
      setIsLoading(false)
    },
    signOut: () => {
      setUserToken(null)
      setIsLoading(false)
    },
    signUp: () => {
      setUserToken('fgh')
      setIsLoading(false)
    },
  }))
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return (
      <View ><ActivityIndicator size="Large" />
      </View>

    )
  }
  return (
    <AuthContext.Provider value={authcontext}>
      <NavigationContainer >
        {userToken !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />

        )
        }
      </NavigationContainer>
    </AuthContext.Provider>

  );
}


export default App;



// import { View, ActivityIndicator } from 'react-native';

  // DefaultTheme as NavigationDefaultTheme,
  // DarkTheme as NavigationDarkTheme

// import {
//   Provider as PaperProvider,
//   DefaultTheme as PaperDefaultTheme,
//   DarkTheme as PaperDarkTheme
// } from 'react-native-paper';
// const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  // const CustomDefaultTheme = {
  //   ...NavigationDefaultTheme,
  //   ...PaperDefaultTheme,
  //   colors: {
  //     ...NavigationDefaultTheme.colors,
  //     ...PaperDefaultTheme.colors,
  //     background: '#ffffff',
  //     text: '#333333'
  //   }
  // }

  // const CustomDarkTheme = {
  //   ...NavigationDarkTheme,
  //   ...PaperDarkTheme,
  //   colors: {
  //     ...NavigationDarkTheme.colors,
  //     ...PaperDarkTheme.colors,
  //     background: '#333333',
  //     text: '#ffffff'
  //   }
  // }

  // const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;