import { Image, StyleSheet, Text, View,SafeAreaView,InputText, TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native'
import React from 'react'
import SignIn from './SignIn'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function LoginPage({navigation}) {
  return (
    <SafeAreaView >
      <ScrollView keyboardShouldPersistTaps='handled'>
      <View style={styles.rootContainer}>
        <Image source={require('../Images/shape.png')} style={styles.imgContainer}/>
        <Text style={styles.TxtHeading}>Welcome to Onboard! </Text>
        <Text style={styles.Txtdesc}>Let’s help to meet up your tasks.</Text>
  
        <TextInput  placeholder='Enter your full name' style={styles.inputbtn}/>
        <TextInput  placeholder='Enter your Email' style={styles.inputbtn}/>
        <TextInput  placeholder='Enter Password' style={styles.inputbtn}/>
        <TextInput  placeholder='Confirm password' style={styles.inputbtn}/>

        
        <TextInput  placeholder='Enter your full name' style={styles.inputbtn}/>
        <TextInput  placeholder='Enter your Email' style={styles.inputbtn}/>
        <TextInput  placeholder='Enter Password' style={styles.inputbtn}/>
        <TextInput  placeholder='Confirm password' style={styles.inputbtn}/>
        
    

      <TouchableOpacity style={styles.registerbtn}  onPress={()=>Alert.alert("your detail have been submited")}>
        <Text style={styles.TxtReg}>Register</Text>
      </TouchableOpacity>
      
      <Text style={styles.txtFooter}>Already have an account ? <Text style={{color:"#50C2C9"}}  onPress={() => navigation.navigate('signIn')}>Sign In</Text></Text>
     
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  imgContainer:{
    marginBottom:30
  },
  TxtHeading:{
    color:'#000000',
    fontSize:27,
    textAlign:'center',
  marginBottom:31,
    },
  Txtdesc:{
    textAlign:'center',
    marginBottom:12
    },
    inputbtn:{
      marginHorizontal:23,
      width:350,
      height:40,
      borderRadius:8,
      padding:8,   
      marginBottom:24,
      backgroundColor:'#FFFFFF'
    },
    registerbtn:{
      backgroundColor:'#50C2C9',
      marginHorizontal:23,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:8,
       height:50,
       marginBottom:10
    },
    TxtReg:{
      color:'#FFFFFF',
     fontSize:20
    },
 
    txtFooter:{
      alignSelf:'center',
      fontSize:16,
      color:'#000000'
    }
})