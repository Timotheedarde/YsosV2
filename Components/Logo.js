import * as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Logo extends React.Component {
    render(){
        const {onPress}=this.props;
        const styles = StyleSheet.create({
            Area: {
                flex: 1,
                aspectRatio:1,
                resizeMode: 'stretch',
                backgroundColor:'red'
            }
          })
        return (
                <Image
                    style={styles.Area}
                    source={require('../Images/photos/ysoslogo.png')}
                />
        );
    }
}