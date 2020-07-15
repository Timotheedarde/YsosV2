import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';

import Logo from '../Components/Logo'
import TextInputCustom from '../Components/TextInputCustom'
import BoutonCustom from '../Components/BoutonCustom'


export default function Login(props) {


  // const [username, setUsername] = useState();
  // const [password, setPassword] = useState();

  // const handleUsername = (texte) => {
  //   setUsername(texte)
  // }

  // const handlePassword = (texte) => {
  //   setPassword(texte)
  // }

  let  username ;
  let  password ;

  const handleUsername = (texte) => {
    username = texte;
  }

  const handlePassword = (texte) => {
    password = texte;
  }


  const handleLogin = () => {
    //console.log("login infos", username, password)
    props.onLogin(username, password)
  }
  return (
    <View style={styles.container}>
      <Logo />
      <TextInputCustom placeholder={'Pseudo'} onChangeText={(text)=>handleUsername(text)} />
      <TextInputCustom placeholder={'Mot de passe'} onChangeText={(text)=>handlePassword(text)}/>
      <BoutonCustom text={'Se connecter'} color={"#3DBB41"} fontSize={30} width={250} onPress={handleLogin}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
  },
})


