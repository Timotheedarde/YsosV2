import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Header from '../Components/Header';
import Navigation from './Navigation';
import LoginConnectTo from '../Pages/LoginStack/LoginConnectTo.page';


export default function NavigationLogin() {


  const [loggedInUser, setLoggedInUser] = useState();


  const handleLoginSuccessful = (user) => {
    setLoggedInUser(user)
  }

  const handleLogout = () => {
    setLoggedInUser(undefined)
  }


  return (
    <View style={styles.container}>
      {loggedInUser &&
        <View>
          <Header  style={styles.header} user={loggedInUser} onLogout={handleLogout}/>
          <Navigation user={loggedInUser}/>
        </View>
      }
      {!loggedInUser &&
        <LoginConnectTo onLoginSuccessful={handleLoginSuccessful}/>
      }
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "#3A60F8"
  },
});

