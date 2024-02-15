import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Button
} from 'react-native'
import React from 'react'



const InstagramLogin = () => {

  return (
    <View style={{
      alignItems: 'center',
      flex: 1,
      paddingHorizontal:42
    }}>

      <Text style={{ alignItems: 'center',margin: 50}}>English</Text>

        <View>
        <Image source={require('../assets/instagram.png')}
           style={{marginBottom:65}}/>
        </View>
        
   

      <View style={{
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#1877F2',
        width:"100%",
        height:33,
        alignItems: 'center',
        marginBottom:35,
        borderRadius:5,
        paddingLeft:53
      }}>
        <Image source={require('../assets/logo.png')}
          style={styles.facimg} resizeMode='cover' />
        <Text style={{ paddingLeft: 10,
        color:'#FFF9F9'
         }}>Continue With Facebook</Text>
      </View>



        <Text style={{
          width:330,
          height:33,
          textAlign:'center',
        marginBottom:40
        }}>-----------------    OR       -----------------</Text>


        <TextInput placeholder='phone number,username, or email' style={styles.input} />
        <TextInput placeholder='password' style={styles.input2} />



        <Text style={{
          marginBottom:30,
       marginLeft:114,
       height:18,
       color:'#1877F2'
        }}>Forgot Password</Text>


      <Pressable
       >
     
     
        <Text style={{
          backgroundColor:'#1877F2',
          width:300,
         borderRadius:5,
        height:33,
        textAlign:'center',
        paddingTop:5,
        marginBottom:30,
        color:'#FFFEFE'
        }}>Login</Text>
     
        
      </Pressable>


        <Text style={{
          marginBottom:100
        }}><Text
        style={{
          
          width:"100%"
        }}
        >Don’t have an account? </Text><Text style={{color:'#267FF3'}}>sign up</Text></Text>


        <Text>from <Text style={{
          color:"#070000",
        }}>FACEBOOK</Text></Text>
 

    </View>



  )
}

export default InstagramLogin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  Languages: {
    borderWidth: 1,
    justifyContent: 'center'
  },
  InstagramText: {
    fontSize: 30,
    justifyContent: 'center'

  },
  imageText: {
    flex: 1,
    width: 10,
    backgroundColor: '1877F2',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    // width:330,
    width:'100%',
    height:42,
    marginBottom:20
   
  },
  input2: {
    borderWidth: 1,
    borderRadius: 5,
    width:'100%',
    height:42,

  },

  submit: {
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: '1877F2',
    marginBottom:30
    
  },


  facimg: {
    height: 20,
    width: 20
  },

  Value: {
    justifyContent: 'flex-end'
  },

  ImageContainer: {
    backgroundColor: '#1877F2',
  }


})