import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native';


export default class CirclePictureArea extends React.Component {
    render(){
        
        const {text, color, width, onPress}=this.props;

        const styles = StyleSheet.create({
            container:{
                margin:5,
                backgroundColor:color,
                borderRadius:width/2,
                width:width,
                height:width,
                borderBottomWidth:1,
                borderLeftWidth:.5,
                borderRightWidth:.5,
            },
            textArea:{
                flex:1,
                alignItems:'center',
                justifyContent:'center',
            },
            text:{
                textAlign:'center',
                color:'grey',
                fontSize: 30,
            },
          })
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                    <View style={styles.textArea}>
                        <Text style={styles.text}>{text}</Text>
                    </View>
            </TouchableOpacity> 
        );
    }
}