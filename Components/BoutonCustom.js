import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text} from 'react-native';


export default class BoutonCustom extends React.Component {
    render(){
        const {text, color, fontSize, width, onPress}=this.props;

        const styles = StyleSheet.create({
            container:{
                backgroundColor:color,
                margin:5,
                padding:10,
                borderRadius:50,
                width:width,
            },
            text:{
                textAlign:'center',
                color:'white',
                fontSize: fontSize,
                fontWeight:"bold",
            }
          })
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                    <Text style={styles.text}>{text}</Text>
            </TouchableOpacity> 
        );
    }
}

