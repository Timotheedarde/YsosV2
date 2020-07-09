import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import NavigationLogin from './Navigation/NavigationLogin'
import Navigation from './Navigation/Navigation'


export default function App() {
  return (
    //<NavigationLogin/>
    <Navigation/>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});


