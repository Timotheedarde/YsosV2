import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default class TextCustom extends React.Component {
    render(){
        const {text,fontSize, color, fontWeight, textAlign}=this.props;

        const styles = StyleSheet.create({
            textArea:{
                margin:5,
                padding:5,
            },
            text:{
                color:color,
                fontSize:fontSize,
                fontWeight:fontWeight,
                textShadowColor: 'black',
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 10,
                textAlign: textAlign
            }
          })
        return (
            <View style={styles.textArea}>
                <Text style={styles.text}>{text}</Text>
            </View>
        );
    }
}