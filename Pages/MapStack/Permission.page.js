import React from 'react';
import { Text, View, Button } from 'react-native';
import Geoloc from '../../Components/Geoloc'

export default function Permission(props){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Geoloc/>
            </View>
        )
}
