import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';


export default class CirclePictureArea extends React.Component {
    render(){
        
        const {text, color, width, srcPhoto, onPress}=this.props;

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
            image:{
                borderRadius:width/2,
                width:width,
                height:width,
                borderBottomWidth:1.5,
                borderLeftWidth:1,
                borderRightWidth:1,

            }
          })
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                    <View style={styles.textArea}>
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