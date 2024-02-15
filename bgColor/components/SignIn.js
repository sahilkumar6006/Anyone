import { Image, StyleSheet, Text, View,TextInput,
    TouchableOpacity, 
    Alert,
    ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignIn({navigation}) {
  return (
  
    <SafeAreaView >
      <ScrollView   keyboardShouldPersistTaps='handled'>
   
       <Image source={require('../Images/shape.png')} style={styles.Img}/>
    <Text style={styles.header}>Welcome back</Text>
    <Image source={require('../Images/SignImg.png')} style={styles.Img2}/>
    <TextInput  placeholder='Enter your Email' style={styles.inputbtn}/>
    <TextInput  placeholder='Enter Password' style={styles.inputbtn}/>
    <Text style={{alignSelf:'flex-end', color:'#50C2C9', marginBottom:30 , marginEnd:24}}>Forget password ?</Text>
    <TouchableOpacity style={styles.registerbtn}  onPress={()=>navigation.navigate('lastpage')}>
        <Text style={styles.TxtReg} >Login</Text>
      </TouchableOpacity>
      </ScrollView>
     </SafeAreaView>
   

  )
}

const styles = StyleSheet.create({
    Img:{
    marginBottom:40
      },
    Img2:{
        alignSelf:'center',
        marginBottom:20
    },
    header:{
        fontSize:20,
        fontWeight:'600',
        alignSelf:'center'
    },
    inputbtn:{
      marginHorizontal:23,
      width:350,
      height:40,
      borderRadius:8,
      padding:8,   
      marginBottom:14,
      backgroundColor:'#FFFFFF'
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
        fontSize:20
      },
})