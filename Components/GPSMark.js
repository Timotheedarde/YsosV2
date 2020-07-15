import * as React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function GPSMarks(props){

        const styles = StyleSheet.create({
            container:{
                alignItems: 'center',
                justifyContent:'center',
                //backgroundColor:props.color,
                //borderRadius:50,
                width:props.width,
                height:props.width,
                //margin:5,
            },
            icon:{
                textAlign:'center',
                fontWeight:"bold",
            }
        })

        return (
            <TouchableOpacity style={styles.container}>
                <MaterialCommunityIcons style={styles.icon} name={props.icon} color={props.iconColor} size={props.iconSize} />
            </TouchableOpacity> 
        );
}