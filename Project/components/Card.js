import React from 'react'
import { StyleSheet,
     Text,
      View,
    ActivityIndicator,
    ScrollView,
    Image,
 } from 'react-native'

export default function Card() {
  return (
    <ScrollView >
      <View style = {styles.ActivityIndicator}> 
      <Text>ActivityIndicator Example</Text>
      <ActivityIndicator />
      <ActivityIndicator size='large' color='#0000ff'  />
      <ActivityIndicator size='small' color='#00ff00'/>
      <ActivityIndicator size="large" color='' />
      </View>
     


      <View>
        <View style={styles.
          Container}>
          <Image
          source={
            {
              uri: 'https://images.pexels.com/photos/10487148/pexels-photo-10487148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
          }
          style={styles.CardImage}
          />
          <Text style={styles.Cardheading}>Hawa Mahal</Text>
          <Text style={styles.cardDesc}>The posterior of the famous façade from inside of the Hawa Mahal</Text>
          <Text style={styles.cardDist}>20 km Away</Text>
        </View>
      </View>

            

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ActivityIndicator:{
    paddingBottom:34
  },
    Container: {
       backgroundColor:'#F9DDA4',
       paddingHorizontal:8,
       borderWidth:4,
       borderColor:'#F9DDA4',
        marginTop: 20,
        borderTopRightRadius:6,
        borderTopLeftRadius: 6,
        paddingBottom:34,
        elevation:4,
        shadowOffset: { width: 0, height: 8 },
        
        
        
    },
    CardImage:{
      height:200,
      width:400,
      alignContent:'center',
      resizeMode:'cover',
      borderTopRightRadius:6,
      borderTopLeftRadius: 6,
      marginBottom:10
    },
    Cardheading:{
      fontSize:24,
      marginBottom:5,
      textAlign:'center'
    },
    cardDesc: {
      fontSize: 18,
      marginBottom:5
    },
    cardDist: {
      fontSize: 16,
      textAlign:'right'

    },
})