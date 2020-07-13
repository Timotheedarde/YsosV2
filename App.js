import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import NavigationLogin from './Navigation/NavigationLogin'
import Navigation from './Navigation/Navigation'

import { Provider } from 'react-redux'
import Store from './Store/configureStore'


export default function App() {
  return (
    // <Provider store={Store}>
    //   <NavigationLogin/>
    // </Provider>

    // <NavigationLogin/>
    <Navigation/>
  );
}
