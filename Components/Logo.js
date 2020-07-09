import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Logo extends React.Component {
    render(){
        const {onPress}=this.props;
        const styles = StyleSheet.create({
            logoArea:{
                backgroundColor:'grey',
                margin:5,
                width:230,
                height:230,
            },
          })
        return (
            <TouchableOpacity style={styles.logoArea} onPress={onPress}>
            </TouchableOpacity>
        );
    }
}