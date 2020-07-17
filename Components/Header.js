import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BoutonIcon from './BoutonIcon';


export default function Header(props) {

  return (
      <View style={styles.header}> 
        {props.user !== undefined &&
          <View style={styles.profileButton}>
            <View>
              <Text style={styles.text}>{props.user.firstname} {props.user.lastname} </Text>
            </View>
            <View style={styles.boutonLogout}>
              <BoutonIcon  icon={"power-standby"} iconColor={"white"} color={'#C23131'} iconSize={15} width={30} onPress={props.onLogout} />
            </View>
          </View>
        }
      </View>
  )
}


const styles = StyleSheet.create({
  header: {
    marginTop:5,
    marginRight:5,
    minWidth:400,
    height:32,
    flexDirection: 'row',
    justifyContent:'flex-end',
  },
  text: {
    fontSize:20,
    color:'white',

  },
  boutonboutonLogoutAdEvent: {
    flex:1,
  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})