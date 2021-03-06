import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import CirclePictureAreaEmpty from '../../Components/CirclePictureAreaEmpty'
import TextInputCustom from '../../Components/TextInputCustom'
import BoutonCustom from '../../Components/BoutonCustom'

export default function ProfilMainPage(){

    //console.log("get user",getUser);

        return(
            <View style={styles.main_container}>
                <CirclePictureAreaEmpty text={"Avatar"} color={'white'} width={150} />
                <TextInputCustom placeholder={'Pseudo'} />
                <TextInputCustom placeholder={'Adresse Email'} />
                <TextInputCustom placeholder={'Nom'} />
                <TextInputCustom placeholder={'Prénom'} />
                <BoutonCustom text={'Mettre à jour'} color={'#3DBB41'} fontSize={30} width={250} />
                <BoutonCustom text={'Supprimer mon compte'} color={'#C23131'} fontSize={15} width={250} />
                {/* <Button title="cliquez ici" /> */}
            </View>
        )
}

const styles = StyleSheet.create({
    main_container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#3A60F8',
    }
})
