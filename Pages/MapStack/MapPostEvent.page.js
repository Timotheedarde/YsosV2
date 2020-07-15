import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CirclePictureArea from '../../Components/CirclePictureArea'
import TextInputCustom from '../../Components/TextInputCustom'
import TextCustom from '../../Components/TextCustom'
import CircleBoutonCustom from '../../Components/CircleBoutonCustom'
import BoutonCustom from '../../Components/BoutonCustom';

export default function MapPostEventPage({route, navigation}){
    const { lat } = route.params;
    const { lng } = route.params;
    // console.log('lat', lat)
    // console.log('lng', lng)
        return(
            <View style={styles.main_container}>
                <View style={styles.img_container}>
                    <CirclePictureArea text={"Prendre une photo"} color={'white'} />
                </View>
                <View style={styles.title_container}>
                    <TextInputCustom placeholder={"Saisir une description"} />
                </View>
                <View style={styles.filter_container}>
                    <TextCustom text={'Sélectioner le type'} fontSize={20} color={'white'} fontWeight={'bold'} textAlign={'center'} />
                    <View style={styles.filter_boutons} >
                        <CircleBoutonCustom  color={'#FB5ECB'} />
                        <CircleBoutonCustom  color={'#5062FF'} />
                        <CircleBoutonCustom  color={'#4FE863'} />
                        <CircleBoutonCustom  color={'#FFFA51'} />
                    </View >
                </View>
                <View style={styles.submit_container}>
                    <BoutonCustom text={"C'est parti !"} color={'#3DBB41'} fontSize={30} width={300} />
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    main_container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'rgba(34, 49, 178, .85)',
    },
    img_container:{
        marginTop:10,
        alignItems:'center',
    },
    title_container:{
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
    },
    text_container:{
        justifyContent:'center',
        alignItems:'flex-end',
    },
    filter_container:{
        justifyContent:'space-around',
    },
    filter_boutons:{
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    submit_container:{
        alignItems:'center'
    }
})