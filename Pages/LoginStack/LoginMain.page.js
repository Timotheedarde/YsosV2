import React from 'react';
import Login from '../../Components/Login';
import { getUsersFromApi } from '../../API/api'


export default function LoginPage(props) {


  const checkLogin = async (username, password) => {

    const response = await getUsersFromApi(username, password)
    
    let userFound = response.data[0];
    let checkUsername = userFound.username;
    let checkPassword = userFound.password;
    // console.log("username", checkUsername);
    // console.log("password", checkPassword);
    //console.log(username);
    //console.log(password);

    if (checkUsername === username && checkPassword === password) {
        props.onLoginSuccessful(userFound)
    } else {
        alert("L'identifiant ou le mot de passe est incorrecte")
    }
}


  return (
    <Login onLogin={checkLogin}/>
  )

}
