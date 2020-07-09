import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';


import Header from '../Components/Header';
import Navigation from '../Navigation/Navigation';
import LoginMain from '../Pages/LoginStack/LoginMain.page';


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
      <Header user={loggedInUser} onLogout={handleLogout}/>
      {loggedInUser &&
        <Navigation user={loggedInUser} onLogout={handleLogout}/>
      }
      {!loggedInUser &&
        <LoginMain onLoginSuccessful={handleLoginSuccessful}/>
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
  }
});

