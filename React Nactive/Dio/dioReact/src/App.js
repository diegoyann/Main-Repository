import React from 'react';
import {View,
Image,
Text,
StyleSheet,
SafeAreaView,
StatusBar,
Pressable,
Linking} from 'react-native'
import { linear } from 'react-native/Libraries/Animated/Easing';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9'
const colorDarkFontGitHub = '#4F565E'
const urlToMyGitHub = 'https://github.com/diegoyann';
const imgProfileGitHub = 'https://avatars.githubusercontent.com/u/70546879?v=4';



const App = () => {

    const handlePressGoToGitHub = async () =>{
        console.log('Verificando Link da URL')
        const res = await Linking.canOpenURL(urlToMyGitHub);
       if (res) {
           console.log('Link Aprovado');
           console.log('Abrindo Link');
           await Linking.openURL(urlToMyGitHub);
       }
    }
  
    return(
        <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGitHub} barStyle='light-content'/>
        <View style={style.content}>

        <Image style={style.avatar} 
        source={{uri:imgProfileGitHub}}
        accebilityLabel= 'Foto de Perfil ' />

        <Text style={[style.defaultText, style.name]}
         accebilityLabel= 'Diego Yann '>Diego Yann</Text>

        <Text style={[style.defaultText, style.nickname]}
        accebilityLabel= 'nickname: diegoyann '>diegoyann
        </Text>

        <Text style={[style.defaultText, style.description]}
        accebilityLabel= 'Descrição: Estudante de Análise e desenvolvimento de sistemas | Formado em Engenharia Mecânica'>
        Estudante de Análise e desenvolvimento de sistemas | Formado em Engenharia
        Mecânica
        </Text>
        
        <Pressable onPress={handlePressGoToGitHub}>
            <View style={style.button}>
            <Text style={[style.defaultText,style.textButton]}>
            Open In GitHub
            </Text>
            </View>        
        </Pressable>
        </View>
        </SafeAreaView>
       ) ;
    
}




export default App;
const style = StyleSheet.create({
container:{
    backgroundColor: colorGitHub,
    flex: 1, // expandir para a tela toda
    justifyContent:'center'
},
content:{
alignItems:'center',
padding:20,


},
avatar:{
    height:200,
    width: 200,
    borderRadius:100,
    borderColor:'white',
    borderWidth:2,
},
defaultText:{
    color:colorFontGitHub,
},

name:{
    fontSize:24,
    fontWeight:'bold',
    marginTop:20,
},
nickname:{
    fontSize:20,
    color: colorDarkFontGitHub
},
description:{
fontSize:16,
fontWeight:'bold'
},

button:{
    marginTop:20,
    backgroundColor:colorDarkFontGitHub,
    borderRadius:10,
    padding:20,
},
textButton:{
    fontWeight:'bold',
    fontSize:16,
}


    
});