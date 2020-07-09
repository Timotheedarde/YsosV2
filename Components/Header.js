import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';


export default function Header(props) {

  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        {props.user !== undefined &&
          <View style={styles.profileButton}>
            <Text style={styles.text}>{props.user.firstname} {props.user.lastname} </Text>
            <Button onPress={props.onLogout} title="Deconnexion" />
          </View>
        }
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    minWidth:400,
    height:30,
    backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    fontSize:30,
    color:'black',

  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})