/**
 * Sample React Native App
 */
/*
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          {global.HermesInternal == null ? null : (
            <View>
              <Text>Engine: Hermes</Text>
            </View>
          )}
          <View>
            <View>
              <Text>Step One</Text>
              <Text>
                Edit <Text>App.js</Text> to change this screen and then come
                back to see your edits.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;


*/

/**
 * App.js
 *
 * Root component of the app,
 * responsible for setting up routes.
 *
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Components
import Home from './src/Views/Home/Home';
import Profile from './src/Views/Profile/Profile';

/**
 * createStackNavigator
 *
 * Creates a stack of our routes.
 *
 */
const Navigator = createStackNavigator({
  Home: {screen: Home},
  Profile: {screen: Profile},
});

/**
 * createAppContainer
 *
 * Responsible for managing app state and linking
 * the top-level navigator to the app environment.
 *
 */
const App = createAppContainer(Navigator);

export default App;
