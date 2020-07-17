import React,{useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CirclePictureAreaEmpty from '../../Components/CirclePictureAreaEmpty'
import TextInputCustom from '../../Components/TextInputCustom'
import TextCustom from '../../Components/TextCustom'
import BoutonIcon from '../../Components/BoutonIcon';
import BoutonCustom from '../../Components/BoutonCustom';





export default function MapPostEventPage({route, navigation}){

    const postEvent= (coordinate,title,type,time,author)=>{
        const NewEvent = { coordinate:coordinate, title:title, type:type,time:time,author:author}
        console.log("object",NewEvent);
        //TODO: envoie de l'objet vers plateforme Admin web pour traitement et publication
        navigation.navigate('MapTest2')// recharge la page map
    }



    //Recuperer le titre//
    let  title ;
    const handleTitle = (text) => {
      title = text;
    }

    //Recuperer le type//
    let type;
    const checkType = (value)=>{
        type = value
        //console.log(type)
    }

    //Recuperer l'utilisateur//
    /*TODO : Une fois les information utilisateur disponible en global sur l'application, récuperer le pseudo*/
    const author = 'Jean Michel'

    //Recuperer la date //
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    //console.log(time)

    //Recuperer les coordonées//
    const { lat } = route.params;
    const { lng } = route.params;
    //console.log('lat', lat)
    //console.log('lng', lng)
    const coordinate = {latitude : lat, longitude :lng};
    //console.log(coordinate);

        return(
            <View style={styles.main_container}>
                <View style={styles.img_container}>
                    <CirclePictureAreaEmpty text={"Prendre une photo"} color={'white'} width={200} />
                </View>
                <View style={styles.title_container}>
                    <TextInputCustom placeholder={"Saisir une description"} onChangeText={(text)=>handleTitle(text)} />
                </View>
                <View style={styles.filter_container}>
                    <TextCustom text={'Sélectioner le type'} fontSize={20} color={'white'} fontWeight={'bold'} textAlign={'center'} />
                    <View style={styles.filter_boutons} >
                        <BoutonIcon  icon={"yoga"} iconColor={"white"} color={'#FB5ECB'} iconSize={45} width={70} onPress={()=>checkType(1)} />
                        <BoutonIcon  icon={"music-clef-treble"} iconColor={"white"} color={'#5062FF'} iconSize={45} width={70} onPress={()=>checkType(2)} />
                        <BoutonIcon  icon={"guy-fawkes-mask"} iconColor={"white"} color={'#4FE863'} iconSize={45} width={70} onPress={()=>checkType(3)} />
                        <BoutonIcon  icon={"brush"} iconColor={"white"} color={'#FF902E'} iconSize={45} width={70} onPress={()=>checkType(4)} />
                    </View >
                </View>
                <View style={styles.submit_container}>
                    <BoutonCustom text={"C'est parti !"} color={'#3DBB41'} fontSize={30} width={300} onPress={()=>postEvent(coordinate,title,type,time,author)} />
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
        marginVertical:10,
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