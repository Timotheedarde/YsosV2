import React from 'react';
import { StyleSheet, View } from 'react-native';

import CirclePictureArea from '../../Components/CirclePictureArea'
import TextInputCustom from '../../Components/TextInputCustom'
import BoutonCustom from '../../Components/BoutonCustom'

export default class ProfilMainPage extends React.Component{

    render(){
        const {navigation} = this.props;
        return(
            <View style={styles.main_container}>
                <CirclePictureArea text={'Votre Avatar'} color={'white'} />
                <TextInputCustom placeholder={'Pseudo'} />
                <TextInputCustom placeholder={'Adresse Email'} />
                <BoutonCustom text={'Mettre à jour'} color={'#3DBB41'} fontSize={30} width={250} />
                <BoutonCustom text={'Supprimer mon compte'} color={'#C23131'} fontSize={15} width={250} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#3A60F8',
    }
})
