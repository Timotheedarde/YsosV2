import React from 'react';
import { Text, View, Button } from 'react-native';


export default function MapMainPage(props){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => props.navigation.navigate('MapEventDetails')}
                />
                <Button
                    title="Contrôle Doublon"
                    onPress={() => props.navigation.navigate('MapDuplicateAlert')}
                />
                <Button
                    title="Publier un Event"
                    onPress={() => props.navigation.navigate('MapPostEvent')}
                />
                <Button
                    title="Vers la carte test"
                    onPress={() => props.navigation.navigate('MapTest')}
                />
                <Button
                    title="Vers la carte test 2"
                    onPress={() => props.navigation.navigate('MapTest2')}
                />
            </View>
        )
}
