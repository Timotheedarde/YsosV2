import React from 'react';
import { Text, View, Button } from 'react-native';


export default class MapMainPage extends React.Component{
    render(){
        const {navigation} = this.props;

        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('MapEventDetails')}
                />
                <Button
                    title="Contrôle Doublon"
                    onPress={() => navigation.navigate('MapDuplicateAlert')}
                />
                <Button
                    title="Publier un Event"
                    onPress={() => navigation.navigate('MapPostEvent')}
                />
            </View>
        )
    }
}
