import * as React from 'react';
import { StyleSheet, TextInput} from 'react-native';


export default function TextInputCustom(props){

    const styles = StyleSheet.create({
        zone:{
            margin:5,
            backgroundColor:'white',
            borderTopWidth: .5,
            borderRightWidth: .5,
            borderBottomWidth: 2,
            borderLeftWidth: 2,
            borderBottomColor:'black',
            width:250,
            padding:5,
        }
        })
    return (
            <TextInput style={styles.zone} placeholder={props.placeholder} placeholderTextColor={'grey'} onChangeText={props.onChangeText}/>
    );
}