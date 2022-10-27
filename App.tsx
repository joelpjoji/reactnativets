/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profile from './components/Profile/Profile';
import ProfileDetails from './screens/ProfileDetails/ProfileDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // <SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="profile">
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="profiledetails" component={ProfileDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default App;
