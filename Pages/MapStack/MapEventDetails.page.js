import React from 'react';
import { StyleSheet, View } from 'react-native';

import CirclePictureArea from '../../Components/CirclePictureArea'
import TextCustom from '../../Components/TextCustom'
import CircleBoutonCustom from '../../Components/CircleBoutonCustom'

export default class MapEventDetailsPage extends React.Component{

    render(){
        const {navigation} = this.props;
        return(
            <View style={styles.main_container}>
                <View style={styles.img_container}>
                    <CirclePictureArea text={"Photo de l'évènement"} color={'white'} srcPhoto={"https://images.sudouest.fr/2019/06/19/5d0b98eb66a4bd420b5ac1fb/widescreen/1000x500/le-festival-relache.jpg"} />
                </View>
                <View style={styles.title_container}>
                    <TextCustom text={"Lady Gaga en concert à l'Iboat"} fontSize={25} color={'white'} fontWeight={'bold'} />
                </View>
                <View style={styles.text_container}>
                    <TextCustom text={'Publié par Jean michel'} fontSize={15} color={'white'} fontWeight={'bold'} />
                    <TextCustom text={'Il y a 12 minutes'} fontSize={15} color={'white'} fontWeight={'bold'} />
                </View>
                <View style={styles.vote_container}>
                    <CircleBoutonCustom number={'30'} color={'#3DBB41'} />
                    <CircleBoutonCustom number={'0'} color={'#C23131'} />
                </View>
            </View>
        )
    }
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