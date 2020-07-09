import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image} from 'react-native';


export default class GPSMark extends React.Component {
    render(){
        const {onPress}=this.props;
        const styles = StyleSheet.create({
            gps_mark:{
                width:40,
                height:50,
            },
          })
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image
                    style={styles.gps_mark}
                    source={require('../assets/gps_mark_black.png')}
                />
            </TouchableOpacity> 
        );
    }
}