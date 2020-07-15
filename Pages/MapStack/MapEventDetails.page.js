import React from 'react';
import { StyleSheet, View } from 'react-native';

import CirclePictureArea from '../../Components/CirclePictureArea'
import TextCustom from '../../Components/TextCustom'
import CircleBoutonCustom from '../../Components/CircleBoutonCustom'

export default function MapEventDetailsPage({route, navigation}){
    const { title } = route.params;
    const { type } = route.params;
    const { author } = route.params;
    const { created } = route.params;
    const { photo } = route.params;
    const { pos } = route.params;
    const { neg } = route.params;



    return(
        <View style={styles.main_container}>
            <View style={styles.img_container}>
                <CirclePictureArea color={'white'} width={250} srcPhoto={photo} />
            </View>
            <View style={styles.title_container}>
                <TextCustom text={title} fontSize={25} color={'white'} fontWeight={'bold'} />
            </View>
            <View style={styles.text_container}>
                <TextCustom text={'Publié par ' + author} fontSize={15} color={'white'} fontWeight={'bold'} />
                <TextCustom text={created} fontSize={15} color={'white'} fontWeight={'bold'} />
            </View>
            <View style={styles.vote_container}>
                <CircleBoutonCustom number={pos} color={'#3DBB41'} />
                <CircleBoutonCustom number={neg} color={'#C23131'} />
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
        flex: 5,
        alignItems:'center',
    },
    title_container:{
        marginTop:10,
        flex: 2,
        justifyContent:'center',
        alignItems:'flex-start',
    },
    text_container:{
        flex: 2,
        justifyContent:'center',
        alignItems:'flex-end',
    },
    vote_container:{
        flex: 2,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
    }
})