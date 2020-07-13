import React from 'react';
import { View, Text } from 'react-native'

export default function LoginMainPage(props) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home page Login</Text>
                <Button
                    title="connect"
                    onPress={() => props.navigation.navigate('connect')}
                />
                <Button
                    title="create Account"
                    onPress={() => props.navigation.navigate('createAccount')}
                />
            </View>
  )
}
