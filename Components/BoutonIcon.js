import * as React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function BoutonIcon(props){

        const styles = StyleSheet.create({
            container:{
                alignItems: 'center',
                justifyContent:'center',
                backgroundColor:props.color,
                borderRadius:50,
                width:props.width,
                height:props.width,
                borderBottomWidth:.5,
                borderLeftWidth:.2,
                borderRightWidth:.2,
            },
            icon:{
                textAlign:'center',
                fontWeight:"bold",
            }
        })

        return (
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <MaterialCommunityIcons style={styles.icon} name={props.icon} color={props.iconColor} size={props.iconSize} />
            </TouchableOpacity> 
        );
}