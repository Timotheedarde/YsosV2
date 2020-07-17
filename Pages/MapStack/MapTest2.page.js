import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View,Text,  Animated} from 'react-native';
import BoutonIcon from '../../Components/BoutonIcon'
import GPSMark from '../../Components/GPSMark'

/**
 ** Support de Google Map avec React-Native-Map
 */
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps' 
/**
 ** Géolocalisation avec React-Native-Geolocation-Map
 */
import Geolocation from 'react-native-geolocation-service'

export default function MapTest2({ route, navigation}){


    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    //React.useEffect(() => {
        // if (hasLocationPermission) {
          // Position à l'initialisation de la carte
           Geolocation.getCurrentPosition(
                (position) => {
                // console.log(position);
                // console.log(typeof position.coords.latitude);
                // console.log(position.coords.latitude);
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
                },
                (error) => {
                console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
          // Position en cas de mouvement de l'utilisateur
           Geolocation.watchPosition(
                (position) => {
                // console.log(position);
                // console.log(typeof position.coords.latitude);
                // console.log(position.coords.latitude);
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
                },
                (error) => {
                console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, interval: 10 }
            );
        // }
//}, []);
// console.log({longitude, latitude})



    //ANIMTATION BOUTON ADEVENT//
    const fadeAnim = useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        Animated.timing(
        fadeAnim,
        {
            toValue: 1,
            delay:3000,
            duration: 2000,
            useNativeDriver: true
        }
        ).start();
    }, [fadeAnim])


    return(
    <View style={styles.main}>
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                mapType={"standard"}
                //showsUserLocation = {true}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            <Marker
            title={"Vous"}
            coordinate={{latitude,longitude}}
            >
              <GPSMark  icon={"odnoklassniki"} iconColor={"red"} color={'transparent'} iconSize={50}/>
            </Marker>
            <RenderMarqueurs navigation={navigation}/>
            </MapView>
            <Animated.View style={[styles.boutonAdEvent ,{opacity: fadeAnim}]}>
              <BoutonIcon  icon={"crosshairs-gps"} iconColor={"white"} color={'#2231B2'} iconSize={45} width={80} onPress={() => navigation.navigate('MapPostEvent',{lat:latitude, lng:longitude} )} />
            </Animated.View>
        </View>
    </View>
    )
}

export function RenderMarqueurs (props) {
    const marqueurs = {poi: [
        { id: 1 , coordinate: {latitude : 44.8659, longitude : -0.5592}, title: "Super concert à l'Iboat !", type:1, author:'Jean michel', created:'21:34:44', pos:'30', neg:'2',
        photo:'https://www.visiter-bordeaux.eu/wp-content/uploads/2019/07/iboat-bordeaux.jpg'},

        { id: 2 , coordinate: {latitude : 44.8675, longitude : -0.5580}, title: "Bassin des lumières", type:3, author:'Victoire', created:'14:58:32', pos:'45', neg:'0', 
        photo:'https://static.actu.fr/uploads/2019/12/c-de-agostini-picture-library-854x670.jpg'},

        { id: 3 , coordinate: {latitude : 44.8645, longitude : -0.5530}, title: "Danse de rue", type:2, author:'Archimed', created:'20:18:74', pos:'86', neg:'0', 
        photo:'https://static.wixstatic.com/media/4ebeac_04d8a750d42c48abbb9608abc4f86bf9~mv2.jpg'},

        { id: 4 , coordinate: {latitude : 44.9187, longitude : -0.6240}, title: "Apéro chez Tony", type:4, author:'Timotéton', created:'18:13:26', pos:'164', neg:'22', 
        photo:'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/104655814_198576928073522_2997099855828177282_n.jpg?_nc_cat=106&_nc_sid=b96e70&_nc_oc=AQl6EGUYhd8ZFSM_eMtc46lwBEFC9UwqbBsrYVbiag5rNT4mHMIUGIl-EccjsIvzola0XwPyW_IXNQ7aJr8Qor9E&_nc_ht=scontent-cdt1-1.xx&_nc_tp=7&oh=e6f65c82a9ef48b4f0f1a93863221729&oe=5F357388'},
    ]}
    return(
    marqueurs.poi.map((marker) =>{
        const id = marker.id;
        const coordinate = marker.coordinate;
        const title = marker.title;
        const type = marker.type;
        const photo = marker.photo;
        const author = marker.author;
        const created = marker.created;
        const pos = marker.pos;
        const neg = marker.neg;

        const checkType = (type)=>{
            let color
            if(type === 1)
            {
                color = "#5062FF"
            }
            if(type === 2)
            {
                color = "#FB5ECB"
            }
            if(type === 3)
            {
                color = "#FF902E"
            }
            if(type === 4)
            {
                color = "#4FE863"
            }
        return color
        }

      return(
      <Marker
          key = {id}
          coordinate = {coordinate}
          title = {title}
          onPress={() => props.navigation.navigate('MapEventDetails',{ title:title,type:type, photo:photo, author:author, created:created,pos:pos,neg:neg })}
      >
      <GPSMark  icon={"map-marker"} iconColor={checkType(type)} color={'transparent'} iconSize={70} />
      </Marker>
      )

  })
  )
}

const styles = StyleSheet.create({
    main: {
        flex:1,
    },
    container: {
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
    userMarker:{

    }
})