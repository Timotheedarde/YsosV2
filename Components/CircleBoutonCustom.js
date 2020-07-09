import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native';


export default class CircleBoutonCustom extends React.Component {
    render(){
        const {number, color, onPress}=this.props;

        const styles = StyleSheet.create({
            container:{
                backgroundColor:color,
                borderRadius:50,
                width:70,
                height:70,
            },
            text:{
                color:'white',
                fontSize: 30,
            },
            zone:{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }
          })
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                    <View style={styles.zone}>
                    <Text style={styles.text}>{number}</Text>
                    </View>
            </TouchableOpacity> 
        );
    }
}
