import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';


export default class CirclePictureArea extends React.Component {
    render(){
        
        const {text, color, srcPhoto, onPress}=this.props;

        const styles = StyleSheet.create({
            container:{
                margin:5,
                backgroundColor:color,
                borderRadius:100,
                width:200,
                height:200,
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
            image:{
                borderRadius:100,
                width:200,
                height:200,
                borderBottomWidth:1.5,
                borderLeftWidth:1,
                borderRightWidth:1,

            }
          })
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                    <View style={styles.textArea}>
                        {/* <Text style={styles.text}>{text}</Text> */}
                        <Image
                            style={styles.image}
                            source={{
                            uri: srcPhoto,
                            }}
                        />
                    </View>
            </TouchableOpacity> 
        );
    }
}