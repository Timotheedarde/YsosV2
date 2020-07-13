import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import TextCustom from '../../Components/TextCustom'
import BoutonCustom from '../../Components/BoutonCustom'

export default function MapDuplicateAlertPage(props){

    const DATA = [
        {
            id: '1',
            title: "Lady Gaga en concert à l'Iboat",
        },
        {
            id: '2',
            title: "Chanteur de rue devant le bistro du régent",
        },
        {
            id: '3',
            title: "Soirée 80's au JOYA Bar",
        },
        // {
        //     id: '4',
        //     title: "Chanteur de rue devant le bistro du régent",
        // },
        // {
        //     id: '5',
        //     title: "Soirée 80's au JOYA Bar",
        // },
        ];

    function Item({ title }) {
        return (
        <TouchableOpacity style={styles.item_container}>
            <TextCustom text={title} fontSize={20} color={'white'} fontWeight={'bold'} textAlign={'justify'}  />
        </TouchableOpacity>
        );
    }

    return(
        <SafeAreaView style={styles.main_container}>
            <View style={styles.text_container}>
                <TextCustom text={"Il y a en ce moment un ou plusieurs évènement(s) déja marqué(s) à moins de 20 mètres de votre position. S'agit-il d'un nouvel évènement?"} 
                    fontSize={20} color={'white'} fontWeight={'bold'} textAlign={'center'} 
                />
            </View>
            <View style={styles.list_item}>
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Item title={item.title} />}
                />
            </View>
            <View style={styles.bouton_container}>
                <BoutonCustom text={"En effet, il s'agit bien d'un autre évènement"} color={'#3DBB41'} fontSize={20} width={250} onPress={() => props.navigation.navigate('MapPostEvent')} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main_container:{
        flex: 1,
        backgroundColor:'rgba(34, 49, 178, .85)',
    },
    list_item:{
        height:250,
    },
    item_container:{
        marginTop:5,
        justifyContent:'center',
        alignItems:'flex-start',
        backgroundColor:'rgba(34, 49, 178, 1)',
    },
    text_container:{
        flex:2,
        justifyContent:'center',
        alignItems:'flex-end',
    },
    bouton_container:{
        alignItems:'center',
    }
})