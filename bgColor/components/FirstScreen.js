import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import LoginPage from './LoginPage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function FirstScreen({navigation}) {
   
 
    return (<>
        <View>
            <Image source={require('../Images/shape.png')} />
        </View>
        <Image source={require('../Images/FirstScreen.png')} style={styles.imgFirstScreen} />
     
        <Text style={styles.Txtheading}>Gets things with TODO</Text>
        <Text numberOfLines={6} style={styles.textbox} adjustsFontSizeToFit>Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Consequat urna quam felis interdum quisque. Malesuada adipiscing tristique ut eget sed.</Text>
  
        
        <TouchableOpacity style={styles.registerbtn}  onPress={()=> navigation.navigate('login')}>
        <Text style={styles.TxtReg}>Get Started</Text>
      </TouchableOpacity>
    </>
 )
}

const styles = StyleSheet.create({
    imgFirstScreen: {
        alignSelf: 'center',
        marginBottom:65
    },
    container:{
      // backgroundColor:'red',
      flex:1,
      height:400
    },
    Txtheading:{
        fontSize:24,
        fontWeight:'600',
        color:"#000000",
        alignSelf:'center',
        marginBottom:20
        

         },
    textbox:{
      height:100,
      width:200,
      alignSelf:'center',
      marginBottom:50,
      // backgroundColor:'red',
    
      
  
      // backgroundColor:'green'
    },
    registerbtn:{
       backgroundColor:'#50C2C9',
      marginHorizontal:23,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:8,
       height:50
      },
      TxtReg:{
        color:'#FFFFFF', 
        fontSize:16
      },


})