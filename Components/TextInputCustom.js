import * as React from 'react';
import { StyleSheet, TextInput} from 'react-native';


export default function TextInputCustom(props){

    const styles = StyleSheet.create({
        zone:{
            margin:5,
            backgroundColor:'white',
            // borderTopWidth: .5,
            // borderRightWidth: .5,
            // borderBottomWidth: 2,
            // borderLeftWidth: 2,
            // borderColor:'black',
            width:250,
            height:50,
            borderRadius:50,
            paddingHorizontal:15,
            shadowColor: "#000",
            shadowOffset: {
                width: -2,
                height: -2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
        }
        })
    return (
            <TextInput style={styles.zone} placeholder={props.placeholder} placeholderTextColor={'grey'} onChangeText={props.onChangeText}/>
    );
}