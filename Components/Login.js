import React, {useState} from 'react';
import { View, StyleSheet,ImageBackground } from 'react-native';

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

  const image = require('../Images/photos/ysoslogo.png');

  return (
    <View style={styles.container}>
      {/* <Logo/> */}
      <ImageBackground source={image} style={styles.image}>
        <TextInputCustom placeholder={'Pseudo'} onChangeText={(text)=>handleUsername(text)} />
        <TextInputCustom placeholder={'Mot de passe'} onChangeText={(text)=>handlePassword(text)}/>
        <BoutonCustom text={'Mot de passe perdu'} color={"#00B1FF"} fontSize={15} width={180} onPress={handleLogin}/>
        <BoutonCustom text={'Se connecter'} color={"#3DBB41"} fontSize={30} width={250} onPress={handleLogin}/>
        <View style={styles.bottom}></View>
    </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  image: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    resizeMode: "contain",
  },
  bottom:{
    height:50,
  },
})


