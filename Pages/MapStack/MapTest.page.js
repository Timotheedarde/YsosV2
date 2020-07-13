import React from 'react';
import { StyleSheet, View } from 'react-native';
import BoutonIcon from '../../Components/BoutonIcon';
import MapView,{ PROVIDER_GOOGLE } from 'react-native-maps';

export default function MapTestPage(props){

  return (
      <View style={styles.container}>
        <View style={styles.map_container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: 44.8638683,
                    longitude: -0.5584363,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
        </View>
        <View style={styles.boutonAdEvent}>
          <BoutonIcon  icon={"crosshairs-gps"} iconColor={"white"} color={'#2231B2'} iconSize={45} width={80} onPress={() => props.navigation.navigate('MapPostEvent')} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
    map_container: {
      ...StyleSheet.absoluteFillObject,
      flex:1,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    boutonAdEvent: {
      position:'absolute',
      right:10,
      bottom:10,
    },
   });
